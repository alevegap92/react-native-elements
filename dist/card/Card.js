Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _fonts=require('../config/fonts');var _fonts2=_interopRequireDefault(_fonts);
var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _Text=require('../text/Text');var _Text2=_interopRequireDefault(_Text);
var _Divider=require('../divider/Divider');var _Divider2=_interopRequireDefault(_Divider);
var _normalizeText=require('../helpers/normalizeText');var _normalizeText2=_interopRequireDefault(_normalizeText);
var _elevation=require('../config/elevation');var _elevation2=_interopRequireDefault(_elevation);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);
var _BackgroundImage=require('../config/BackgroundImage');var _BackgroundImage2=_interopRequireDefault(_BackgroundImage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Card=function Card(props){var

children=

















props.children,flexDirection=props.flexDirection,containerStyle=props.containerStyle,wrapperStyle=props.wrapperStyle,imageWrapperStyle=props.imageWrapperStyle,title=props.title,titleStyle=props.titleStyle,titleNumberOfLines=props.titleNumberOfLines,featuredTitle=props.featuredTitle,featuredTitleStyle=props.featuredTitleStyle,featuredSubtitle=props.featuredSubtitle,featuredSubtitleStyle=props.featuredSubtitleStyle,dividerStyle=props.dividerStyle,image=props.image,imageStyle=props.imageStyle,fontFamily=props.fontFamily,imageProps=props.imageProps,attributes=_objectWithoutProperties(props,['children','flexDirection','containerStyle','wrapperStyle','imageWrapperStyle','title','titleStyle','titleNumberOfLines','featuredTitle','featuredTitleStyle','featuredSubtitle','featuredSubtitleStyle','dividerStyle','image','imageStyle','fontFamily','imageProps']);

return(
_react2.default.createElement(_reactNative.View,_extends({},
attributes,{
style:[
styles.container,
image&&{padding:0},
containerStyle&&containerStyle]}),


_react2.default.createElement(_reactNative.View,{
style:[
styles.wrapper,
wrapperStyle&&wrapperStyle,
flexDirection&&{flexDirection:flexDirection}]},


title===''||
title&&
title.length>0&&
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_Text2.default,{
style:[
styles.cardTitle,
image&&styles.imageCardTitle,
titleStyle&&titleStyle,
fontFamily&&{fontFamily:fontFamily}],

numberOfLines:titleNumberOfLines},

title),

!image&&
_react2.default.createElement(_Divider2.default,{
style:[styles.divider,dividerStyle&&dividerStyle]})),




image&&
_react2.default.createElement(_reactNative.View,{style:imageWrapperStyle&&imageWrapperStyle},
_react2.default.createElement(_BackgroundImage2.default,_extends({
style:[{width:null,height:150},imageStyle&&imageStyle],
source:image},
imageProps),

(featuredTitle||featuredSubtitle)&&
_react2.default.createElement(_reactNative.View,{style:styles.overlayContainer},
featuredTitle&&
_react2.default.createElement(_Text2.default,{
style:[
styles.featuredTitle,
featuredTitleStyle&&featuredTitleStyle]},


featuredTitle),


featuredSubtitle&&
_react2.default.createElement(_Text2.default,{
style:[
styles.featuredSubtitle,
featuredSubtitleStyle&&featuredSubtitleStyle]},


featuredSubtitle))),





_react2.default.createElement(_reactNative.View,{style:[{padding:10},wrapperStyle&&wrapperStyle]},
children)),



!image&&children)));



};

Card.propTypes={
children:_propTypes2.default.any,
flexDirection:_propTypes2.default.string,
containerStyle:_ViewPropTypes2.default.style,
wrapperStyle:_ViewPropTypes2.default.style,
overlayStyle:_ViewPropTypes2.default.style,
title:_propTypes2.default.string,
titleStyle:_reactNative.Text.propTypes.style,
featuredTitle:_propTypes2.default.string,
featuredTitleStyle:_Text2.default.propTypes.style,
featuredSubtitle:_propTypes2.default.string,
featuredSubtitleStyle:_Text2.default.propTypes.style,
dividerStyle:_ViewPropTypes2.default.style,
image:_reactNative.Image.propTypes.source,
imageStyle:_ViewPropTypes2.default.style,
imageWrapperStyle:_ViewPropTypes2.default.style,
fontFamily:_propTypes2.default.string,
imageProps:_propTypes2.default.object,
titleNumberOfLines:_propTypes2.default.number};


var styles=_reactNative.StyleSheet.create({
container:_extends({
backgroundColor:'white',
borderColor:_colors2.default.grey5,
borderWidth:1,
padding:15,
margin:15,
marginBottom:0},
_reactNative.Platform.select({
ios:{
shadowColor:'rgba(0,0,0, .2)',
shadowOffset:{height:0,width:0},
shadowOpacity:1,
shadowRadius:1},

android:_elevation2.default.android.one,
web:_elevation2.default.web.one})),


featuredTitle:_extends({
fontSize:(0,_normalizeText2.default)(18),
marginBottom:8,
color:'white'},
_reactNative.Platform.select({
ios:{
fontWeight:'800'},

android:_extends({},
_fonts2.default.android.black),

web:{
fontWeight:'800'}})),



featuredSubtitle:_extends({
fontSize:(0,_normalizeText2.default)(13),
marginBottom:8,
color:'white'},
_reactNative.Platform.select({
ios:{
fontWeight:'400'},

android:_extends({},
_fonts2.default.android.black),

web:{
fontWeight:'400'}})),



wrapper:{
backgroundColor:'transparent'},

divider:{
marginBottom:15},

cardTitle:_extends({
fontSize:(0,_normalizeText2.default)(14)},
_reactNative.Platform.select({
ios:{
fontWeight:'bold'},

android:_extends({},
_fonts2.default.android.black),

web:{
fontWeight:'bold'}}),{


textAlign:'center',
marginBottom:15,
color:_colors2.default.grey1}),

imageCardTitle:{
marginTop:15},

overlayContainer:{
flex:1,
alignItems:'center',
backgroundColor:'rgba(0, 0, 0, 0.2)',
alignSelf:'stretch',
justifyContent:'center',
position:'absolute',
top:0,
left:0,
right:0,
bottom:0}});exports.default=



Card;
//# sourceMappingURL=Card.js.map