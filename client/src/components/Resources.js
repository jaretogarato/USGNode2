import React, { Component } from 'react';
import { Header, Container, Grid, Card, Image } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';
import LogoMedium from '../assets/images/logo-medium.png';
import LogoShapeshift from '../assets/images/logo-shapeshift.png';
import LogoCoinbase from '../assets/images/logo-coinbase.png';
import LogoUSMint from '../assets/images/logo-usmint.png';
import LogoBittrex from '../assets/images/logo-bittrex.png';
import LogoBinance from '../assets/images/logo-binance.png';

import MainLinks from './partials/MainLinks';
import Footer from './partials/Footer';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad,
  HrOrange,
  USGButton,
} from '../css/styledComponents';
import Fade from 'react-reveal/Fade';
import Img from './partials/Img';

class Resources extends Component {
  render() {
    return (
      <Container fluid id={0}>

        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  US Gold Resources
                </HhH1>
                <HhH2>
                  Just about everything you need for success in the world of cryptocurrency.
                </HhH2>
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
              We've found that sometimes knowing where to look makes all the difference.
            </OpenH3>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#ddd' minHeight='800px' id={3}>
          <Container>
            <Grid stackable padded centered>
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <Fade bottom>
                    <Card>
                      <Image src={LogoShapeshift} />
                      <Card.Content>
                        <Card.Header>Conversion</Card.Header>
                        <Card.Meta>
                          <a href="https://shapeshift.io/#/coins" target="_blank" rel="noopener noreferrer">
                            shapeshift.io
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Shapeshift is the go-to site when you want to convert your other forms of cryptocurrency to Ethereum. <br /><br />

                          It's fast, it's easy, the rates are reasonable, and they support an impressive slew of cryptocurrencies.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={200}>
                    <Card>
                      <Image src={LogoCoinbase} />
                      <Card.Content>
                        <Card.Header>Exchange</Card.Header>
                        <Card.Meta>
                          <a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">
                            coinbase.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          A solid exchange for Bitcoin, Ethereum, and Litecoin. Always on the right side of U.S. regulations, and their cryptocurrencies are FDIC insured.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={400}>
                    <Card>
                      <Image src={LogoMedium} />
                      <Card.Content>
                        <Card.Header>Articles & Info</Card.Header>
                        <Card.Meta>
                          <a href="https://medium.com/topic/cryptocurrency" target="_blank" rel="noopener noreferrer">
                            medium.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          When you're ready for a deep dive...<br /><br />
                          Medium has a huge library of great articles, it's updated frequently, and there's an entire channel dedicated to blockchain currencies.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns='equal'>
                <Grid.Column>
                  <Fade bottom>
                    <Card>
                      <Image src={LogoBittrex} />
                      <Card.Content>
                        <Card.Header>Exchange</Card.Header>
                        <Card.Meta>
                          <a href="https://www.bittrex.com/" target="_blank" rel="noopener noreferrer">
                            bittrex
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          A simply massive crypto exchange with a wide array of currencies, and a low percentage fee per transaction.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={200}>
                    <Card>
                      <Image src={LogoUSMint} />
                      <Card.Content>
                        <Card.Header>The US Mint</Card.Header>
                        <Card.Meta>
                          <a href="https://catalog.usmint.gov/coins/gold-coins/" target="_blank" rel="noopener noreferrer">
                            usmint.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          The authority to which US Gold Currency happily defers. The link above shows the price set by the Mint for our blockchain currency. Changing very infrequently, this creates the stability in our stable value token.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={400}>
                    <Card>
                      <Image src={LogoBinance} />
                      <Card.Content>
                        <Card.Header>Exchange</Card.Header>
                        <Card.Meta>
                          <a href="https://www.binance.com/">
                            binance.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          On it's way to becoming the biggest crypto exchange worldwide for trading altcoins. A good place to look for many of the ICOs.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <Grid padded stackable>
              <Grid.Row columns='equal'>
                <Grid.Column textAlign='center'>
                  <Fade bottom>
                    <BorderedDiv>
                      <BorderedDivBody>
                        <Img src={LogoShapeshift} width={200} height={150} mode='fill' />
                      </BorderedDivBody>
                      <BorderedDivHead>
                        Crypto Conversion
                      </BorderedDivHead>
                      <BorderedDivBody>
                        Shapeshift is the go-to site when you want to convert your other forms of cryptocurrency to Ethereum. <br /><br />

                        It's fast, it's easy, the rates are reasonable, and they support an impressive slew of cryptocurrencies.
                      </BorderedDivBody>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Fade bottom delay={200}>
                    <BorderedDiv>
                      <BorderedDivBody>
                        <Img src={LogoCoinbase} width={200} height={150} mode='fill' />
                      </BorderedDivBody>
                      <BorderedDivHead>
                        Exchange
                      </BorderedDivHead>
                      <BorderedDivBody>
                        A solid exchange for Bitcoin, Ethereum, and Litecoin. Always on the right side of U.S. regulations, and their cryptocurrencies are FDIC insured.
                      </BorderedDivBody>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Fade bottom delay={400}>
                    <BorderedDiv>
                      <BorderedDivBody>
                        <Img src={IconPerfectExit} width={120} height={77} mode='fill' />
                      </BorderedDivBody>
                      <BorderedDivHead>
                        100% Perfect Exit
                      </BorderedDivHead>
                      <BorderedDivBody>
                        USG tokens are always redeemable for physical 1 oz American Gold Eagle coins:<br /><br />
                        Plan your hedge play or exit from cryptocurrencies that aren't asset-backed.
                      </BorderedDivBody>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid> */}
          </Container>
        </FullWidthDiv>

        {/* <MainLinks /> */}
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

export default Resources;
