const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

  createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({width: 300, height: 300, show: true})

  // and load the index.html of the app.
  win.loadURL('http://localhost:5000')

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
