const chai = require('chai');
const expect = chai.expect;

const work = require('../src/work')

describe('Pares array', () => {
    describe('Pares array', () =>{
        it('verificar si todos los numeros son par', () =>{
            expect(work.all_pares([2, 4])).to.equal(false);
            expect(work.all_pares([3, 2])).to.equal(false);
            expect(work.all_pares([12, 4])).to.equal(false);
            expect(work.all_pares([30, 10])).to.equal(false);
        });
    });
   
})

