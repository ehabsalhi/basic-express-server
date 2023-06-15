'use strict'

const supertest = require("supertest")
const {app} = require('../server')
const req = supertest(app)


describe('testing the server' , () =>{
     it('bad route' , async () =>{
          const res = await req.get('/pageNotFound')
          expect(res.status).toBe(404)
     })

     it('bad method' , async () =>{
          const res = await req.post('/')
          // expect(res.req.method).toBe('GET')
          expect(res.status).toBe(404)
     })

     it('server error' , async () =>{
          const res =await req.get('/person?name=ehab')
          expect(res.status).toBe(200)
     })
     it('server error' , async () =>{
          const res = await req.get('/person?name=ehab')
          // console.log('/////////////////////////');
          // console.log(Object.keys(res.body)[0]);
          // console.log('/////////////////////////');
          
          expect(res.body).toEqual({name : 'ehab'})
     })
     it('server error' , async () =>{
          const res =await req.get('/person')
          expect(res.status).toBe(500)
     })
})
