// 'use strict';

describe('Working Specs', () => {
  it("can do maths", () => {
    expect(1+1).toBe(2);
    expect(true).toBe(true);
  })
});

describe('Maths', () => {

  describe('Addition', () => {
    it('can add numbers', () => {
      expect(maths.sum(1,1)).toBe(2);
    })
  })

  describe('Multiplication', () => {
    it('can multiply numbers', () => {
      expect(maths.multiply(10,10)).toBe(100);
    });
    it('can multiply numbers', () => {
      expect(maths.multiply(2,2)).toBe(4);
    });
    it('doesn\'t fail if numbers are undefined', () => {
      expect(maths.multiply()).toEqual(NaN);
      expect({}).toEqual({});
    })
  })

})















// describe('being right about things', function() {
//   it('maths works', function() {
//     expect(1+1).toBe(2);
//     expect(2+2).toBe(4);
//   });
//   it('strings work', function() {
//     expect('1'+'1').toBe('11');
//     expect(2+2).toBe(4);
//   });
// });

// describe('maths', function() {
//   it('can do powers', function() {
//     expect(maths.power(2,2)).toBe(4);
//     expect(maths.power(2,0)).toBe(1);
//     expect(maths.power(2,undefined)).toEqual(NaN);
//   });
//   // it('should be the case that one and one is 2', function() {
//   //   expect(maths.div(2,2)).toBe(4);
//   // });
//   // it('should be the case that one and one is 2', function() {
//   //   expect(maths.div(2,2)).toBe(4);
//   // });
// });
