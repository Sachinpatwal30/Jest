

//For Primitive  type testing  use toBe
//For Reference type testing use toEqual , eg with arrays, objects, etc



describe("Testing Reference type Equality ", () => {

    const user = {
        name: "sachin"
    }
    user['age'] = 23;


    test('should return user with age 23', () => {
        expect(user).toEqual({
            name: "sachin",
            age: 23
        })
    })



    test("Should return user with any name and age key", () => {

        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        )
    })


    test("Testing array equality", () => {

        const users = [
            "sachin",
            "raj",
            "aman"
        ]

        users.push("sumit");
        expect(users).toEqual(["sachin", "raj", "aman", "sumit"])
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]))

    })


    test('Testing Araay of Objects', () => {

        const users = [
            { name: "sachin", age: 22 },
            { name: "rahul", age: 12 },
            { name: "amit", age: 27 }
        ]

        users.push({ name: "sumit", age: 29 });

        expect(users).toEqual(expect.arrayContaining([
            { name: "sachin", age: 22 }
        ]));

        expect(users).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)

                })
            ])
        )

    })



})