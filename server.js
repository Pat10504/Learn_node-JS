const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('hhhhhalo..');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Firse write files!!!', (err) => {
    if(err) throw err;
    console.log('Write Files Complete');
});

fs.appendFile(path.join(__dirname, 'files', 'text.txt'), 'testing text', (err) => {
    if(err) throw err;
    console.log('Append Conplete');
});

process.on('uncaughtException', err => {
    console.error(`there was uncaught err ${err}`);
    process.exit(1);
});