const React = require('react');

var Buttonbar = React.createClass({
  propTypes: {
    startBtnDisabled: React.PropTypes.bool,
    onStart: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onReset: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className='button-bar'>
        <button id='startBtn' className='hollow button large'
          onClick={this.onStartClickHandler}>Start</button>
        <button id='pauseBtn' className='hollow button large'
          onClick={this.onPauseClickHandler}>Pause</button>
        <button id='resetBtn' className='hollow button secondary large'
          onClick={this.onResetClickHandler}>Reset</button>
      </div>
    );
  },
  componentDidMount: function() {
    $('#pauseBtn').addClass('hide');
    $('#resetBtn').addClass('disabled');
    var {startBtnDisabled} = this.props;
    if (startBtnDisabled) {
      $('#startBtn').addClass('disabled');
    }
  },
  componentWillReceiveProps: function(newProps) {
    // console.log('Buttonbar - componentWillReceiveProps() is invoked before a mounted component receives new props.');
    var {startBtnDisabled} = newProps;
    if (startBtnDisabled) {
      $('#startBtn').addClass('disabled');
      $('#pauseBtn').addClass('hide');
      $('#startBtn').removeClass('hide');
    } else {
      $('#startBtn').removeClass('disabled');
    }
  },
  onStartClickHandler: function(event) {
    if (event !== null && event.target !== null &&
        event.target.className.indexOf('disabled') === -1) {
      // disabled class can not make the button looks like disabled,
      // but it can still be clicked and clickHandler is fired.
      this.toggleButton();
      $('#resetBtn').addClass('disabled');
      this.props.onStart();
    }
  },
  onPauseClickHandler: function(event) {
    if (event !== null && event.target !== null &&
        event.target.className.indexOf('disabled') === -1) {
      this.toggleButton();
      $('#resetBtn').removeClass('disabled');
      this.props.onPause();
    }
  },
  onResetClickHandler: function(event) {
    if (event !== null && event.target !== null &&
        event.target.className.indexOf('disabled') === -1) {
      $('#resetBtn').addClass('disabled');
      this.props.onReset();
    }
  },
  toggleButton: function() {
    $('#startBtn').toggleClass('hide');
    $('#pauseBtn').toggleClass('hide');
  }
});

module.exports = Buttonbar;
