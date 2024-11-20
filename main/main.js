const { app, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');
const winston = require('winston'); 
const { createMainWindow } = require('./windows');
const { createSetupMenu } = require('./menu');


const logger = winston.createLogger({ 
  level: 'info', 
  format: winston.format.json(), 
  transports: [ new winston.transports.File({ filename: 'app.log' }) ] 
});


app.whenReady().then(() => {

  // Listeners
  fs.readFile(path.join(__dirname, '../config.json'), 'utf-8', (err, data) => {
    if (err) { 
      logger.error(`Failed to read config file: ${err}`); 
      return; 
    }

    const config = JSON.parse(data);
    logger.info('Config file read successfully');
    ipcMain.handle('get-config', () => config);
  });

  ipcMain.on('log-message', (event, message) => { 
    logger.info(message); 
  });

  // Main Window
  createMainWindow();
  createSetupMenu();
  logger.info('Testing the logger');

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

