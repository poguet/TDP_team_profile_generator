const Intern = require('../lib/Intern')

describe('Intern class test', () => {
    describe('init', ()=> {
        it('test constructor properties', ()=>{
            let intObj = new Intern("taylor", "pogue12@ymail.com", 1, "UT");

            expect(intObj.name).toEqual('taylor')
            expect(intObj.email).toEqual('pogue12@ymail.com');
            expect(intObj.id).toEqual(1);
            expect(intObj.role).toEqual("Intern");
            expect(intObj.school).toEqual("UT");

        })
    })

    describe('test get School function', ()=> {
        let intObj = new Intern("max", "max12@ymail.com", 2, "UT");

        expect(intObj.getSchool()).toEqual("UT")

    })
})