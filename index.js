
import { NativeModules,Platform } from 'react-native';

const { RNIosSettingsBundle } = NativeModules;

export default {
    get: (key,callback) =>
    {
        if(Platform.OS == 'android') {
            return;
        }

        RNIosSettingsBundle.getValByKey(key,callback);
    }
};
