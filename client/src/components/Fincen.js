import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
// import USGoldToken from '../assets/images/us-gold-token-yellow-blue.png';
import USGoldToken from '../assets/images/usg-token.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';

import CubeGold from '../assets/images/cube-gold.png';
import ChartBitcoin from '../assets/images/chart-bitcoin.jpg';
import ChartEthereum from '../assets/images/chart-ethereum.jpg';
import ChartUSGold from '../assets/images/chart-usgold.jpg';
import GoldOnGradient from '../assets/images/gold-bar-on-gradient.png';
import CubeColoredB from '../assets/images/cube-colored-b.png';
import BuyKeepRedeem from '../assets/images/buy-keep-redeem-bg-wide.jpg';
import PaymentsAccepted from '../assets/images/payments-accepted.png';

// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
// import { inlineStyles } from '../css/inlineStyles';
import '../css/mailchimp.css';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad,
  HrOrange, Img2,
  USGButton,
} from '../css/styledComponents';

// https://www.react-reveal.com/examples/
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';
// import Bounce from 'react-reveal/Bounce';
// import Slide from 'react-reveal/Slide';
// import Reveal from 'react-reveal/Reveal'; // custom css
// import Flash from 'react-reveal/Flash';
// import HeadShake from 'react-reveal/HeadShake';
// import Pulse from 'react-reveal/Pulse';

// import { Fade4 } from '../css/styledFadeDiv';
// import { EthereumChart } from './partials/EthereumChart';


class Finc extends Component {
  // USGInUSD in state is master value for component - don't let the app modify it
  // state = { USGInUSD: 1627.50, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  render() {
    return (
      <Container fluid>

        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH2>
                  US Gold Currency &
                </HhH2>
                <HhH1>
                  FinCEN
                </HhH1>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9' id={1}>
          <Container>
            <OpenH3>
              US Gold Currency is registered as Money Services Businesses (MSBs) pursuant to the Bank Secrecy Act (BSA) regulations at 31 CFR 1022.380(a)-(f), administered by the Financial Crimes Enforcement Network (FinCEN).
            </OpenH3>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#e9e9e9' id={4}>
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={6}>
                  <h1>&nbsp;</h1>
                  <Fade bottom>
                    <Img2 src={CubeGold} width='100%' />
                  </Fade>
                </Grid.Column>
                <Grid.Column width={10}>
                  <OpenH3 textAlign='left'>
                    You're Secure with US Gold Currency
                  </OpenH3>
                  <Grid>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>License Status</OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          US Gold Currency LLC maintains a State of Wyoming Money Transmitter License.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>Transfer Safely</OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          When dealing with monetary transfer matters, be sure to do your research about the company involved. Start by searching the data base of the United States Department of The Treasury – <a href="https://www.fincen.gov/msb-state-selector" target="_blank" rel="nofollow noreferrer"> Financial Crime Enforcement Network</a>.
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>



        <Footer />
      </Container>
    );
  }
}

const styles = {
  image50tall: {
    width: 'auto',
    height: '50px',
  },
  noPadOrMargin: {
    padding: 0,
    margin: 0,
  },
  goldBorder: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#f8da1d',
  },
  pushedDown: {
    position: 'relative',
    top: '350px',
    // marginTop: '400px',
  },
  padTop: {
    paddingTop: '30px',
  },
  fullWidth: {
    width: '100%',
  },
}

export default Finc;
