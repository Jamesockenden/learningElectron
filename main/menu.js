const { Menu } = require('electron');
const { createAboutWindow } = require('./windows');

function createSetupMenu() {
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        { role: 'quit' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: () => createAboutWindow()
        },
        { type: 'separator' },
        { label: 'Nout' }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}

module.exports = { createSetupMenu };

