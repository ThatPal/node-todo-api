const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 3
};

let token = jwt.sign(data, 'some shit');
console.log(token);
let decoded = jwt.verify(token, 'some shit');
console.log(decoded);
// let message = 'user 1234';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 3
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some shit').toString()
// }

// token.data.id = 4;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'some shit').toString();

// if (resultHash === token.hash) {
//     console.log('Valid token');
// } else {
//     console.log('Invalid token');
// }