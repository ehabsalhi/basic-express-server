'use strict'

const supertest = require("supertest")
const {app} = require('../server')
const req = supertest(app)
console.log(req);


describe('testing the server' , () =>{
     it('bad route' , async () =>{
          const res = await req.get('/pageNotFound')
          expect(res.status).toBe(404)
     })

     it('bad method' , async () =>{
          const res = await req.get('/pageNotFound')
          console.log(res);
          expect(res.req.method).toBe('GET')
     })

     it('server error' , async () =>{
          const res =await req.get('/person?name=ehab')
          console.log(res.body);
          expect(res.status).toBe(200)
     })
     it('server error' , async () =>{
          const res = await req.get('/person?name=ehab')
          expect(typeof res.body).toBe('object')
     })
     it('server error' , async () =>{
          const res =await req.get('/person')
          expect(res.status).toBe(500)
     })
})
