const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../../helpers/autenticacao');
const postTransfers = require('../../fixtures/postTransfers.json');
const postUsersLogin = require('../../fixtures/postUsersLogin.json')


describe('Transfers',()=>{

    let token

        beforeEach(async()=>{
            //Capturar o token antes de cada it  
            token = await obterToken('julio','123456'); // Estranho: julio logado, consegue obter 201 ao tranferir valores de priscila para sua conta.
           // token = await obterToken(postUsersLogin);
        })

    describe('/post transfers', ()=>{
       
        
        it('Deve retornar 201 quando a transferência for realizada', async ()=>{
        
         const boryPostTransfers = {...postTransfers}
         const Response = await request(process.env.BASE_URL)
         .post('/transfers')
         .set('content-type','application/json')
         .set('Authorization', `Bearer ${token}`) 
         .send(boryPostTransfers)
          
         
         console.log(Response.body);
         expect(Response.status).to.equal(201);
           
        }) 
        
    })
    
  
})
