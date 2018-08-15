import React, {Component} from 'react';

export default class Img extends Component {
  render() {
    let {mode, src, height, width, style, top, marginTop, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || 100,
      width: width || 100,
      marginTop: marginTop || 0,
      top: top || 0,
      backgroundColor: 'transparent'
    };

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    };

    return <div {...props} style={{...defaults, ...style, ...important}} />
  }
}
