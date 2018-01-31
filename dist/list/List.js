Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var List=function List(props){var
children=props.children,containerStyle=props.containerStyle,attributes=_objectWithoutProperties(props,['children','containerStyle']);
return(
_react2.default.createElement(_reactNative.View,_extends({},
attributes,{
style:[styles.listContainer,containerStyle&&containerStyle]}),

children));


};

List.propTypes={
children:_propTypes2.default.any,
containerStyle:_ViewPropTypes2.default.style};


var styles=_reactNative.StyleSheet.create({
listContainer:{
marginTop:20,
borderTopWidth:1,
borderColor:_colors2.default.greyOutline,
backgroundColor:'#fff'}});exports.default=



List;
//# sourceMappingURL=List.js.map