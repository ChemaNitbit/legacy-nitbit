import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import './src/shared/infrastructure/firebase-config';
import {lightThemeColors} from './src/shared/infrastructure/paper-theme-config/light-theme-colors';

const theme = {
  ...DefaultTheme,
  ...lightThemeColors,
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
