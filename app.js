// console.log("Hello World");

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollars) => {
    return (dollars / 1.2) * 127.9;
}

const fromEuroToDollar = (euro) => {
    return euro * 1.2;
}

const fromYenToPound = (yen) => {
    return (yen / 127.9) * 0.8;
}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));




// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
