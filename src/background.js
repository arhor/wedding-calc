import { app, protocol, BrowserWindow } from 'electron';
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib';

const isDevelopment = process.env.NODE_ENV !== 'production';

let win;

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: { secure: true, standard: true },
  },
]);

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
    show: false,
  });

  let splashscreen = new BrowserWindow({
    width: 350,
    height: 338,
    center: true,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    parent: win,
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) {
      win.webContents.openDevTools();
    }
  } else {
    createProtocol('app');
    splashscreen.loadURL('app://./logo.svg');
    win.loadURL('app://./index.html');
  }

  win.once('ready-to-show', () => {
    let opacity = 1;
    const fading = setInterval(() => {
      opacity -= 0.01;
      if (opacity >= 0) {
        splashscreen.setOpacity(opacity);
      } else {
        splashscreen.destroy();
        splashscreen = null;
        win.show();
        clearInterval(fading);
      }
    }, 20);
  });

  win.on('closed', () => {
    win = null;
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installVueDevtools();
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString());
    }
  }
  createWindow();
});

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}
