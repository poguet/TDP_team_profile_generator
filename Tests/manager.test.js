const Manager = require('../lib/Manager')

describe('Manager class test', () => {
    describe('init', ()=> {
        it('test constructor properties', ()=>{
            let manObj = new Manager("taylor", "pogue12@ymail.com", 1, 100);

            expect(manObj.name).toEqual('taylor')
            expect(manObj.email).toEqual('pogue12@ymail.com');
            expect(manObj.id).toEqual(1);
            expect(manObj.role).toEqual("Manager");
            expect(manObj.officenumber).toEqual(100);

        })
    })

    describe('test get office number function', ()=> {
        let manObj = new Manager("max", "max12@ymail.com", 2, 101);

        expect(manObj.getOfficeNumber()).toEqual(101)

    })
})