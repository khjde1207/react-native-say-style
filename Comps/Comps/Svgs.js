import React, {Component} from 'react';
import Logo from '../../Res/Svg/Logo'

const SvgList = {Logo,}

export default  class  extends Component {
  fnRef = (ref)=>this.comp = ref;

  render(){
    var SvgObj = SvgList[this.props.name]
    return <SvgObj  ref={this.fnRef} {...this.props} >{this.props.children}</SvgObj>;  

  }
}
