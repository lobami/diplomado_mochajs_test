const chai = require('chai');
const expect = chai.expect;

const work = require('../src/work')

describe('Pares', () => {
    describe('Pares', () =>{
        it('verificar si un numero es par', () =>{
            expect(work.pares(2)).to.equal(0);
            expect(work.pares(3)).to.equal(1);
            expect(work.pares(12)).to.equal(0);
            expect(work.pares(30)).to.equal(0);
        });
    });
   
})

