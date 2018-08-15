import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
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

class Token extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  The USG Token
                </HhH1>
                <HhH2>
                  As Solid As The Gold That Backs It.
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
              We are proud to introduce the first cryptocurrency of its kind, launching in the summer of 2018: USG. It's a new cryptocurrency which functions as a true currency — one which is stable and backed by gold, providing a unique set of benefits.
            </OpenH3>

          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#eee' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <h1>&nbsp;</h1>
                  <Fade bottom>
                    {/* <Img src={VaultBlue} width={400} height={404} marginTop='-230px' top='230px' /> */}
                    {/* <Img2 src={VaultBlue} width='60%' minHeight='350px' marginTop='-230px' top='230px' /> */}
                    <Img2 src={VaultBlue} width='60%' minHeight='350px' />
                  </Fade>
                </Grid.Column>
                <Grid.Column width={10}>
                  <OpenH3 textAlign='left'>It's Dependable</OpenH3>
                  <HrOrange />
                  <OpenH4 textAlign='left'>
                    Because every USG token is backed by a gold American Eagle one ounce coin, you know that the value in your token is tangible and real.
                  </OpenH4>
                  <OpenH4 textAlign='left'>
                    Security is of the highest priority to us: all of our gold is secured in state-of-the-art vaults and fully insured.
                  </OpenH4>
                </Grid.Column>
              </Grid.Row>
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
                    Ready to buy USG tokens? We make it easy by accepting Ethereum for payment. Don't have Ethereum? No problem -- just go to ShapeShift to easily convert your crypto, and you're in business!
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

export default Token;
