'use strict'

module.exports = (req , res , next) => {
     if(req.query.name){
          req.name = req.query.name
          next()
     }

     next({message : 'no name'})
}