const express = require('express');

const app = express();

app.listen(3000, ()=>{console.log('server start')});

const data = {
    data: 1
}

app.get('/api', (req, res)=>{
    return res.json(data);
});
