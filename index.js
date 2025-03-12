const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.post('/submit', (req, res) => {
    const name = req.body;
    console.log(name);
    res.send(`Received data: ${JSON.stringify(name)}`);
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});