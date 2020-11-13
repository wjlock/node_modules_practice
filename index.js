const is_number = require('is-number');
const num2fraction = require('num2fraction');
const { favoriteFoods } = require('./modules')
const chalk = require('chalk');


function listFoods(array) {
    array.forEach(element => {
        console.log(element)
    });
}
console.log(favoriteFoods)
console.log(listFoods(favoriteFoods))
console.log(is_number(500))
console.log(is_number("h"))
console.log(num2fraction(.56))
console.log(chalk.blue('Hey There!'))