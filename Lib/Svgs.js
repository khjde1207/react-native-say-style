import React from 'react'
import Svgs,{  Circle,  Ellipse,  G as g,  Text,  TSpan,  TextPath,  Path as p ,  Polygon,  Polyline,  Line,  Rect,  Use,  Image,  Symbol,  Defs,  LinearGradient,  RadialGradient,  Stop,  ClipPath,  Pattern,  Mask,} from 'react-native-svg';
import { AnimatedSVGPath } from 'react-native-svg-animations';
import * as Animatable from 'react-native-animatable';
import {SC } from './StyleConv'
import  {rem} from './GlobalCss';
let num  = Number(rem/15).toFixed(2);

const Svg = (props) => {
  var width = props.width;
  var height = props.height;
  viewBox = {};
  if(props.viewBox){
    let arrTmpBox = props.viewBox.split(" ");
    if(arrTmpBox.length == 4){
      viewBox["viewBox"] = `${arrTmpBox[0]} ${arrTmpBox[1]} ${arrTmpBox[2]*num} ${arrTmpBox[3]*num}`
    }
  }
  if( typeof width == "number"){width *= num}
  if( typeof height == "number"){height *= num}
  
  // if(props.ani){
  //   let TmpSvg =   Animatable.createAnimatableComponent(Svgs);
  //   return React.createElement(TmpSvg , {...props , width : width , height :height , ...SC.conv(props , {}), ...SC.cls(props.cls | {}) });
  // } 
  return React.createElement(Svgs , {...props , width : width , height :height , ...SC.conv(props , {}), ...SC.cls(props.cls | {}), ...viewBox });
} 
const G = (props) => {
  return React.createElement(g , {...props , scale : num, ...SC.cls(props.cls | {})}); 
}

const Path = (props) => {
  if(props.ani){
    return React.createElement(AnimatedSVGPath , {...props ,});   
  }
  return React.createElement(p , {...props ,}); 
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