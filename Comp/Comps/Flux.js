import React, {Component} from 'react';
import styled from 'styled-components';   
// import {Scene as scene , Router as router, Actions , Reducer , ActionConst, Overlay as overlay, Tabs as tabs, Modal as modal, Drawer as drawer, Stack as stack, Lightbox as lightbox } from 'react-native-router-flux';
import {  Scene     ,//as Scene_ , 
          Router    ,//as Router_, 
          Stack     ,//as Stack_, 
          Lightbox  ,//as Lightbox_,
          Drawer    ,//as Drawer_,
          Modal     ,//as Modal_, 
          Tabs      ,//as Tabs_, 
          Overlay   ,//as Overlay_, 
          Actions,
          ActionConst} from 'react-native-router-flux';
import {SC}  from '../../Lib/StyleConv';
import _  from 'lodash'; 
 
export {Scene  , Router , Stack ,  Overlay , Tabs , Modal , Drawer  ,Lightbox , Actions, ActionConst };  
// //====================================
// let Scenea =  styled(Scene_).attrs((props)=>{
//   return SC.conv(props, {}); 
// })`
// ${SC.cls}
// `; 
 
// //====================================
// let Lightboxa =  styled(Lightbox_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 
 
// // //=================================
// let Stacka =  styled(Stack_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 

// // //=================================
// let Drawera =  styled(Drawer_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 

// // //=================================
// let Modala =  styled(Modal_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 

// // //=================================
// let Tabsa =  styled(Tabs_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 

// // //=================================
// let Overlaya =  styled(Overlay_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 

// // //====================================
// let Routera =  styled(Router_).attrs((props)=>{
//   return SC.conv(props, {});
// })`
// ${SC.cls}
// `; 

 
// // //====================================

// class Lightbox extends Component {
  
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Lightbox_   {...this.props}>{this.props.children}</Lightbox_>)
//   }
// }

// class Drawer extends Component {
  
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th);  
//     return (<Drawer_   {...this.props}>{this.props.children}</Drawer_>)
//   }
// }

// class Modal extends Component {
  
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Modala   {...this.props}>{this.props.children}</Modala>)
//   }
// }

// class Tabs extends Component {
  
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Tabsa   {...this.props}>{this.props.children}</Tabsa>)
//   }
// }

// class Overlay extends Component {
  
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Overlaya   {...this.props}>{this.props.children}</Overlaya>)
//   }
// }

// class Router extends Component {
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Routera   {...this.props}>{this.props.children}</Routera>)
//   }
// }

// class Scene extends Component { 
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Scenea   {...this.props}>{this.props.children}</Scenea>)
//   }
// }
 
// class Stack extends Component {
//   render(){
//     let tmpProps = Object.assign({},this.props); 
//     //SC.appendTheme(tmpProps,  this.props.th); 
//     return (<Stacka   {...this.props}>{tmpProps.children}</Stacka>)
//   }
// }
// export {Scene  , Router , Actions , Reducer , ActionConst, Overlay , Tabs , Modal , Drawer , Stack , Lightbox  }; 