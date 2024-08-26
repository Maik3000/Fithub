import express from "express";

const app = express()

app.get('/api', (req, res) => {
    res.send('funcionando');
});

const port= process.env.port || 5000
app.listen(port, () => {
    console.log(`escuchando en puerto${port}`);
});