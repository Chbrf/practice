const express = require('express')
  const usersservice =require('./usersservice')

class userscontroller {
    constructor(){
        this.path="/users",
        this.router=express.Router(),
        this.initializeRoutes()
    }
    async login(req,res){
        try{
           const result = await usersservice.login(req.body)
            res.send(result)
        }
        catch(err){
            console.log(err)
            res.send('failed')
        }
    }
          initializeRoutes(){
        this.router.post(
          `${this.path}/login`,
          this.login.bind(this));
    }
    }
  
module.exports = userscontroller