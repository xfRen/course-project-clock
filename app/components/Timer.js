const React = require('react');
const Clock = require('Clock');
const Buttonbar = require('Buttonbar');
const Slider = require('Slider');

const SET_TIMER = 'Drag the blue square to set the timer';
const COUNTING_DOWN = 'Counting down';
const PAUSED = 'Paused';

var Timer = React.createClass({
  getInitialState: function() {
    return {
      status: SET_TIMER,
      minute: 0,
      second: 0,
      intervalId: 0,
      startBtnDisabled: true,
      hideSlider: false
    };
  },
  render: function() {
    var {status, minute, second, startBtnDisabled, hideSlider} = this.state;
    var minuteStr = minute.toString();
    if (minuteStr.length === 1) {
      minuteStr = `0${minuteStr}`;
    }
    var secondStr = second.toString();
    if (secondStr.length === 1) {
      secondStr = `0${secondStr}`;
    }
    var time = `${minuteStr}:${secondStr}`;
    return (
      <div>
        <Slider onMovingDone={this.setTime} hideSlider={hideSlider}/>
        <Clock status={status} time={time}/>
        <hr/>
        <Buttonbar
          startBtnDisabled={startBtnDisabled}
          onStart={this.startClickHandler}
          onPause={this.pauseClickHandler}
          onReset={this.resetClickHandler}/>
      </div>
    );
  },
  startClickHandler: function() {
    var intervalId = setInterval(this.countDown, 1000);
    this.setState({
      status: COUNTING_DOWN,
      intervalId: intervalId,
      hideSlider: true
     });
  },
  pauseClickHandler: function() {
    var {intervalId} = this.state;
    clearInterval(intervalId);
    this.setState({
      status: PAUSED,
      intervalId: 0
    });
  },
  resetClickHandler: function() {
    this.setState({
      status: SET_TIMER,
      minute: 0,
      second: 0,
      intervalId: 0,
      startBtnDisabled: true,
      hideSlider: false
    });
  },
  setTime: function(value) {
    if (isNaN(value) || value === 0) {
      this.setState({
        startBtnDisabled: true
      });
      if (value === 0) {
        this.setState({
          minute: 0,
          second: 0
        });
      }
    } else {
      var minute = Math.floor(value / 60);
      var second = value % 60;
      this.setState({
        minute: minute,
        second: second,
        startBtnDisabled: false
      });
    }
  },
  countDown: function() {
    var {minute, second} = this.state;
    if (second === 0) {
      if (minute === 0) {
        // 00:00
      } else {
        minute -= 1;
        second = 59;
      }
    } else {
      second -= 1;
    }
    this.setState({
      minute: minute,
      second: second
    });
  }
});

module.exports = Timer;
