const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const Clock = require('Clock');

const READY = 'Ready';

describe('Component - Clock', function() {
  it('should exist', function() {
    expect(Clock).toExist();
  });

  it('should render clock to output', function() {
    var clock = TestUtils.renderIntoDocument(<Clock status={READY} time={'10:09'}/>);
    var root = ReactDOM.findDOMNode(clock);
    var actualStatus = $(root).find('.status-paragraph').text();
    var actualTime = $(root).find('.time-paragraph').text();
    // vanilla javascript version also works:
    // var actualStatus = ReactDOM.findDOMNode(clock).querySelector('.status-paragraph').innerText;
    // var actualTime = ReactDOM.findDOMNode(clock).querySelector('.time-paragraph').innerText;
    expect(actualStatus).toBe(READY);
    expect(actualTime).toBe('10:09');
  });
});
