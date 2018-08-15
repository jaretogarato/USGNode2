import React from 'react';
import { Segment, Image, Container, Grid, Icon, List } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
import '../../css/inlineStyles.js';
// import LogoMed from '../../assets/images/ims-logo-med.png';

class VideoChrisSF extends React.Component {
  shouldComponentUpdate() {
   return false;
  }
  render() {
    return (
      <div>
        <iframe src="https://player.vimeo.com/video/261211688" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    )
  }
}

export default VideoChrisSF;
