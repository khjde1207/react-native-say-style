import React, {Component} from 'react';
import styled from 'styled-components';   

import {Card as card} from 'react-native-elements';
import {styles as s , SC} from 'react-native-say-style'
import * as Animatable from 'react-native-animatable'; 

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