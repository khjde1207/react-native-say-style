import React, {Component} from 'react';
import styled from 'styled-components';   
import {Scene as scene , Router as router, Actions , Reducer , ActionConst, Overlay as overlay, Tabs as tabs, Modal as modal, Drawer as drawer, Stack as stack, Lightbox as lightbox } from 'react-native-router-flux';
import {SC}  from '../../Lib/StyleConv';
import _  from 'lodash';

export {Actions , ActionConst, Reducer};
//====================================
let Lightbox_comp =  styled(lightbox).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Lightbox extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Lightbox_comp  ref={this.fnRef} {...tmpProps}></Lightbox_comp>)
  }
}
//=================================
let Stack_comp =  styled(stack).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Stack extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Stack_comp  ref={this.fnRef} {...tmpProps}></Stack_comp>)
  }
}
//=================================
let Drawer_comp =  styled(drawer).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Drawer extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Drawer_comp  ref={this.fnRef} {...tmpProps}></Drawer_comp>)
  }
}
//=================================
let Modal_comp =  styled(modal).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Modal extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Modal_comp  ref={this.fnRef} {...tmpProps}></Modal_comp>)
  }
}
//=================================
let Tabs_comp =  styled(tabs).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Tabs extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Tabs_comp  ref={this.fnRef} {...tmpProps}></Tabs_comp>)
  }
}
//=================================
let Overlay_comp =  styled(overlay).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Overlay extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Overlay_comp  ref={this.fnRef} {...tmpProps}></Overlay_comp>)
  }
}
//====================================
let Router_comp =  styled(router).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

export class Router extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    SC.appendTheme(tmpProps,  this.props.th); 
    return (<Router_comp  ref={this.fnRef} {...tmpProps}></Router_comp>)
  }
}
 
//====================================
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