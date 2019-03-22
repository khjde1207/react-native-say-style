import React, {Component} from 'react';
import styled from 'styled-components';   
import * as Animatable from 'react-native-animatable'; 
import {Button as B} from 'react-native-elements';

import {SC} from '../../Lib/StyleConv';
import {styles as s, sizes} from "react-native-style-tachyons";

// const aniB = Animatable.createAnimatableComponent(B);

const Button = styled(B).attrs((props)=>{
  
  return SC.conv(props, {
    ccls  : "zIndex1",
    iccls : "ma0",
  });
})`
${SC.cls}
`; 

export default  class  extends Component {

  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Button  ref={this.fnRef} {...tmpProps}></Button>)
  }
}