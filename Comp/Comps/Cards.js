import React, {Component} from 'react';
import styled from 'styled-components';   
import * as Animatable from 'react-native-animatable'; 
import {Card as card} from 'react-native-elements';

import {SC} from '../../Lib/StyleConv';
import {styles as s, sizes} from "react-native-style-tachyons";


//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

const Card = styled(card).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 
// const AniCard = styled(AnimatableCard).attrs((props)=>{
//   return Animatable.createAnimatableComponent(Card);
// })`
// ${SC.cls}
// `; 

export default  class  extends Component {

  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props);  
    
    return (<Card  ref={this.fnRef} {...tmpProps}></Card>)

  }
}