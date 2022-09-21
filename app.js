import express from 'express'

const port = 3000

const app = express();

var state = 0;

app.get("/isalive", (req, res) => {
    state++;
    res.send(`Alive and kickin'. You asked me${state} times before"`);
})

app.listen(port)