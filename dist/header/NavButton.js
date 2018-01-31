Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _Icon=require('../icons/Icon');var _Icon2=_interopRequireDefault(_Icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var NavButton=function NavButton(props){var
icon=props.icon,attributes=_objectWithoutProperties(props,['icon']);

return _react2.default.createElement(_Icon2.default,_extends({},attributes,{name:icon}));
};

NavButton.propTypes={
icon:_propTypes2.default.string};exports.default=


NavButton;
//# sourceMappingURL=NavButton.js.map