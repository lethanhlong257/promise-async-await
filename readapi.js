const axios = require('axios');

const url = 'http://localhost:3000/api';

axios.get(url, (err, respose, body) => {
    console.log(body);
})

const array = [];

axios.get(url)
    .then( result =>  console.log(result.data))
    .catch(err => console.log(err));

async function readData(url) {
    //const data = await axios.get(url);
    for (let index = 0; index < 10; index++) {
        const apiResult = await axios.get(url);
        array.push({data: apiResult.data.data+index});
    }
    console.log(array);
}

readData(url);

