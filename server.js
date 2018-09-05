const express = require('express');

const app = express();

app.listen(3000, ()=>{console.log('server start')});

app.get('/api/plus/:a/:b', (req, res)=>{
    const a = req.param.a;
    const b = req.param.b;
    return res.json({result: a+b});
});

app.get('/api/minus/:a/:b', (req, res)=>{
    const a = req.param.a;
    const b = req.param.b;
    return res.json({result: a+b});
});

app.get('/api/multiple/:a/:b', (req, res)=>{
    const a = req.param.a;
    const b = req.param.b;
    return res.json({result: a+b});
});

app.get('/api/divide/:a/:b', (req, res)=>{
    const a = req.param.a;
    const b = req.param.b;
    return res.json({result: a+b});
});