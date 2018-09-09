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
          <OpenH3>
            US Gold Currency Token Redeption
          </OpenH3>
          {/* <OpenP>
            This is easy.
          </OpenP> */}
          <OpenP>
            Just enter the quantity you wish to redeem, and your full shipping address with your name and / or your company name in the USA.
          </OpenP>
          <OpenP>
            If you are redeeming from outside of the USA, please call 1-800-673-5800 and one of our customer service representatives will help you.
          </OpenP>
        </Container>
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
