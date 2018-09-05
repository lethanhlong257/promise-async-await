const axios = require('axios');
const add = require('./add');


function minus(a, b) {
    setTimeout(() => {
        return a-b;
    }, 100);
}

function multiple(a, b) {
    setTimeout(() => {
        return a*b;
    }, 100);
}

function divide(a, b) {
    setTimeout(() => {
        return a/b;
    }, 100);
}



const a = 3,
    b = 4,
    c = 5;


// (a+b)*c    
add(a,b)
const result = multiple(add(a+b), c);

const addPromise = new Promise(
   
)

console.log(result);