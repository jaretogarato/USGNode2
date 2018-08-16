import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import WalletForm from './partials/WalletForm';
import WalletBalance from './partials/WalletBalance';
import Fade from 'react-reveal/Fade';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import Img from './partials/Img';
import USGoldToken from '../assets/images/usg-token.png';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, 
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';

class Wallet extends Component {
    
 
  render() {
   
    
    
    
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <WalletBalance title='USG Wallet' />
          </Container>
        </HeroHeader>

        <Container>
          <WalletForm />
        </Container>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                &nbsp;
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Wallet;
