//node

const crypto = require("crypto");
// const cryptoList = Object.keys(crypto);
// console.log(cryptoList);

let randomID = "";
for (let i = 0; i < 16; i++) {
  randomID += crypto.randomInt(0, 9);
}

console.log("Random ID:", randomID);
