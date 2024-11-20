const { BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      contextIsolation: true, 
      enableRemoteModule: false
    },
    icon: path.join(__dirname, '../renderer/assets/icon.ico')
  });
  win.loadFile(path.join(__dirname, '../renderer/index.html'));
  // Open Developer Tools 
  win.webContents.openDevTools();
}

function createAboutWindow() {
  let aboutWin = new BrowserWindow({
    width: 400,
    height: 300,
    title: 'About',
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    },
    icon: path.join(__dirname, '../renderer/assets/icon.ico')
  });
  aboutWin.loadFile(path.join(__dirname, '../renderer/about.html'));
  // Remove all menus
  aboutWin.setMenu(null);
}

// Export the functions
module.exports = { createMainWindow, createAboutWindow };

