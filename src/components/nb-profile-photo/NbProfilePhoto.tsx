import * as React from 'react';
import {useEffect} from 'react';

import {Menu} from 'react-native-paper';
import {
  TouchableOpacity,
  LayoutChangeEvent,
  UIManager,
  findNodeHandle,
  PermissionsAndroid,
} from 'react-native';
import {View} from 'react-native';

import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  CameraOptions,
} from 'react-native-image-picker';

import NbAvatar from '../nb-avatar/NbAvatar';
import {useCurrentUser} from '../../hooks/useCurrentUser';
import {IMAGE_DEFAULT} from '../../contants';
import {AppContextType, useAppContext} from '../../context/AppContext';

interface MenuAnchor {
  x: number;
  y: number;
  width: number;
  height: number;
}

const NbProfilePhoto = () => {
  const {changeProfilePhoto} = useAppContext() as AppContextType;

  const {photoURL} = useCurrentUser();

  const [visible, setVisible] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState<MenuAnchor | null>(null);
  const [selectImage, setSelectImage] = React.useState<string | null>(
    IMAGE_DEFAULT,
  );

  useEffect(() => {
    if (photoURL) {
      setSelectImage(photoURL);
    }
  }, [photoURL]);

  const imageRef: any = React.useRef(null);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const handle: number = findNodeHandle(imageRef.current) as number;
    UIManager.measureInWindow(handle, (x, y, _, __) => {
      setMenuAnchor({x, y, width, height});
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
          // console.log('El usuario canceló la toma de la foto');
        } else if (response.errorCode) {
          // console.log('Error al tomar la foto: ', response.errorCode);
        } else {
          const uri = response.assets ? (response.assets[0].uri as string) : '';
          changeProfilePhoto(uri);
        }
      };
      loadImage();
    });

    closeMenu();
  };

  let optionsCamera: CameraOptions = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const handleTakePhotoFromCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(optionsCamera);
      const uri = result.assets ? (result.assets[0].uri as string) : '';
      setSelectImage(uri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={openMenu} onLayout={onLayout} ref={imageRef}>
        <NbAvatar url={selectImage} size={100} />
      </TouchableOpacity>

      <Menu visible={visible} onDismiss={closeMenu} anchor={menuAnchor}>
        <Menu.Item onPress={handleTakePhotoFromCamera} title="Tomar foto" />
        <Menu.Item
          onPress={handleTakePhotoFromGallery}
          title="Seleccionar foto"
        />
      </Menu>
    </View>
  );
};

export default NbProfilePhoto;
