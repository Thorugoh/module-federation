/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {ScriptManager, Script} from '@callstack/repack/client';
import App from './src/App';
import {name as appName, localChunks} from './app.json';

// ScriptManager.shared.addResolver(async (scriptId, caller) => {
//   if (__DEV__) {
//     return {
//       url: Script.getRemoteURL(`http://10.0.2.2:3000/${scriptId}`),
//       cache: false,
//     };
//   }
//   if (localChunks.includes(scriptId)) {
//     return {
//       url: Script.getFileSystemURL(scriptId),
//     };
//   }
//   return {
//     url: Script.getRemoteURL(`http://10.0.2.2:3000/${scriptId}`),
//     cache: false,
//   };
// });

AppRegistry.registerComponent(appName, () => App);
