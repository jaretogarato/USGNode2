import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import RedeemForm from './partials/RedeemForm';
import WalletBalance from './partials/WalletBalance';
import Fade from 'react-reveal/Fade';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
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

class Redeem extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
           
            <WalletBalance title='Redeem USG' />
          </Container>
        </HeroHeader>
        <Container>
           <RedeemForm />
        </Container>
        {/* <SubmitForm /> */}
       
        <Footer />
      </Container>
    );
  }
}

export default Redeem;
