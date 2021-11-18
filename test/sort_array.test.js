const chai = require('chai');
const expect = chai.expect;

const work = require('../src/work')


describe('ordenar array', () => {
    describe('ordenar array', () => {
        it('ordenar array', () => {
            expect(work.sort_number([4, 3])).to.equal([ 3, 4 ]);
            expect(work.sort_number([5, 3])).to.equal([3, 5]);
            expect(work.sort_number([1, 3])).to.equal([1, 3]);
            expect(work.sort_number([8, 7])).to.equal([7, 8]);
        });
    });

})

