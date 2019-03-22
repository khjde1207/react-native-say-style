import React, {Component} from 'react';
import styled from 'styled-components';   

import {Input as input} from 'react-native-elements';
import { SC}  from '../../Lib/StyleConv';
import {styles as s, sizes} from "react-native-style-tachyons";

import * as Animatable from 'react-native-animatable'; 
let aniInput = Animatable.createAnimatableComponent(input);
 
const Input = styled(input).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 
const AniInput = styled(aniInput).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export default  class  extends Component {

  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    if(tmpProps.ani){
      
      return <AniInput ref={this.fnRef} {...this.props}>{this.props.children}</AniInput>; 
    }
    return (<Input  ref={this.fnRef} {...tmpProps}></Input>)

  }
}