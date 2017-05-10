const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const Timer = require('Timer');

const SET_TIMER = 'Drag the blue square to set the timer';

describe('Component - Timer', function() {
  it('should exist', function() {
    expect(Timer).toExist();
  });

  describe('Function - getInitialState', function() {
    it('should return an object', function() {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      var returnObj = timer.getInitialState();
      expect(returnObj).toBeAn('object');
    });
  });
});
