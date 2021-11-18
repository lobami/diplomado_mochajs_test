const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator')

describe('Calculator', () => {
    describe('Suma', () =>{
        it('suma de dos numeros', () =>{
            expect(calculator.add(2,4)).to.equal(6);
            expect(calculator.add(4,4)).to.equal(8);
            expect(calculator.add(12,102)).to.equal(114);
            expect(calculator.add(32,38)).to.equal(70);
        });
    });
    describe('Multiplicacion', () =>{
        it('multiplicacion de dos numeros', () =>{
            expect(calculator.multiply(2,4)).to.equal(8);
            expect(calculator.multiply(4,4)).to.equal(16);
            expect(calculator.multiply(12,102)).to.equal(1224);
            expect(calculator.multiply(32,38)).to.equal(1216);
        });
    })

    describe('Division', () =>{
        it('Division de dos numeros', () =>{
            expect(calculator.divide(4,2)).to.equal(2);
            expect(calculator.divide(4,4)).to.equal(1);
            expect(calculator.divide(120,12)).to.equal(10);
            expect(calculator.divide(32,2)).to.equal(16);
        });
    });

    describe('Resta', () =>{
        it('Resta de dos numeros', () =>{
            expect(calculator.subtract(4,2)).to.equal(2);
            expect(calculator.subtract(4,4)).to.equal(0);
            expect(calculator.subtract(120,12)).to.equal(108);
            expect(calculator.subtract(32,2)).to.equal(30);
        });
    })
})

