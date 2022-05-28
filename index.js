const express = require('express');
const pino = require("pino")("./info.log");
const expressPino = require("express-pino-logger")({
    logger: pino
});
const app = express();
const port = 3000;

try {
    app.use(expressPino);

    app.get('/', (req, res) => {
      res.send('Hello World!');
    })
    
    app.get('/test-error', (req, res) => {
        throw new Error('Error triggered');
    })
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    })
} catch (errpr) {
    console.log(error);
}

