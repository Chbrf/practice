const express = require('express');
const userscontroller = require('./users/userscontroller')
const app = express();

app.use(express.json());

async function startserver() {
    try{
        initializecontrollers([new userscontroller()])
app.listen(1233)
    } catch(error){
console.log(error)
    }
    
}
async function initializecontrollers(controllers) {
    for (const controller of controllers) {
      app.use("/", controller.router);
    }
  }
  startserver();
  

