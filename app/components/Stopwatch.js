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
  componentWillMount: function() {
    // console.log('Stopwatch - componentWillMount() is invoked immediately before mounting occurs.');
  },
  render: function() {
    // console.log('Stopwatch - render');
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
  componentDidMount: function() {
    // console.log('Stopwatch - componentDidMount() is invoked immediately after a component is mounted.');
  },
  componentWillUnmount: function() {
    // console.log('Stopwatch - componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.');
    var {intervalId} = this.state;
    clearInterval(intervalId);
    this.resetClickHandler();
  },
  componentWillUpdate: function(nextProps, nextState) {
    // Note that you cannot call this.setState() here.
    // If you need to update state in response to a prop change, use componentWillReceiveProps() instead.
    // console.log('Stopwatch - componentWillUpdate() is invoked immediately before rendering when new props or state are being received. ');
  },
  componentDidUpdate: function(prevProps, prevState) {
    // console.log('Stopwatch - componentDidUpdate() is invoked immediately after updating props/state occurs. This method is not called for the initial render.');
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
