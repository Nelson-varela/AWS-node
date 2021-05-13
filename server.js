const express = require('express')

const app = express();

app.get('/', (req, res) =>  res.send('<h1>Express con HTML, y seré un programador muy completo!!! ya verán<h1>'))



app.listen(8080);
console.log('server on port 8080')