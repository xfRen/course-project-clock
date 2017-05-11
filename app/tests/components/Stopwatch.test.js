const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const Stopwatch = require('Stopwatch');

const READY = 'Ready';

describe('Component - Stopwatch', function() {
  it('should exist', function() {
    expect(Stopwatch).toExist();
  });

  describe('Function - runClock', function() {
    var stopwatch = TestUtils.renderIntoDocument(<Stopwatch/>);
    it('should add 1 to second if second is less than 59 currently', function() {
      stopwatch.setState({
        second: 0
      });
      stopwatch.runClock();
      expect(stopwatch.state.second).toBe(1);
    });
    it('should add 1 to minute and set second to 0 if second is 59 currently', function() {
      stopwatch.setState({
        minute: 0,
        second: 59
      });
      stopwatch.runClock();
      expect(stopwatch.state.minute).toBe(1);
      expect(stopwatch.state.second).toBe(0);
    });
    it('should not update minute / second if minute is 59 and second is 59 currently', function() {
      stopwatch.setState({
        minute: 59,
        second: 59
      });
      stopwatch.runClock();
      expect(stopwatch.state.minute).toBe(59);
      expect(stopwatch.state.second).toBe(59);
    });
  });

  describe('Function - startClickHandler', function() {
    var stopwatch = TestUtils.renderIntoDocument(<Stopwatch/>);
    function resetState() {
      var {intervalId} = stopwatch.state;
      if (intervalId !== 0) {
        clearInterval(intervalId);
      }
      stopwatch.setState({
        status: READY,
        minute: 0,
        second: 0,
        intervalId: 0
      });
    };
    it('should set intervalId', function(done) {
      stopwatch.startClickHandler();
      expect(stopwatch.state.intervalId).toNotBe(0);
      resetState();
      done(); // done is important here to get the reset done before go to the next it statement.
      // otherwise resetState(); will not be executed properly
    });
    it('should call runClock every second', function(done) {
      stopwatch.startClickHandler();
      setTimeout(function() {
        expect(stopwatch.state.minute).toBe(0);
        expect(stopwatch.state.second).toBe(1);
        resetState();
        done();
      }, 1001);
      // setTimeout is an asynchronous method, which means the following code will be executed before the timeout
      console.log('************* setTimeout is asynchronous **************');
    });
  });
});
