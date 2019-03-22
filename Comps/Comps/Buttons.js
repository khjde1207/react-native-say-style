import React, {Component} from 'react';
import styled from 'styled-components';   

import {Button as B} from 'react-native-elements';
import {styles as s , SC} from 'react-native-say-style'
import * as Animatable from 'react-native-animatable'; 

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
    // var theme = this.props.th ? s[this.props.th] : {}; 
    // console.log(theme);
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Button  ref={this.fnRef} {...tmpProps}></Button>)
  }
}