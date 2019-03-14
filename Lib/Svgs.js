import React from 'react'
import Svgs,{  Circle,  Ellipse,  G as g,  Text,  TSpan,  TextPath,  Path,  Polygon,  Polyline,  Line,  Rect,  Use,  Image,  Symbol,  Defs,  LinearGradient,  RadialGradient,  Stop,  ClipPath,  Pattern,  Mask,} from 'react-native-svg';
import * as Animatable from 'react-native-animatable';
import {SC } from './StyleConv'
import  {rem} from './GlobalCss';
let num  = Number(rem/15).toFixed(2);

const Svg = (props) => {
  var width = props.width;
  var height = props.height;
  if( typeof width == "number"){width *= num}
  if( typeof height == "number"){height *= num}
  
  // if(props.ani){
  //   let TmpSvg =   Animatable.createAnimatableComponent(Svgs);
  //   return React.createElement(TmpSvg , {...props , width : width , height :height , ...SC.conv(props , {}), ...SC.cls(props.cls | {}) });
  // } 
  return React.createElement(Svgs , {...props , width : width , height :height , ...SC.conv(props , {}), ...SC.cls(props.cls | {}) });
} 
const G = (props) => {
  return React.createElement(g , {...props , scale : num, ...SC.cls(props.cls | {})}); 
}

export {
 Svg,
 G,
 Circle,  
 Ellipse, 
 Text,  
 TSpan,  
 TextPath,  
 Path,  
 Polygon,  
 Polyline,  
 Line,  
 Rect,  
 Use,  
 Image,  
 Symbol,  
 Defs,  
 LinearGradient,  
 RadialGradient,  
 Stop,  
 ClipPath,  
 Pattern,  
 Mask
}