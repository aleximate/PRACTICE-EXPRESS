/*const http=require('http');
const fs=require('fs')

const server=http.createServer((req,res)=>{

    const read=fs.createReadStream('./static/index.html');

    read.pipe(res)
})

server.listen(3000)
console.log(`Server on port ${3000}`)*/

const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('About me')
})

app.get('/weather',(req,res)=>{
    res.send('chtmre')
})

app.use((req,res)=>{
    res.send("route does'nt exits")
})
app.listen(3000)

console.log(`Server on port ${3000}`)