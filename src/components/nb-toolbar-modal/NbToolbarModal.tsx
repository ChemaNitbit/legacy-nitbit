import * as React from 'react';

// Components Paper
import { Appbar, Button } from 'react-native-paper';


import { getHeaderTitle } from '@react-navigation/elements';

const NbToolbarModal = ({ navigation: { goBack }, options, route }: any) => {

    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header>
            <Appbar.Action icon="close" onPress={() => { console.log("close"); goBack() }} />
            <Appbar.Content title={title} />
            {/* <Button mode='elevated' buttonColor='#5AB0D6' textColor='#fff' onPress={() => console.log("publicando...")}>Publicar</Button> */}
        </Appbar.Header>
    )
}

export default NbToolbarModal;