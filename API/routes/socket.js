const express = require("express");
const router = express.Router();
const socketIO = require("socket.io");
const { runZR, runBO, runJL, runOL, runVC  } = require("./lib/index");

/**
 * webSocket
 */

const initialize = server => {
  io = socketIO.listen(server);
  io.on("connect", socket => {
    console.log(`Connected ${socket.id}`);
    setInterval(() => {
      runZR().then(data => {
        console.log("ZARAGOZA")
        socket.emit("message", {zaragoza: data});
      });
      runBO().then(data => {
        console.log("BODEGA")
        socket.emit("message", {bodega: data});
      });
      runJL().then(data => {
        console.log("JALTIPAN")
        socket.emit("message", {jaltipan: data});
      });
      runOL().then(data => {
        console.log("OLUTA")
        socket.emit("message", {oluta: data});
      });
      runVC().then(data => {
        console.log("VICTORIA")
        socket.emit("message", {victoria: data});
      });
      
    }, 150000);
    socket.on("disconnect", () => {
      console.log(`Disconnect ${socket.id}`);
    });
  });
};

module.exports = { initialize };
