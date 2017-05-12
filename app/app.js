const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, browserHistory} = require('react-router');

const Main = require('Main');
const Stopwatch = require('Stopwatch');
const Timer = require('Timer');

// Remove the below code and load Foundation via scss-loader and styles/base/foundation-settings
// This way we can change the Foundation scss directly and globaly, instead of overwriting the properties with css
// require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!appSass');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Stopwatch}/>
      <Route path='timer' component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
