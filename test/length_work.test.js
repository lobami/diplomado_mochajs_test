const chai = require('chai');
const expect = chai.expect;

const work = require('../src/work')

describe('Contar caracteres', () => {
    describe('contador de caracteres...', () =>{
        it('verificar si los caracteres corresponden', () =>{
            expect(work.longitud_script('hola')).to.equal(4);
            expect(work.longitud_script('examen')).to.equal(6);
            expect(work.longitud_script('laptop')).to.equal(6);
            expect(work.longitud_script('creadores')).to.equal(9);
        });
    });
   
})

