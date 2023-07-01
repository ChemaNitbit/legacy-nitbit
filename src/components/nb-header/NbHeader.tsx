import * as React from 'react';

import { Flex, Box } from "@react-native-material/core";
import { Image, Text } from 'react-native';
import NbProfilePhoto from '../nb-profile-photo/NbProfilePhoto';


const NbHeader = () => {
    return (
        <Flex direction='row' grow={1} shrink={1}>
            <Box h={'100%'} style={{ flex: 1 }} >
                <Flex items='center' style={{ marginTop: 25 }}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={require('../../../assets/icons/maps.png')} style={{ width: 45, height: 45 }} />
                    </Box>
                    <Box>
                        <Text style={{ fontSize: 14, fontFamily: 'Roboto', lineHeight: 20, textAlign: 'left' }}>Mapas</Text>
                    </Box>
                </Flex>
            </Box>
            <Box h={'100%'} style={{ flex: 2 }}>
                <Flex fill justify='center' items='center'>
                    <Box style={{ flex: 8, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        {/* <Image source={require('../../../assets/logo/profile.jpg')} style={styles.roundedImage} /> */}
                        <NbProfilePhoto />
                    </Box>
                    <Box style={{ flex: 2 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto', lineHeight: 20, textAlign: 'left' }}>Damian Zamora</Text>
                    </Box>
                </Flex>
            </Box>
            <Box h={'100%'} style={{ flex: 1 }}>
                <Flex items='center' style={{ marginTop: 25 }}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={require('../../../assets/icons/globe.png')} style={{ width: 45, height: 45 }} />
                    </Box>
                    <Box>
                        <Text style={{ fontSize: 14, fontFamily: 'Roboto', lineHeight: 20, textAlign: 'left' }}>Geocercas</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default NbHeader;
