const express = require('express')
  const usersservice =require('./usersservice')
  const { validate } = require("express-validation")
  const usersvalidation = require('./usersvalidation')

class userscontroller {
    constructor(){
        this.path='/users',
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
    };
    async signup(req, res) {
        try {
            const result = await usersservice.signup(req.body)
            res.send(result)
        } catch(err){
            console.log(err)
            res.send('failed')
        }

    }
          initializeRoutes(){
        this.router.post(`${this.path}/login`,validate(usersvalidation.login),this.login.bind(this));
     this.router.post(`${this.path}/signup`, this.signup.bind(this));}
   
       
        
    
    }
  
module.exports = userscontroller;