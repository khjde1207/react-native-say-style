import React, {Component} from 'react';
import styled from 'styled-components';   

import {Icon as I} from 'react-native-elements';
import {styles as s , SC} from 'react-native-say-style'
import * as Animatable from 'react-native-animatable'; 

// const aniB = Animatable.createAnimatableComponent(B);

const Icon = styled(I).attrs((props)=>{
  return SC.conv(props, {
  });
})`
${SC.cls}
`; 

export default  class  extends Component {

  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Icon  ref={this.fnRef} {...tmpProps}></Icon>)
  }
}