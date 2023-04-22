// Jest it the framework to automate test

// describe function is used to group related test cases into a single test suite(collection of test cases) takes to arguments,
// A string that describe test cases and a callback function

//test is a function that is used to define a single test case. The test function takes two arguments: 
// A string that describes the test case, and a callback function that contains the actual test code.

// it is a function alternative of test        

describe("Number operations", () => {
    test("2 divided by 2 is 1", () => {
        expect(2 / 2).toBe(1);
    });

    test("5 plus 6 is not equal to 1", () => {
        expect(5 + 6).not.toBe(1);
    });
});

describe("Other operations", () => {
    test("Testing that variable is undefined", () => {
        let a = undefined;
        expect(a).not.toBeDefined();
        expect(a).toBeUndefined();
        expect(a).not.toBe(5);
        expect(a).toBeFalsy();
        expect(a).not.toBeTruthy();
    });

    //it is alternative of test

    it("Should expect zero to act like zero", () => {
        let number = 0;

        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    });


    test("number comparison", () => {

        const a = 1;
        const b = 2;

        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeLessThanOrEqual(3);

    })


    test("There should be no T in the sachin", () => {
        const name = "sachin";
        expect(name).not.toMatch(/T/);
    })

    test("Shopping list does not contain Ps4", () => {

        const ShoppingList=["MILK","Juice","Fruits","Chocolate"]

        expect(ShoppingList).not.toContain("Ps4");
        expect(ShoppingList).toContain("MILK");


    })




});
