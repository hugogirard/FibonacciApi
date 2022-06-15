const express = require('express');
const app = express();

app.get('/', (req,res) => {

    let seq = req.query.seq || 0;
    
    let i;
    let fib = [0,1];

    for (i = 2; i <= seq; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    res.send(fib);
});

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});