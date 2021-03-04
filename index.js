const fs = require('fs')
const prompts = require('prompts')
const chalk = require('chalk')
const net = require('net')
const express = require('express')

let app = express()

let init = async() => {
    console.log(chalk.blue.bold('Welcome to the file server'))
    console.log(chalk.dim('there are currently ' + fs.readdirSync('./Files').length + ' files in the server'))
    let option = await prompts({
        type: 'number',
        name: 'option',
        message: chalk.yellow('1. Add a file \n  2. Download a file \n  3. List all the files'),
        min: 1,
        max: 3
    })
    if (option.option == 1) {
        console.clear()
        console.log(chalk.bold.blue('Add a file'))
        let file = await prompts({
            type: 'text',
            name: 'dir',
            message: 'enter your directory'
        })
        let server = net.createServer((connection) => {
            connection.write(fs.readFileSync(file.dir, 'utf8'))
            connection.pipe(connection)
        })
        app.get('/', (req, res) => {
            res.send('Server alive')
        })
        server.listen({
            port: 8080,
            host: ''
        })
    }
}

init()