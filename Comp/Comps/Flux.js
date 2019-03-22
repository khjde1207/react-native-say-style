import React, {Component} from 'react';
import styled from 'styled-components';   
import {Scene as scene , Router as router, Actions as actions, Reducer as reducer, ActionConst as actionConst, Overlay as overlay, Tabs as tabs, Modal as modal, Drawer as drawer, Stack as stack, Lightbox as lightbox } from 'react-native-router-flux';
import {SC}  from '../../Lib/StyleConv';
import _  from 'lodash';

// import {styles as s, sizes} from "react-native-style-tachyons";
// let compArr = [{"scene": scene},{"router": router},{"actions": actions},{"reducer": reducer},{"actionConst": actionConst},{"overlay": overlay},{"tabs": tabs},{"modal": modal},{"drawer": drawer},{"stack": stack},{"lightbox": lightbox}];

let Router_comp =  styled(router).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Router extends Component {
  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Router_comp  ref={this.fnRef} {...tmpProps}></Router_comp>)
  }
}
 

let Scene_comp =  styled(scene).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Scene extends Component {
  fnRef = (ref)=>this.comp = ref;
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Scene_comp  ref={this.fnRef} {...tmpProps}></Scene_comp>)
  }
}

// const Scene_comp = styled(scene).attrs((props)=>{
//   return SC.conv(props, {
//   });
// })`
// ${SC.cls}
// `; 
// export class Scene extends Component {
//   fnRef = (ref)=>this.comp = ref;
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Scene_comp  ref={this.fnRef} {...tmpProps}></Scene_comp>)
//   }
// }