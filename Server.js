const fs = require('fs')

class FileServer {
    constructor (dir) {
        this.dir = dir;
    }
    Upload (fileName) {
        fs.readFile('my-file.txt', 'utf8', function(err, data) {
            fs.appendFileSync(`./Files/${fileName}`, data);
        });
    }
}

let newserver = new FileServer('')
newserver.Upload('message.txt')