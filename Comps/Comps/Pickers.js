

import React, {Component} from 'react';
import styled from 'styled-components';   
import { Picker as picker } from 'react-native';
import {styles as s , SC} from 'react-native-say-style'
import * as Animatable from 'react-native-animatable'; 

let aniPicker = Animatable.createAnimatableComponent(picker);
const Picker = styled(picker).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 
const AniPicker = styled(aniPicker).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export default  class  extends Component {

  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    if(tmpProps.ani){
      return <AniPicker ref={this.fnRef} {...this.props}>{this.props.children}</AniPicker>; 
    }
    return (<Picker  ref={this.fnRef} {...tmpProps}></Picker>)

  }
}