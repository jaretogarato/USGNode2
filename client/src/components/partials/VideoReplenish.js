import React from 'react';
import { Segment, Image, Container, Grid, Icon, List } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
import '../../css/inlineStyles.js';
// import LogoMed from '../../assets/images/ims-logo-med.png';

class VideoReplenish extends React.Component {
  shouldComponentUpdate() {
   return false;
  }
  render() {
    return (
      <div>
        <iframe src="https://player.vimeo.com/video/261052748" width="320" height="569" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
        {/* <p><a href="https://vimeo.com/261052748">Replenishment Demo</a> from <a href="https://vimeo.com/user83085846">Crypto Cowboy</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
      </div>
    )
  }
}

export default VideoReplenish;
