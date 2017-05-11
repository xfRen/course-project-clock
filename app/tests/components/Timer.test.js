const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const Timer = require('Timer');

describe('Component - Timer', function() {
  it('should exist', function() {
    expect(Timer).toExist();
  });

  describe('Function - setTime', function() {
    it('should set minute and second to 0 if input value is 0', function() {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setTime(0);
      expect(timer.state.minute).toBe(0);
      expect(timer.state.second).toBe(0);
    });
    it('should calculate minute and second if input value is not 0 or NaN', function() {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setTime(102);
      expect(timer.state.minute).toBe(1);
      expect(timer.state.second).toBe(42);
    });
  });
});
