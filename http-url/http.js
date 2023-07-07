const http = require('http')
const fs = require('fs')
const url = require('url')

const PORTA = 2500

//Core Module - HTTP


//01

// const server = http.createServer((req,res) =>{
//     res.writeHead(200, {'Content-Type':'text/plan; charset=UTF-8'})
//     res.write('Olá, Mundo')
//     res.end()
// })

//02

// const server = http.createServer((req, res) => {
//     if(req.url === '/home'){
//         res.writeHead(200, {'Content-Type':'text/plan; charset=UTF-8'})
//         res.write('Bem-vindo à pagína inicial!')
//         res.end()
//     }
//     else if(req.url === '/about'){
//         res.writeHead(200, {'Content-Type':'text/plan; charset=UTF-8'})
//         res.write('Sobre nós: somos uma empresa dedicada a...')
//         res.end()
//     }
// })

//03

// fs.readFile('api.json', 'utf-8', (err, data) => {

// })


// server.listen(PORTA, ()=>{
//     console.log(`Server On ${PORTA} 🟢`)
// })






