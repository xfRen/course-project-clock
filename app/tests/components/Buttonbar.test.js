const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');
const Buttonbar = require('Buttonbar');

describe('Component - Buttonbar', function() {
  it('should exist', function() {
    expect(Buttonbar).toExist();
  });

  describe('Function onStartClickHandler', function() {
    var onStartSpy, onPauseSpy, onResetSpy, buttonbar;
    beforeEach(function() {
      onStartSpy = expect.createSpy();
      onPauseSpy = expect.createSpy();
      onResetSpy = expect.createSpy();
      buttonbar = TestUtils.renderIntoDocument(
        <Buttonbar onStart={onStartSpy} onPause={onPauseSpy} onReset={onResetSpy}/>
      );
    });
    it('should call onStart if user click startBtn and startBtn is not disabled', function() {
      var startBtn = ReactDOM.findDOMNode(buttonbar).querySelector('#startBtn');
      TestUtils.Simulate.click(startBtn);
      // Another way is to set "ref" property on startBtn and use the below code to reach it
      // var startBtn = buttonbar.refs.startBtn;
      // TestUtils.Simulate.click(startBtn);
      expect(onStartSpy).toHaveBeenCalled();
    });
    it('should not call onStart if user click startBtn and startBtn is disabled', function() {
      var startBtn = ReactDOM.findDOMNode(buttonbar).querySelector('#startBtn');
      startBtn.className += ' disabled';
      TestUtils.Simulate.click(startBtn);
      expect(onStartSpy).toNotHaveBeenCalled();
    });
  });

  describe('Function onPauseClickHandler', function() {
    var onStartSpy, onPauseSpy, onResetSpy, buttonbar;
    beforeEach(function() {
      onStartSpy = expect.createSpy();
      onPauseSpy = expect.createSpy();
      onResetSpy = expect.createSpy();
      buttonbar = TestUtils.renderIntoDocument(
        <Buttonbar onStart={onStartSpy} onPause={onPauseSpy} onReset={onResetSpy}/>
      );
    });
    it('should call onPause if user click pauseBtn and pauseBtn is not disabled', function() {
      var pauseBtn = ReactDOM.findDOMNode(buttonbar).querySelector('#pauseBtn');
      TestUtils.Simulate.click(pauseBtn);
      expect(onPauseSpy).toHaveBeenCalled();
    });
    it('should not call onPause if user click pauseBtn and pauseBtn is disabled', function() {
      var pauseBtn = ReactDOM.findDOMNode(buttonbar).querySelector('#pauseBtn');
      pauseBtn.className += ' disabled';
      TestUtils.Simulate.click(pauseBtn);
      expect(onPauseSpy).toNotHaveBeenCalled();
    });
  });

  describe('Function onResetClickHandler', function() {
    var onStartSpy, onPauseSpy, onResetSpy, buttonbar;
    beforeEach(function() {
      onStartSpy = expect.createSpy();
      onPauseSpy = expect.createSpy();
      onResetSpy = expect.createSpy();
      buttonbar = TestUtils.renderIntoDocument(
        <Buttonbar onStart={onStartSpy} onPause={onPauseSpy} onReset={onResetSpy}/>
      );
    });
    it('should call onReset if user click resetBtn and resetBtn is not disabled', function() {
      var resetBtn = ReactDOM.findDOMNode(buttonbar).querySelector('#resetBtn');
      TestUtils.Simulate.click(resetBtn);
      expect(onResetSpy).toHaveBeenCalled();
    });
    it('should not call onReset if user click resetBtn and resetBtn is disabled', function() {
      var resetBtn = ReactDOM.findDOMNode(buttonbar).querySelector('#resetBtn');
      resetBtn.className += ' disabled';
      TestUtils.Simulate.click(resetBtn);
      expect(onResetSpy).toNotHaveBeenCalled();
    });
  });

});
