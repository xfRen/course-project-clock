const React = require('react');
const {Link, IndexLink} = require('react-router');

var TopNav = React.createClass({
  render: function() {
    return (
      <div>
        <div className='title-bar' data-responsive-toggle='topBar' data-hide-for='medium'>
          <button className='menu-icon' type='button' data-toggle='topBar'></button>
          <div className='title-bar-title'>Menu</div>
        </div>
        <div className='top-bar' id='topBar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li>
                <IndexLink to='/' activeClassName='active-link'>Stopwatch</IndexLink>
              </li>
              <li>
                <Link to='/timer' activeClassName='active-link'>Timer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    $(this.getDOMNode()).foundation();
  }
});

module.exports = TopNav;
