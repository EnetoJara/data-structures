const fs = require('fs');

function randomNumbers (n) {
    const arr = new Array(n);
    const {length} =arr;
    for (let i = 0; i<length; ++i) {
        arr[i] = Math.floor((Math.random() * n) % n);
    }
    return arr;
};

const n100 = randomNumbers(100);
const n1000 = randomNumbers(1000);
const n10000 = randomNumbers(10000);
const n100000 = randomNumbers(100000);
const n1000000 = randomNumbers(1000000);
const n10000000 = randomNumbers(10000000);

fs.writeFile("./n100",      n100, (err) => console.log(err))
fs.writeFile("./n1000",     n1000, (err) => console.log(err))
fs.writeFile("./n10000",    n10000, (err) => console.log(err))
fs.writeFile("./n100000",   n100000, (err) => console.log(err))
fs.writeFile("./n1000000",  n1000000, (err) => console.log(err))
fs.writeFile("./n10000000", n10000000, (err) => console.log(err))
