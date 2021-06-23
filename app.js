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

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
};

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInYen = valueInDollar * 110.78;
    //return the dollar value
    return valueInYen;
};

const fromYenToPound = function(valueInYen) {

    let valueInPound = valueInYen * 0.006;

    return valueInPound;
};
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound};
