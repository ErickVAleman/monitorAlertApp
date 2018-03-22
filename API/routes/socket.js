const express = require("express");
const router = express.Router();
const socketIO = require("socket.io");
const chalk = require("chalk");
const { checkClavProd, NoUtility, NoUtility63 } =  require('./lib/index')

/**
 * webSocket
*/

const initialize = server => {
  io = socketIO.listen(server);
  io.on("connect", socket => {  
    console.log(`Connected ${socket.id}`);

    setInterval(()=>{
      NoUtility().then(data => {
        socket.emit("message", data);
      });
    },300000)

    socket.on("disconnect", () => {
      console.log(`Disconnect ${socket.id}`);
    });

  });
};

module.exports = { initialize };
