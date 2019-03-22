import React, {Component} from 'react';
import styled from 'styled-components';   
// import {Scene as scene , Router as router, Actions , Reducer , ActionConst, Overlay as overlay, Tabs as tabs, Modal as modal, Drawer as drawer, Stack as stack, Lightbox as lightbox } from 'react-native-router-flux';
import {  Scene     as scenea , 
          Router    as router, 
          Stack     as stack, 
          Lightbox  as lightbox, 
          Drawer    as drawer,
          Modal     as modal, 
          Tabs      as tabs, 
          Overlay   as overlay, 
          Actions,
          ActionConst} from 'react-native-router-flux';
import {SC}  from '../../Lib/StyleConv';
import _  from 'lodash';
//====================================
let Scenea =  styled(scenea).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 
 
//====================================
let Lightboxa =  styled(lightbox).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 
 
// //=================================
let Stacka =  styled(stack).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

// //=================================
let Drawera =  styled(drawer).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

// //=================================
let Modala =  styled(modal).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

// //=================================
let Tabsa =  styled(tabs).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

// //=================================
let Overlaya =  styled(overlay).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

// //====================================
let Routera =  styled(router).attrs((props)=>{
  return SC.conv(props, {});
})`
${SC.cls}
`; 

 
//====================================

class Lightbox extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Lightboxa   {...tmpProps}>{tmpProps.children}</Lightboxa>)
  }
}

class Drawer extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Drawera   {...tmpProps}>{tmpProps.children}</Drawera>)
  }
}

class Modal extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Modala   {...tmpProps}>{tmpProps.children}</Modala>)
  }
}

class Tabs extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Tabsa   {...tmpProps}>{tmpProps.children}</Tabsa>)
  }
}

class Overlay extends Component {
  
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Overlaya   {...tmpProps}>{tmpProps.children}</Overlaya>)
  }
}

class Router extends Component {
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Routera   {...tmpProps}>{tmpProps.children}</Routera>)
  }
}

class Scene extends Component {  
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Scenea   {...tmpProps}>{tmpProps.children}</Scenea>)
  }
}
 
class Stack extends Component {
  render(){
    let tmpProps = Object.assign({},this.props); 
    //SC.appendTheme(tmpProps,  this.props.th); 
    return (<Stacka   {...tmpProps}>{tmpProps.children}</Stacka>)
  }
}

export {Scene  , Router , Stack ,  Overlay , Tabs , Modal , Drawer  ,Lightbox , Actions, ActionConst };  
// export {Scene  , Router , Actions , Reducer , ActionConst, Overlay , Tabs , Modal , Drawer , Stack , Lightbox  }; 