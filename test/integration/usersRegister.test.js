const request  = require('supertest');
const {expect} = require('chai')
require('dotenv').config();
const postUsersRegister = require('../../fixtures/postUsersRegister.json');
//const { faker } = await import('@faker-js/faker'); 

describe(' users register',()=>{
    describe('POST /users/register',()=>{
        it('Deve retornar 201 quando registrar um novo usuário',async ()=>{
            
            const bodyPostUsersRegister = structuredClone(postUsersRegister);            
           // bodyPostUsersRegister.username = faker.person.firstName();
            const response = await request('http://localhost:3000')
            .post('/users/register')
            .set('content-type','application/json')
            .send(bodyPostUsersRegister)

            console.log(response.body);
            console.log(response.status);
            expect (response.status).to.equal(201)
        })
    })
})
