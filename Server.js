const net = require('net')
const fs = require('fs')

let indices = []

let client = net.createConnection({port: 8080, host: 'File-Uploader.neevcuber.repl.co'}, () => {
    console.log('alive!')
})

client.on('data', (data) => {
    let val = data.toString()
    for(let i=0; i<2;i++) {
        if (val[i] === "!") indices.push(i);
    }
    for (let i=0; i<indices[1];i++) {
        console.log(val[i])
    }
})