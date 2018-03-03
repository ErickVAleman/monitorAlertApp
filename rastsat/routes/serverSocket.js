const express   = require('express');
const router    = express.Router();
const socketIO  = require('socket.io');
const chalk     = require('chalk');
const codewincajadb  = require('../lib/index');
const config         = require('../lib/config');


  async function runZR()
  {
    const { setupQ  } = await codewincajadb(config.zr).catch(handleFatalError)
    const item = await setupQ.findAll().catch(handleFatalError)
    return item
  }
  
  async function runVC()
  {
    const { setupQ  } = await codewincajadb(config.vc).catch(handleFatalError)
    const item = await setupQ.findAll().catch(handleFatalError)
    return item
  }
  
  async function runOL()
  {
    const { setupQ  } = await codewincajadb(config.ol).catch(handleFatalError)
    const item = await setupQ.findAll().catch(handleFatalError)
    return item
  }
  
  async function runJL() 
  {
    const { setupQ  } = await codewincajadb(config.jl).catch(handleFatalError)
    const item = await setupQ.findAll().catch(handleFatalError)
    return item
  }
  
  async function runBO() 
  {
    const { setupQ  } = await codewincajadb(config.bo).catch(handleFatalError)
    const item = await setupQ.findAll().catch(handleFatalError)
    return item
  }

  async function NoUtility() 
  {
    const { setupQ  } =  await codewincajadb(config.zr).catch(handleFatalError)
    const item =  await setupQ.findAllNoUtility(config.zr,2,1).catch(handleFatalError)
    return item 
  }
  
  const checkClavProd = () => {
    const promise = new Promise((resolve, reject)=> {
      //intervalo
      setInterval(()=> {
        runZR().then( data => {
          console.log('ZR');
          console.log(data);
        }).catch((e)=>{
          console.log(`Message: Error del servidor ${e}`)
        })
    
        runVC().then( data => {
          console.log('VC');
          console.log(data);
        }).catch((e)=>{
          console.log(`Message: Error del servidor ${e}`)
        })
    
        runOL().then( data => {
          console.log('OL');
          console.log(data);
        }).catch((e)=>{
          console.log(`Message: Error del servidor ${e}`)
        })
    
        runJL().then( data => {
          console.log('JL');
          console.log(data);
        }).catch((e)=>{
          console.log(`Message: Error del servidor ${e}`)
        })
    
        runBO().then( data => {
          console.log('BO');
          console.log(data);
        }).catch((e)=>{
          console.log(`Message: Error del servidor ${e}`)
        })
      }, 120000)
    })  
    return promise
  }

/**
 * webSocket 
 */
  const initialize = server => {
    io = socketIO.listen(server)
    io.on('connect', socket => {
      
      console.log(`Connected ${socket.id}`)
      
      checkClavProd()

      NoUtility().then( data => {
        socket.emit('message', data)
      });

      socket.on('disconnect', () => {
        console.log(`Disconnect ${socket.id}`)
      });

    });
  }

 const handleFatalError = (err) => 
  {
    console.error(`${chalk.red('[codewincaja-db:Mensaje]')} `, err.message)
    console.error(`${chalk.red('[codewincaja-db:Detalle]')} `, err.stack)
    process.exit(0)
  }

  module.exports = {initialize}