import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
import USGoldToken from '../assets/images/usg-token.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';
import MainPanelsBg from '../assets/images/main-panels-bg.jpg';
import CubesColored from '../assets/images/cubes-colored.png';
import LinesColored from '../assets/images/lines-three-colored.png';
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


class USMint extends Component {
  // USGInUSD in state is master value for component - don't let the app modify it
  state = { USGInUSD: 1627.50, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH2>
                  US Gold Currency &amp;
                </HhH2>
                <HhH1>
                  The US Mint
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
              The market price of the USG Token is equal to the posted price of a gold American Eagle one ounce coin upon the United States Mint online web portal at <a href="https://catalog.usmint.gov/american-eagle-2016-one-ounce-gold-proof-coin-16EB.html?cgid=gold-coins" target="_blank" rel="nofollow noreferrer">usmint.gov</a>.
            </OpenH3>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#e9e9e9' id={4}>
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={6}>
                  <h1>&nbsp;</h1>
                  {/* <Fade bottom>
                    <Img src={CubeGold} width={300} height={258} />
                  </Fade> */}
                  <Fade bottom>
                    <Img2 src={CubeGold} width='100%' />
                  </Fade>
                </Grid.Column>
                <Grid.Column width={10}>
                  <OpenH3 textAlign='left'>
                    US Gold Currency and the U.S. Mint
                  </OpenH3>
                  <Grid>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>Periodic Updates</OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          {/* The United States Mint may adjust the sale price of their gold American Eagle one ounce coins based upon the global gold market condition. The posted price may be updated every Tuesday. */}
                          The United States Mint updates the sale price for the gold American Eagle one ounce coins infrequently; however, on any Tuesday the price may be updated, and on such occasions US Gold Currency will update the price of our USG token to match the new pricing as set by the Mint.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>Blockchain Currency</OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          US Gold Currency is the issuer of the blockchain currency token – “USG”. As a direct representation of a gold American Eagle one ounce coin – a blockchain currency token, issued and administered via smart contracts on Ethereum, a blockchain-based distributed computing platform.
                        </OpenP>
                        <OpenP textAlign='left'>
                          USG Tokens serve as a true currency—in cryptographic form. They are 100% backed by gold American Eagle one ounce coins which are unique in that they are <em>monetary</em> gold currency coins, minted by the United States Mint.
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

export default USMint;
