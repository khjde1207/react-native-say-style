'use strict';
import React, { Component } from 'react';
import styled ,{compose} from 'styled-components';   
import {View as V, ScrollView as sv} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles as s , SC} from 'react-native-say-style'


const View = styled(V).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`;

const AniView = styled(Animatable.View).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls};
`;

export default  class  extends Component {

  self = this;
  componentWillUpdate() {
  }
  fnRef = (ref)=>this.comp = ref;
  fnRefContens = (ref)=>this.compContens = ref;
  render(){
    let tmpProps = Object.assign({},this.props);
    tmpProps.root && SC.append(tmpProps, "cls",  "top0 right0 left0 hmax");
    tmpProps.rootkey && SC.append(tmpProps, "cls",  "absolute_fill"); 
    return ( 
      tmpProps.ani ? <AniView ref={this.fnRef} {...tmpProps} >{tmpProps.children}</AniView> : 
        <View  ref={this.fnRef} {...tmpProps}>{tmpProps.children}</View>
     );
  }
}