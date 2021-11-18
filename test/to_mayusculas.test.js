const chai = require('chai');
const expect = chai.expect;

const work = require('../src/work')


describe('convertir a mayusculas', () => {
    describe('convertir a mayusculas', () => {
        it('convertir a mayusculas', () => {
            expect(work.to_mayuscula('hola')).to.equal('HOLA');
            expect(work.to_mayuscula('jeje')).to.equal('JEJE');
            expect(work.to_mayuscula('mmm')).to.equal('MMM');
            expect(work.to_mayuscula('loth')).to.equal('LOTH');
        });
    });

})

/** */