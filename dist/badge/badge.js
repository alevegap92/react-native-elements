Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Badge=function Badge(props){var

containerStyle=








props.containerStyle,textStyle=props.textStyle,wrapperStyle=props.wrapperStyle,onPress=props.onPress,component=props.component,value=props.value,children=props.children,element=props.element,attributes=_objectWithoutProperties(props,['containerStyle','textStyle','wrapperStyle','onPress','component','value','children','element']);

if(element)return element;

var Component=_reactNative.View;
var childElement=
_react2.default.createElement(_reactNative.Text,{style:[styles.text,textStyle&&textStyle]},value);


if(children){
childElement=children;
}

if(children&&value){
console.error('Badge can only contain either child element or value');
}

var touchableProps={};
if(!component&&onPress){
Component=_reactNative.TouchableOpacity;
touchableProps={onPress:onPress};
}

if(component)Component=component;

return(
_react2.default.createElement(_reactNative.View,{style:[styles.container&&wrapperStyle&&wrapperStyle]},
_react2.default.createElement(Component,_extends({},
attributes,{
style:[styles.badge,containerStyle&&containerStyle]},
touchableProps),

childElement)));



};

Badge.propTypes={
containerStyle:_ViewPropTypes2.default.style,
wrapperStyle:_ViewPropTypes2.default.style,
textStyle:_reactNative.Text.propTypes.style,
children:_propTypes2.default.oneOfType([
_propTypes2.default.element,
_propTypes2.default.arrayOf(_propTypes2.default.element)]),

value:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),
onPress:_propTypes2.default.func,
component:_propTypes2.default.func,
element:_propTypes2.default.element};


var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'row'},

badge:{
padding:12,
paddingTop:3,
paddingBottom:3,
backgroundColor:_colors2.default.primary,
borderRadius:20,
alignItems:'center',
justifyContent:'center'},

text:{
fontSize:14,
color:'white'}});exports.default=



Badge;
//# sourceMappingURL=badge.js.map