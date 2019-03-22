import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {SC} from './Lib/StyleConv';
import  Gcss ,{rem, fontRem} from './Lib/GlobalCss';
import { Svg, Circle,  Ellipse,  G ,  Text,  TSpan,  TextPath,  Path,  Polygon,  Polyline,  Line,  Rect,  Use,  Image,  Symbol,  Defs,  LinearGradient,  RadialGradient,  Stop,  ClipPath,  Pattern,  Mask,} from './Lib/Svgs';
import _ from 'lodash';
import NativeTachyons , {styles, sizes} from "react-native-style-tachyons";
import * as Comps from "./Comp/Components";


class T{ 
  cuerTheme = "";
  themeList = {};
  eventList=[]; 
  constructor(){ 
    NativeTachyons.build({...Gcss},StyleSheet);
  }
  setThemeList(list){
    _.forEach(list, (value , key)=>{
        this.themeList[key] = _.isFunction(value) ? value(styles,sizes) : value;
    });
  }
  appendTheme(themeObj){ 
    _.forEach(list, (value , key)=>{
      this.themeList[key] = _.isFunction(value) ? value(styles,sizes) : value;
    });
  }
  changeTheme(themeName){

    NativeTachyons.build({ rem : rem,fontRem : fontRem},StyleSheet); 

    if(this.themeList[themeName]){
      _.merge(styles, this.themeList[themeName]);
    } 
    
    for(idx in this.eventList){
      this.eventList[idx]();
    }  
    
  }
  setTheme(themeName){
    NativeTachyons.build({ rem : rem,fontRem : fontRem},StyleSheet);
    if(this.themeList[themeName]){
      _.merge(styles, this.themeList[themeName]);
    } 
    
  }

  on(fnEvent , b){
    this.eventList.push(fnEvent);
  }
  

}
let Themes = new T();
export default Comps;

export{
  Themes,
  SC,
  rem, 
  fontRem,
  styles, 
  sizes,
   
  Svg, Circle,  Ellipse,  G ,  Text,  TSpan,  TextPath,  Path,  Polygon,  Polyline,  Line,  Rect,  Use,  Image,  Symbol,  Defs,  LinearGradient,  RadialGradient,  Stop,  ClipPath,  Pattern,  Mask, 
}
