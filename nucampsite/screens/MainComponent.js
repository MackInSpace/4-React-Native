import { useState } from 'react';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsites, setSelectedCampsites] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen 
                campsites={campsites} 
                onPress={(campsiteId) => setSelectedCampsites(campsiteId)}
            />;
            <CampsiteInfoScreen 
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsites
                    )[0]
                }
            />
        </View>
    );
};

export default Main;