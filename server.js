const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const pageNotFound = require("./error-handler/404") 
const serverError = require("./error-handler/500") 
const logger = require("./middleware/logger")
const validator = require("./middleware/validator")

app.use(cors())
app.use(logger)




app.get('/', (req,res) =>{
     res.status(200).json({
          message : "home route",
          
     })
})

app.get('/person',validator, (req,res) =>{
     res.status(200).json({
          name : req.name
     })
})


// =================== Error-Handler ====================== //

app.use('*',pageNotFound)
app.use(serverError)




function start (){
     app.listen(3000, () =>{
          console.log('welcome 401 lab 2');
     })
}

module.exports = {
     app,
     start
}