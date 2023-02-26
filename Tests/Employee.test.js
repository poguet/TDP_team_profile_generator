const Employee = require('../lib/Employee')

describe('Employee class test', () => {
    describe('init', ()=> {
        it('test constructor properties', ()=>{
            let empObj = new Employee("taylor", "pogue12@ymail.com", 1);

            expect(empObj.name).toEqual('taylor')
            expect(empObj.email).toEqual('pogue12@ymail.com');
            expect(empObj.id).toEqual(1);
            expect(empObj.role).toEqual("Employee");

        })
    })

    describe('test get name function', ()=> {
        let empObj = new Employee("max", "max12@ymail.com", 2);

        expect(empObj.getName()).toEqual("max")

    })
})