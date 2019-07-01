var faker = require('faker');


console.log("========================");
console.log('Welcome to my shop');
console.log("========================");

for (var i=0; i<10;i++){
var RandomName = faker.commerce.productName();
var RandomPrice = faker.commerce.price();
console.log(RandomName + '--' + RandomPrice);
};

