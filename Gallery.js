var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Data from "./Data";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

var Gallery = function (_React$Component) {
    _inherits(Gallery, _React$Component);

    function Gallery() {
        _classCallCheck(this, Gallery);

        return _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).apply(this, arguments));
    }

    _createClass(Gallery, [{
        key: "render",
        value: function render() {
            var _useState = useState(Data),
                _useState2 = _slicedToArray(_useState, 2),
                data = _useState2[0],
                setData = _useState2[1];
            // const categoryData = Data.map((value)=>{
            //     return value.category
            // });
            // const tabsData= ["all", ...new Set(categoryData)];

            // const filterCategory=(category) =>{
            //     if(category=="all"){
            //         setData(Data);
            //         return;
            //     }
            // const filteredData =  Data.filter((value)=>{
            //     return value.category == category;
            // })
            // setData(filteredData);
            // }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement("div", null),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(ProjectCard, { data: data })
                    ),
                    React.createElement("div", null)
                )
            );
        }
    }]);

    return Gallery;
}(React.Component);

var domContainer = document.querySelector('#gallery');
ReactDOM.render(React.createElement(Gallery, null), domContainer);