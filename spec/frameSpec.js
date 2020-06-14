'use strict';

describe('Frame class', function(){
  var frame;
  beforeEach(function(){
    frame = new Frame ()
  });
  it('when created has 2 properties - roll1,roll2 - equal to null and 2 methods for visualizing them', function(){
    expect(frame.pointsFirstRoll()).toEqual(null);
    expect(frame.pointsSecondRoll()).toEqual(null);
  });

});
