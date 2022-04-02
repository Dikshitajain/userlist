const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const app = express();

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://dikshita:igK2arFJPhTFhQBx@user.ffowx.mongodb.net/user?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected");
  })
  .catch(()=>{
    console.log("Error");
  });
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next();
})

app.post("/api/users", (req,res,next)=>{
    const users = new User({
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        region: req.body.region
    })
    users.save()
    // console.log(users);
    res.status(200).json({
        message: 'Users added successfully',
    })
})

app.get('/api/users', (req,res,next)=>{
    const users = User.find().then(documents =>{
        console.log(documents)
        res.status(200).json({
            message: 'Users fetched successfully',
            users: documents
        })
    })
    //fetchedPost = documents;
    // res.send(users)
    
})

module.exports = app