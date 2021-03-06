var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './styles.css'
// import solar from './solar.jpg'

// 'use strict';

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton() {
    _classCallCheck(this, LikeButton);

    return _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).apply(this, arguments));
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "projectcard" },
        React.createElement(
          "div",
          { className: "projecttype" },
          "Machine Learning"
        ),
        React.createElement(
          "div",
          { className: "projectdesc" },
          React.createElement(
            "h2",
            null,
            "Solar Digital"
          ),
          React.createElement(
            "p",
            null,
            "Course Project (CS230: Deep Learning)"
          ),
          React.createElement(
            "p",
            null,
            "Roles: Applied Machine Learning Engineer"
          ),
          React.createElement(
            "p",
            null,
            "Skills: TensorFlow, AWS, Jupyter Notebooks, Git, Python"
          ),
          React.createElement(
            "p",
            null,
            "Built a image classification and segmentation model using ResNet-30 for solar panel detection from satellite imagery."
          )
        )
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);