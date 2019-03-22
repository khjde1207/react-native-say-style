import React, {Component} from 'react';
import styled from 'styled-components';   

import {Image as I} from 'react-native-elements';
import {SC} from '../Lib/StyleConv';
import {styles as s, sizes} from "react-native-style-tachyons";

import * as Animatable from 'react-native-animatable'; 

const Image = styled(I).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 
const AniImage = styled(Animatable.Image).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export default  class  extends Component {

  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    if(this.props.bg){
      SC.append(tmpProps, "cls",  "w100p h100p absolute_fill zIndex_1");
      SC.append(tmpProps, "ccls",  "absolute_fill");
      
    } 
    return (tmpProps.ani ?  <AniImage  ref={this.fnRef} {...tmpProps}>{tmpProps.children}</AniImage>:
      (<Image  ref={this.fnRef} {...tmpProps}></Image>))

  }
}