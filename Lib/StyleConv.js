import _ from 'lodash';
import {styles as s, sizes} from "react-native-style-tachyons";
const  convOp = (props, bop)=>{
  rtn = {};
  var tmp = [];
  tmp  = !!bop ? [props.op] : _.pickBy(props, (prop, key ) => {return opKey[key];});
  _.forEach(tmp ,  (strValue , k) =>{ 
    var tmpMap = _.map(strValue.split(" ") ,(v) =>{
      let rtn ={};
      return opAttr[v];
    }).join(" ");
    rtn[!!bop ? "cls" : opKey[k]] = tmpMap; 
  });
  return rtn;
}

class StyleConv {
  constructor(){
  }
  cls(props){
    if(!props.cls && !props.op){return};
    !props.op && (props.op = "")
    let cls =  `${props.cls} ${convOp(props, true).cls}`; 
    var styleArr = _.map(cls.split(" ") ,(v) =>{
      if(v[0] != "$") {return s[v];}
      var target = {}
      if(/\$.+:/.test(v)){
        var tmpObj = this.getKey(v);
        let tmpKey = Object.keys(s[tmpObj.key]);
        if(!!tmpKey){
          let run = tmpObj.v.replace( /\$/g , "sizes."); 
          return new Function("sizes" , "key", `try{return {${tmpKey}: ${run} || 0} }catch (error) {return {${tmpKey}: 0 } }`)(sizes) ;            
        }
      }
    });
    return styleArr;
  } 
  getKey(str){
    var ex = /\$.+:/.exec(str);
    str = str.substring(ex[0].length);
    key = ex[0].substring(1, ex[0].length-1)+"1";
    return {key : key , v : str};
  }
  conv(props, attrs){
    let tmpAttrs = {};
    // _.pickBy(props , (prop, key ) => {return mapcls2k[key];})
    attrs = _.mergeWith({},convOp(props),  attrs, (a,b)=>{ if(a && b && a !== b){return `${a} ${b}`}});
    
    var objMap  = _.pickBy(_.mergeWith({},props,  attrs, (a,b)=>{
      if(a && b && a !== b){
        return `${a} ${b}`
      }
    }), (prop, key ) => {return mapcls2k[key];});
    
    _.forEach(objMap , (strValue , k) =>{
      var styleArr = _.map(strValue.split(" ") ,(v) =>{
        if(v[0] != "$") {return s[v];}
        var target = {}
        if(/\$.+:/.test(v)){
          var tmpObj = this.getKey(v);
          let tmpKey = Object.keys(s[tmpObj.key]);
          if(!!tmpKey){
            let run = tmpObj.v.replace( /\$/g , "sizes."); 
            return new Function("sizes" , "key", `try{return {${tmpKey}: ${run} || 0} }catch (error) {return {${tmpKey}: 0 } }`)(sizes) ;            
          }
        }
      });
      (mapcls2k[k]) && (tmpAttrs[mapcls2k[k]] = []) && (tmpAttrs[mapcls2k[k]] = _.concat(tmpAttrs[mapcls2k[k]] , styleArr));
    });
    return tmpAttrs; 
  }
  append(obj , key, value){
    var tmp = _.get(obj , key) || ""; 
    return _.set(obj , key, `${tmp} ${value}`);
  }
  
}
const opAttr = {
    T : {},
    C : "jcc",
    Ca : "jcsa",
    B : "jcfe",
    l : {},
    r : "aife", 
    c : "aic",
    t : {},
    row : "flx_row",  
    wrap : "flx_wrap",
    rr : "flx_row_reverse" ,
    cr : "flx_col_reverse" ,
}
const opKey = {
  aop: "acls",
	gbiop: "gbicls",
	badgeop: "badgecls",
	btnop: "btncls",
	cop: "ccls",
	ccop: "cccls",
	dsop: "dscls",
	dstop: "dstcls",
	dop: "dcls",
	dtop: "dtcls",
	eop: "ecls",
	fstop: "fstcls",
	ftop: "ftcls",
	fop: "fcls",
	icop: "iccls",
	iop: "icls",
	iwop: "iwcls",
	ibop: "ibcls",
	icop: "iccls",
	lop: "lcls",
	lcop: "lccls",
	licop: "liccls",
	ocop: "occls",
	oop: "ocls",
	pop: "pcls",
	rcop: "rccls",
	rccop: "rcccls",
	ricop: "riccls",
	rstop: "rstcls",
	rtop: "rtcls",
	sbop: "sbcls",
	stop: "stcls",
	tbop: "tbcls",
	top: "tcls",
	tkop: "tkcls",
	wop: "wcls",
  pcop: "pccls",

  barop: "barcls",
	capop: "capcls",
	divop: "divcls",
	imgcop: "imgccls",
	imgop: "imgcls",
  inputop: "inputcls",
  loadop: "loadcls",
	subtop: "subtcls",
	textop: "textcls",
}
const mapk2cls = {
 
	avatarStyle: "acls",
	backgroundImageStyle: "gbicls",
	badgeStyle: "badgecls",
	buttonStyle: "btncls",
	containerStyle: "ccls",
	contentContainerStyle: "cccls",
	disabledSelectedStyle: "dscls",
	disabledSelectedTextStyle: "dstcls",
	disabledStyle: "dcls",
	disabledTitleStyle: "dtcls",
	errorStyle: "ecls",
	featuredSubtitleStyle: "fstcls",
	featuredTitleStyle: "ftcls",
	fontStyle: "fcls",
	iconContainerStyle: "iccls",
	iconStyle: "icls",
	imageWrapperStyle: "iwcls",
	innerBorderStyle: "ibcls",
	inputContainerStyle: "iccls",
	labelStyle: "lcls",
	leftContainerStyle: "lccls",
	leftIconContainerStyle: "liccls",
	overlayContainerStyle: "occls",
	overlayStyle: "ocls",
	placeholderStyle: "pcls",
	rightContainerStyle: "rccls",
	rightContentContainerStyle: "rcccls",
	rightIconContainerStyle: "riccls",
	rightSubtitleStyle: "rstcls",
	rightTitleStyle: "rtcls",
	selectedButtonStyle: "sbcls",
	selectedTextStyle: "stcls",
	thumbStyle: "tbcls",
	titleStyle: "tcls",
	trackStyle: "tkcls",
	wrapperStyle: "wcls",
  PlaceholderContent: "pccls",

  barStyle: "barcls",
	captionStyle: "capcls",
	dividerStyle: "divcls",
	imageContainerStyle: "imgccls",
	imageStyle: "imgcls",
  inputStyle: "inputcls",
  loadingStyle: "loadcls",
	subtitleStyle: "subtcls",
	textStyle: "textcls",
  };
  

const mapcls2k = {
  acls: "avatarStyle",
	gbicls: "backgroundImageStyle",
	badgecls: "badgeStyle",
	btncls: "buttonStyle",
	ccls: "containerStyle",
	cccls: "contentContainerStyle",
	dscls: "disabledSelectedStyle",
	dstcls: "disabledSelectedTextStyle",
	dcls: "disabledStyle",
	dtcls: "disabledTitleStyle",
	ecls: "errorStyle",
	fstcls: "featuredSubtitleStyle",
	ftcls: "featuredTitleStyle",
	fcls: "fontStyle",
	iccls: "iconContainerStyle",
	icls: "iconStyle",
	iwcls: "imageWrapperStyle",
	ibcls: "innerBorderStyle",
	iccls: "inputContainerStyle",
	lcls: "labelStyle",
	lccls: "leftContainerStyle",
	liccls: "leftIconContainerStyle",
	occls: "overlayContainerStyle",
	ocls: "overlayStyle",
	pcls: "placeholderStyle",
	rccls: "rightContainerStyle",
	rcccls: "rightContentContainerStyle",
	riccls: "rightIconContainerStyle",
	rstcls: "rightSubtitleStyle",
	rtcls: "rightTitleStyle",
	sbcls: "selectedButtonStyle",
	stcls: "selectedTextStyle",
	tbcls: "thumbStyle",
	tcls: "titleStyle",
	tkcls: "trackStyle",
	wcls: "wrapperStyle",
  pccls: "PlaceholderContent",

  barcls: "barStyle",
	capcls: "captionStyle",
	divcls: "dividerStyle",
	imgccls: "imageContainerStyle",
	imgcls: "imageStyle",
  inputcls: "inputStyle",
  loadcls: "loadingStyle",
	subtcls: "subtitleStyle",
	textcls: "textStyle",
}
const SC = new StyleConv()
export{
  SC,
}