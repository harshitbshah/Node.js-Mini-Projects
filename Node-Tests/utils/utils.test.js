const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
        var res = utils.add(33,11);

        expect(res).toBe(44).toBeA('number');
        // if(res != 44)
        //     throw new Error(`Expect 44 but got ${res}`);
        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncadd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);
        
        expect(res).toBe(9).toBeA('number');
        // if(res != 9)
        //     throw new Error(`Expected 9 but got ${res}`);
    });

    it('should async square a number', (done) => {
        utils.asyncsquare(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        });
    });

});

it('should verify first name and last name are set.', () => {
    var user = utils.setName({
        age : 27,
        location : 'Gainesville'
    }, 'Harshit Shah');

    expect(user).toBeA('object').toInclude({
        firstName : 'Harshit',
        lastName : 'Shah'
    });
});

// it('should expect some values', () => {
//     expect(12).toNotBe(11);
//     expect({name: 'Harshit'}).toEqual({name: 'Harshit'});
// });