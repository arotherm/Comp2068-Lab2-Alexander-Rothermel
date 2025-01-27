import express from 'express';

const middleWare =express();
let port = 3000;

const Niki = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Niki is my partner who is a little crazy but has a super good heart. Shes awesome.');
};

const Kitty = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>I loves pussycats.</h1> <p>At my home we rescue them and have over 5 of them with us. Its a little community. They rock!</p>');
};

const Lakeside = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Lakeside Web Design</h1> <p>Excuse the lack of CSS. Lakeside web design is my little company. we make websites for local businesses..</p>');
};

const index = (req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to the router</h1> <p>Go to the URL and affix a / at the end with the following options <ul><li>/Niki</li><li>/Kitty</li><li>/Lakes</li></ul></p>');
    }
};



middleWare.use('/niki', Niki);
middleWare.use('/kitty', Kitty);
middleWare.use('/lakeside', Lakeside);
middleWare.use('/', index);

middleWare.listen(port, () => {
    console.log(`Server now running at localhost:${port}`);
});
