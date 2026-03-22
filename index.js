const express = require('express');
const app = express();
const { format } = require('date-fns');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/index', '/index.html'], (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    console.log(req.host, req.url, req.method);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get(['/new-page', '/new-page.html'], (req, res) => {
    console.log(req.host, req.url, req.method);
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

app.get(['/old-page', '/old-page.html'], (req, res) => {
    console.log(req.host, req.url, req.method);
    res.redirect(301, '/new-page.html');
})

// route handler
const one = (req, res, next) => {
    console.log('one');
    next();
}
const two = (req, res, next) => {
    console.log('two');
    next();
}
const three = (req, res, next) => {
    console.log('three');
    next();
}
app.get(['/test', '/test.html'], [one, two, three] , (req, res) => {
    console.log(req.host, req.url, req.method);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('*spalt', (req, res) =>{
    console.log(req.host, req.url, req.method);
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server Running On Port: ${PORT} : ${format(new Date(), 'dd-MM-yyyy - HH:mm:ss')}`);
});