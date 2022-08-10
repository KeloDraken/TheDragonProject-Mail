/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';

/**
 * Build the application to web
 */
function runningWeb() {
  if (module.hot) module.hot.accept();

  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
}

function main() {
  if (Platform.OS === 'web') {
    runningWeb();
    return;
  }
  AppRegistry.registerComponent(appName, () => App);
}

main();
