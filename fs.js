const fsPromises = require('fs').promises;
const path = require('path');

const fileOp = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'text.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseswrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseswrite.txt'), '\n\nnice to meet you!');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseswrite.txt'), path.join(__dirname, 'files', 'promisescomplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisescomplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}
console.log('Pat');
fileOp();