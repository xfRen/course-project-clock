const React = require('react');
const ReactDOM = require('react-dom');

var Slider = React.createClass({
  propTypes: {
    hideSlider: React.PropTypes.bool,
    onMovingDone: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className='row'>
        <div className='small-12 columns'>
          <div className='slider' data-slider='' data-end='3599' data-step='60' id='slider'>
            <span className='slider-handle' data-slider-handle role='slider'></span>
            <span className='slider-fill' data-slider-fill=''></span>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    // $(this.getDOMNode()).foundation();
    // 'Warning: Slider.getDOMNode(...) is deprecated. Please use ReactDOM.findDOMNode(instance) instead.'
    $(ReactDOM.findDOMNode(this)).foundation();
    var sliderInstance = this;
    $('.slider').on('moved.zf.slider', function() {
      var value = $(this).children('.slider-handle').attr('aria-valuenow');
      sliderInstance.props.onMovingDone(parseInt(value));
    });
  },
  componentWillReceiveProps: function(newProps) {
    var {hideSlider} = newProps;
    if (hideSlider) {
      if (document.getElementById('slider') !== null) {
        document.getElementById('slider').style.visibility = 'hidden';
        document.getElementById('slider').children[0].setAttribute('aria-valuenow', '0');
        document.getElementById('slider').children[0].style.left = '0%';
        document.getElementById('slider').children[1].style.width = '0px';
      }
    } else {
      if (document.getElementById('slider') !== null) {
        document.getElementById('slider').style.visibility = 'visible';
      }
    }
  }
});

module.exports = Slider;
