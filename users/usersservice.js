const express = require('express')
const userscontroller = require('./userscontroller.js')


class usersservice {
     users =[{
        username:"charbel",
    password :"12"
    
    }]
    async login(user){
       const  {username, password} = user
       const found =this.users.find(user => user.username === username && user.password === password)
       if(found){
        return ('login successful ')
       }
       else {
        return ('login failed ')
       }
}
async signup(user){
    const  {username, password} = user
    const found = this.users.find(user => user.username === username )
    if (!found){
        this.users.push({username: username, password: password})
        return{message:'success' ,
            users: this.users}
        
        
    }
    else {
        return('already in use')
    }

};
}

module.exports = new usersservice();