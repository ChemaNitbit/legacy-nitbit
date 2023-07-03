import * as React from 'react';

import { Menu } from 'react-native-paper';
import { TouchableOpacity, LayoutChangeEvent, UIManager, findNodeHandle, PermissionsAndroid } from 'react-native';
import { View } from 'react-native';

import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse, launchCamera, CameraOptions } from 'react-native-image-picker';

import { storage } from '../../../firebase-config';
import { StorageError, UploadTaskSnapshot, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { User, getAuth, updateProfile } from 'firebase/auth';
import NbAvatar from '../nb-avatar/NbAvatar';

interface MenuAnchor {
    x: number;
    y: number;
    width: number;
    height: number;
}

const NbProfilePhoto = () => {

    const [visible, setVisible] = React.useState(false);
    const [menuAnchor, setMenuAnchor] = React.useState<MenuAnchor | null>(null);
    const [selectImage, setSelectImage] = React.useState<string | undefined>();

    const imageRef: any = React.useRef(null);


    React.useEffect(() => {
        const user = getAuth().currentUser as User;

        console.log("user: ", user.photoURL);

        setSelectImage(user.photoURL as string);
    }, []);

    const openMenu = () => {
        setVisible(true);
    };

    const closeMenu = () => {
        setVisible(false);
    };

    const onLayout = (event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        const handle: number = findNodeHandle(imageRef.current) as number;
        UIManager.measureInWindow(handle, (x, y, _, __) => {
            setMenuAnchor({ x, y, width, height });
        });
    };



    const handleTakePhotoFromGallery = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            const loadImage = async () => {
                if (response.didCancel) {
                    console.log('El usuario canceló la toma de la foto');
                } else if (response.errorCode) {
                    console.log('Error al tomar la foto: ', response.errorCode);
                } else {
                    const uri = response.assets ? (response.assets[0].uri as string) : ''
                    const responseURI = await fetch(uri);
                    const blob = await responseURI.blob();
                    const filename = `${Date.now()}.jpg`;
                    const storageRef = ref(storage, `profiles/${filename}`);
                    const uploadTask = uploadBytesResumable(storageRef, blob);

                    uploadTask.on('state_changed',
                        (snapshot: UploadTaskSnapshot) => {
                            console.log("uploadTask.snapshot.state : ", snapshot.state);
                        },
                        (error: StorageError) => {
                            console.log("uploadTask.error : ", error);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
                                const authUser = getAuth();
                                updateProfile(authUser.currentUser as User, { photoURL: downloadURL })
                                setSelectImage(downloadURL);
                            })
                        }
                    )
                }
            }

            loadImage();
        });

        closeMenu();
    };

    let optionsCamera: CameraOptions = {
        saveToPhotos: true,
        mediaType: 'photo'
    }

    const handleTakePhotoFromCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(optionsCamera);
            const uri = result.assets ? (result.assets[0].uri as string) : '';
            setSelectImage(uri);
        }
    }


    return (
        <View>
            <TouchableOpacity onPress={openMenu} onLayout={onLayout} ref={imageRef}>
                <NbAvatar url={selectImage} size={100} />
            </TouchableOpacity>

            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={menuAnchor}>
                <Menu.Item onPress={handleTakePhotoFromCamera} title="Tomar foto" />
                <Menu.Item onPress={handleTakePhotoFromGallery} title="Seleccionar foto" />
            </Menu>
        </View>
    )
}

export default NbProfilePhoto;