
import 'dotenv/config'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero',(req, resp) => {
    const numero = Number(req.params.numero);
    const dobro = numero * 2;

   
    resp.send( {
        dobro: dobro
    });
})
  
server.get('/somar', (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    let x = a + b;
    
    resp.send({
        soma: x
    })
    
})



server.post('/somar', (req, resp) => { 
    const { a ,b } = req.body;
    
    // let a = req.body.a; 
    // let b = req.body.b; 

    let x = a + b;


    resp.send({
        soma: x
    })
    
})



server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));
                
