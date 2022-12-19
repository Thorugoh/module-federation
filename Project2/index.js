/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import App from './App';
import {name as appName, localChunks} from './app.json';

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'http://10.0.2.2:8082/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  console.log({url});
  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false,
    query: {
      platform: Platform.OS,
    },
  };

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
});

AppRegistry.registerComponent(appName, () => App);
