const chai = require('chai');
const expect = chai.expect;
const date = new Date();

const work = require('../src/work')

describe('retornar la hora', () => {
    describe('retornar la hora', () =>{
        it('retornar la hora', () =>{
            expect(work.return_hour).to.equal(date.getHours());
        });
    });
   
})

