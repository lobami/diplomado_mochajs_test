const chai = require('chai');
const expect = chai.expect;

const work = require('../src/work')

describe('retornar el dia', () => {
    describe('retornar el dia', () =>{
        it('retornar el dia', () =>{
            expect(work.return_day(2)).to.equal('lunes');
            expect(work.return_day(1)).to.equal('domingo');
            expect(work.return_day(3)).to.equal('martes');
            expect(work.return_day(5)).to.equal('jueves');
        });
    });
   
})

