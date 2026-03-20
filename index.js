const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    console.log(req.host, req.url, req.method);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server Running On Port: ${PORT}`);
});