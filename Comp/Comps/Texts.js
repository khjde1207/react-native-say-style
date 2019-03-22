import React, {Component} from 'react';
import styled from 'styled-components/native';
import AnimateNumber from '@bankify/react-native-animate-number'
import * as Animatable from 'react-native-animatable';
import {Text as T} from 'react-native';

import { SC}  from '../../Lib/StyleConv';
import {styles as s, sizes} from "react-native-style-tachyons";



const DefaultText = styled(T).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`;

const AniText = styled(Animatable.Text).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls};
`; 

const TextAni = styled(AnimateNumber).attrs((props)=>{
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
    if(this.props.numAni){
      if(this.props.renderContent){return (<TextAni ref={this.fnRef} {...this.props}></TextAni>)}
      return (<TextAni ref={this.fnRef} {...this.props} renderContent={ (value)=>
        <DefaultText  ref={this.fnRefContens} {...this.props}>{value}</DefaultText>
      }></TextAni>);
    }
    if(this.props.ani){
      return <AniText ref={this.fnRef} {...this.props}>{this.props.children}</AniText>; 
    }
    return <DefaultText ref={this.fnRef} {...this.props}>{this.props.children}</DefaultText>; 
  }
}