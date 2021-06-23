const { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 110.78 JPY",function () {
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5);

    // if 1 dollar is 110.78 JPY, then 3.5 dollars should be (3.5 * 110.78)
    const expected = 3.5 * 110.78;
    
    // this is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(387.73); // 1 dollar is 110.78 JPY, then 3.5 dollars should be = (3.5 * 110.78)
});

test("One yen should be 0.006 Pounds", function() {

    const { fromYenToPound } = require('./app.js');


    const pound = fromYenToPound(3.5);


    const expected = 3.5 * 0.006;


    expect(fromYenToPound(3.5)).toBe(0.021);
})