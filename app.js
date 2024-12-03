const express = require('express');
const userscontroller = require('./users/userscontroller')
const configs = require('./configs/configs.js')
const app = express();

app.use(express.json());

async function startserver() {
    try{
       await initializecontrollers([new userscontroller()])
app.listen(configs.server.port)
    } catch(error){
console.log(error)
    }
}

async function initializecontrollers(controllers) {
    for (const controller of controllers) {
      app.use('/', controller.router);
    }
  }

  startserver();
  

