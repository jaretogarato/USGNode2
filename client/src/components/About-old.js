import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import CubesFiveGold from '../assets/images/cubes-five-gold.png';
import GoldCoinBgWide from '../assets/images/gold-coin-bg-wide-2.jpg';
import CubesGold02 from '../assets/images/cubes-gold-02.png';
import SineWaves from '../assets/images/sine-waves.png';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import Fade from 'react-reveal/Fade';
// USGInUSD in is master value for entire application
import {USGInUSD} from './partials/USGInUSD';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenH5,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';
import Img from './partials/Img';

class About extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  About US
                </HhH1>
                <HhH2>
                  Allow us to introduce ourselves.
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
              {/* US Gold Currency is committed to providing a safe, stable-value cryptocurrency with all of the benefits of the best digital currencies, but without the peaks and valleys in value experienced by many cryptocurrencies. */}
              With over 30 years of experience in monetary gold, US Gold in 2016 expanded into the cryptocurrency sector with the US Gold Currency brand, and created the US Gold blockchain currency token <b>USG</b>.
            </OpenH3>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#ddd' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={9}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <OpenH3 textAlign='left'>Here For A Reason</OpenH3>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          Today the USG token – designed for the emerging cryptocurrency sector, has addressed the fundamental question: <strong>How do you create a stable-value blockchain currency that’s actually supported by a hard asset currency?</strong>
                        </OpenP>
                        <OpenP textAlign='left'>
                          A blockchain currency backed by gold was the obvious answer, and US Gold Currency the obvious company to implement it.
                        </OpenP>
                        <OpenP textAlign='left'>
                          Although an independent company, US Gold Currency relies on decades of operational experience through US Gold – founded in 1980. The entire staff is dedicated to providing our expertise to this global currency opportunity and will remain committed to providing superior customer service and integration of the USG token to the crypto market as a safe, stable, convenient and redeemable alternative to the price volatility often found in emerging markets.
                          Our focus is on creating the support mechanism for global payment systems around the world providing economic benefit to the underserved as well as the investments firms seeking the required stability that only comes from a Hard-Asset blockchain platform.
                        </OpenP>
                        <OpenP textAlign='left'>
                          We are stewards and students of business trends, technology, and investing.
                        </OpenP>

                      </Grid.Column>
                    </Grid.Row>

                  </Grid>
                </Grid.Column>
                <Grid.Column width={7}>
                  <h1>&nbsp;</h1>
                  <Fade bottom>
                    {/* <Img src={CubesFiveGold} width={400} height={404} marginTop='-130px' /> */}
                    <Img src={CubesGold02} width={300} height={339} marginTop='-30px' />
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided>
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <OpenH5 textAlign='center'>
                    USG tokens are a gold coin-backed blockchain cryptocurrency issued and administered via smart contracts on Ethereum, a blockchain-based distributed computing platform.
                  </OpenH5>
                  <OpenH5 textAlign='center'>
                    USG tokens are a direct representation of gold American Eagle one ounce coins issued by the United States Mint.
                  </OpenH5>
                </Grid.Column>
                <Grid.Column>
                  <OpenH5 textAlign='center'>
                    USG tokens may be redeemed at any time at a 1-to-1 token-to-coin ratio.
                  </OpenH5>
                  {/* <OpenH5 textAlign='center'>
                    US Gold Currency LLC is located on the "Crypto Plain" in Wyoming.
                  </OpenH5> */}
                  <OpenH5 textAlign='center'>
                    The State of Wyoming is the leader in transformational legislation providing an unparalleled business landscape to cryptocurrency and crypto-commodity infrastructure companies within these emerging sectors.
                  </OpenH5>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={GoldCoinBgWide} height={400}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH3 color='white'>
                    Dependably Dependable
                  </OpenH3>
                  <VerticalSpacer height={50} />
                  <OpenH4 color='white'>
                    The market price for a USG token is always equal to the established market price for an American Eagle one ounce gold coin from the United States Mint. <br /><br />

                    From time to time, the value of a USG token may change, and in the open market exchanges, the value of USG tokens is set by the market condition. <br /><br />

                    United States Mint current price: ${USGInUSD.toFixed(2)} USD<br />
                    US Gold Currency current price: ${USGInUSD.toFixed(2)} USD
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 textAlign='left'>Fantastic Flexibility</OpenH3>
                  <HrOrange />
                  <Grid padded stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          {/* We understand the frustration you feel when you want to exchange or cash out of your cryptocurrency and can't find an easy way to do it. That's why we give you the unique option of exchanging your USG tokens for the physical U.S. Gold Eagle coins by which the tokens are backed. */}
                          Converting your cryptocurrency to fiat currency can be difficult and frustrating, and the available options may not seem to be as easy as they should. We get it. That’s why US Gold Currency gives you the unique option to exchange your USG tokens for the physical American Eagle one ounce gold coins which back them.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          US Gold Currency is designed to provide you easy and timely access to the gold asset backing our token should you decide to redeem your USG tokens instead of trading on one of the many exchanges in the cryptocurrency sector.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          US Gold Currency provides insured shipping, via UPS Parcel Pro. As you probably know, it's easy to exchange gold for cash — what you do with your physical American Eagle one ounce gold coins is up to you.
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Img src={SineWaves} width='100%' height={200} mode='fill' />
        </FullWidthDiv>

        <FullWidthDiv topColor='#efefef' bottomColor='#cfcfcf' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 textAlign='left'>A Bit About Us</OpenH3>

                  <Grid padded stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>
                          Location &amp; Credentials
                        </OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          US Gold Currency LLC is located on the "Crypto Plain" in Cheyenne Wyoming USA, and is registered with the United States Treasury FinCEN – Financial Crimes Enforcement Network. We maintain a State of Wyoming Money Transmitter License, and have an A+ Rating from the Better Business Bureau.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>
                          The Token &amp; Benefits
                        </OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          The USG Token is a gold coin-backed blockchain currency token (cryptocurrency) issued and administered via smart contracts on Ethereum, a blockchain-based distributed computing platform.
                        </OpenP>
                        <OpenP textAlign='left'>
                          Each USG token is a direct representation of an American Eagle one ounce gold coin, issued by the United State Mint, and held in vault storage reserves by US Gold Currency.
                        </OpenP>
                        <OpenP textAlign='left'>
                          Additionally, each USG Token may be redeemed at any time at a 1-to-1 token-to-coin ratio!
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
  padTop: {
    paddingTop: '30px',
  },
}

export default About;
