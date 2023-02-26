const Engineer = require('../lib/Engineer')

describe('Engineer class test', () => {
    describe('init', ()=> {
        it('test constructor properties', ()=>{
            let engObj = new Engineer("taylor", "pogue12@ymail.com", 1, "poguet");

            expect(engObj.name).toEqual('taylor')
            expect(engObj.email).toEqual('pogue12@ymail.com');
            expect(engObj.id).toEqual(1);
            expect(engObj.role).toEqual("Engineer");
            expect(engObj.github).toEqual("poguet");

        })
    })

    describe('test get github function', ()=> {
        let engObj = new Engineer("max", "max12@ymail.com", 2, "max123");

        expect(engObj.getGithub()).toEqual("max123")

    })
})