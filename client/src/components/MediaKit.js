import React, { Component } from 'react';
import { Header, Container, Grid, Icon, Image } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import CubesFiveGold from '../assets/images/cubes-five-gold.png';
import GoldCoinBgWide from '../assets/images/gold-coin-bg-wide-2.jpg';
import SineWaves from '../assets/images/sine-waves.png';
import VaultBlue from '../assets/images/vault-color-med.png';
import RowOfBlocks from '../assets/images/row-of-blocks.png';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import Fade from 'react-reveal/Fade';
import USGLogoSymbol from '../assets/images/us-gold-currency-logo-symbol.png';
import USGLogo from '../assets/images/us-gold-currency-logo-vert.png';
import USGLogoHz from '../assets/images/usg-currency-logo-horizontal.png';
import USGToken from '../assets/images/usg-token.png';

import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange, Img2,
  USGButton,
} from '../css/styledComponents';
import Img from './partials/Img';

class MediaKit extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  Media
                </HhH1>
                <HhH2>
                  Kit
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={1}>
          <Container>
            <OpenH3>
              If you have a story to tell about US Gold Currency, all we can say is thank you, and that we want to help you with what you need to tell that story. Here are some logo assets you can use — and please let us know if there's anything else you need from us.
            </OpenH3>

          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#eee' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGLogoSymbol} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={10}>
                  <OpenH3 textAlign='left'>
                    US Gold Currency Logo Symbol
                  </OpenH3>
                  <OpenP textAlign='left'>
                    The US Gold Currency symbol standing alone represents stability and interoperabiity.
                  </OpenP>
                  <OpenP textAlign="right">
                    <a href="../assets/images/us-gold-currency-logo-symbol.png" download>download</a>
                  </OpenP>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGLogoHz} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>US Gold Currency Logo Horizontal</OpenH3>
                  <OpenP textAlign='left'>
                    Complete logo for use where vertical space is at a premium.
                  </OpenP>
                  <OpenP textAlign="right">
                    <a href="../assets/images/usg-currency-logo-horizontal.png" download>download</a>
                  </OpenP>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGLogo} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>US Gold Logo Centered</OpenH3>
                  <OpenP textAlign='left'>
                    Complete logo for use in most applications.
                  </OpenP>
                  <OpenP textAlign="right">
                    <a href="../assets/images/us-gold-currency-logo-vert.png" download>download</a>
                  </OpenP>

                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGLogoSymbol} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>One Color Applications</OpenH3>
                  <OpenP textAlign='left'>
                  Te eum quot illum molestiae, reque nusquam ad nam, at vim mentitum eligendi. Ei utroque scribentur ius, novum fierent in per, ad offendit quaestio pri.
                </OpenP>
                </Grid.Column>
              </Grid.Row> */}
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGToken} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>Fully Articulated Coin Logo</OpenH3>
                  <OpenP textAlign='left'>
                    For use when representing the USG token.
                  </OpenP>
                  <OpenP textAlign="right">
                    <a href="../assets/images/usg-token.png" download>download</a>
                  </OpenP>
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGLogoSymbol} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>Backgrounds</OpenH3>

Habeo torquatos per cu. Sea scripta tibique pertinacia at, sed te tritani fierent recteque, no his modo zril legendos.
                </Grid.Column>
              </Grid.Row> */}
              {/* <Grid.Row>
                <Grid.Column width={8}>
                  abc
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>Colors</OpenH3>


Habeo torquatos per cu. Sea scripta tibique pertinacia at, sed te tritani fierent recteque, no
                </Grid.Column>
              </Grid.Row> */}

            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#ebebeb' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 textAlign='left'>It's Stable</OpenH3>
                  <HrOrange />
                  <Grid stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          Is the value of your cryptocurrency wallet the same right now as it was an hour ago? The odds are, it isn't. While the gains are always welcomed, the losses never are.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          Create some stability with USG tokens, which are always tied to the current price set by the U.S. Mint for a gold American Eagle one ounce coin.
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  &nbsp;
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Img src={RowOfBlocks} width='100%' height={200} mode='fill' />
        </FullWidthDiv>

        <FullWidthDiv topColor='#222' bottomColor='#000' height={400}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH3 color='white'>
                    It's Flexible
                  </OpenH3>
                  <VerticalSpacer height={50} />
                  <OpenH4 color='white'>
                    Ready to buy USG tokens? We make it easy by accepting Ethereum for payment. Don't have Ethereum? No problem -- just go to <a href='https://shapeshift.io' >ShapeShift</a> to easily convert your crypto, and you're in business!
                  </OpenH4>
                  <OpenH4 color='white'>
                    Ready to redeem USG tokens? We give you the added benefit of the option to redeem your USG tokens with us directly at any time for gold American Eagle one ounce coins, any time, at a 1-to-1 token-to-coin ratio.
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={1} />
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
  padTop: {
    paddingTop: '30px',
  },
}

export default MediaKit;
