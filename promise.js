const axios = require('axios');

const addFunc = require('./add');
const minusFunc = require('./minus');
const multipleFunc = require('./multiple');
const divideFunc = require('./divide');

const a = 3, b = 4, c = 5;


function add(a,b) {
    return new Promise((resolve, reject)=>{
        if (typeof a !== 'number') return reject(new Error('wrong data type'));
        if (typeof b !== 'number') return reject(new Error('wrong data type'));
        setTimeout(() => resolve(a + b), 100);
    })
}

function minus(a,b) {
    return new Promise((resolve, reject)=>{
        if (typeof a !== 'number') return reject(new Error('wrong data type'));
        if (typeof b !== 'number') return reject(new Error('wrong data type'));
        setTimeout(() => resolve(a - b), 100);
    })
}

function multiple(a,b) {
    return new Promise((resolve, reject)=>{
        if (typeof a !== 'number') return reject(new Error('wrong data type'));
        if (typeof b !== 'number') return reject(new Error('wrong data type'));
        setTimeout(() => resolve(a * b), 100);
    })
}

function divide(a,b) {
    return new Promise((resolve, reject)=>{
        if (typeof a !== 'number') return reject(new Error('wrong data type'));
        if (typeof b !== 'number') return reject(new Error('wrong data type'));
        setTimeout(() => resolve(a / b), 100);
    })
}

add(a, b)
.then(resultAdd => multiple(resultAdd, c))
.then(resultMul => minus(resultMul, c))
.then(res => console.log(res))
.catch(err => console.log(err));

// using callback

addFunc(a,b, function(resultAdd){
    multipleFunc(resultAdd, c, function (resultMul) {
        minusFunc(resultMul, c, function name(resultMinus) {
            console.log(resultMinus);
        })
    })
})

async function awaitFunc(a, b, c) {
    const resultAdd = await add(a,b);
    const resultMul = await multiple(resultAdd,c);
    const resultMinus = await minus(resultMul,c);
    console.log(resultMinus);
}

awaitFunc(a,b,c);

// function calculate(a,b,c) {
//     if (typeof a !== 'number') return new Error('wrong data type');
//     if (typeof b !== 'number') return new Error('wrong data type');
//     if (typeof c !== 'number') return new Error('wrong data type');
//     setTimeout(() => {
        
//     }, 100);
// }

// without using promise
// const async_promise = add(a,b);
// console.log(async_promise);
