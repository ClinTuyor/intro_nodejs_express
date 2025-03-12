const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

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