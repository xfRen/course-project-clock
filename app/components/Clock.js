const React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      status: '',
      time: '00:00'
    };
  },
  propTypes: {
    status: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  },
  render: function() {
    var {status, time} = this.props;
    return (
      <div>
        <div>
          <p className='time-paragraph'>{time}</p>
        </div>
        <div>
          <p className='status-paragraph'>{status}</p>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
