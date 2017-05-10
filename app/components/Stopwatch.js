const React = require('react');
const Clock = require('Clock');
const Buttonbar = require('Buttonbar');

const READY = 'Ready';
const TIMING = 'Timing';
const PAUSED = 'Paused';

var Stopwatch = React.createClass({
  getInitialState: function() {
    return {
      status: READY,
      minute: 0,
      second: 0,
      intervalId: 0
    };
  },
  render: function() {
    var {status, minute, second} = this.state;
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
        <Clock status={status} time={time}/>
        <hr/>
        <Buttonbar
          onStart={this.startClickHandler}
          onPause={this.pauseClickHandler}
          onReset={this.resetClickHandler}/>
      </div>
    );
  },
  startClickHandler: function() {
    var intervalId = setInterval(this.runClock, 1000);
    this.setState({
      status: TIMING,
      intervalId: intervalId
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
      status: READY,
      minute: 0,
      second: 0,
      intervalId: 0
    });
  },
  runClock: function() {
    var {minute, second} = this.state;
    if (second === 59) {
      if (minute === 59) {
        // ToDo: do something when 59:59
      } else {
        minute += 1;
        second = 0;
      }
    } else {
      second += 1;
    }
    this.setState({
      minute: minute,
      second: second
    });
  }
});

module.exports = Stopwatch;
