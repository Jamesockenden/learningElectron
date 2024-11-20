const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'api', {
    getConfig: () => ipcRenderer.invoke('get-config'),
    sendLog: (message) => ipcRenderer.send('log-message', message)
  }
);
