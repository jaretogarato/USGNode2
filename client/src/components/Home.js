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
import PaymentsAccepted from '../assets/images/payments-accepted.png';
import FincenLogoBlack from '../assets/images/fincen-logo-black.png';
import BBBGray from '../assets/images/bbb-gray-400x.png';
import FincenGray from '../assets/images/fincen-gray-400x.png';
import WyomingGray from '../assets/images/wyoming-seal-gray-400x.png';
import GoldBarsHoriz from '../assets/images/gold-bars-horiz.jpg';
import CubesTwo from '../assets/images/cubes-gold-02.png';
import CookieConsent from "react-cookie-consent";
import EthereumLogo from '../assets/images/ethereum-logo.jpg';
// import USGLogoSymbol from '../assets/images/us-gold-currency-logo-symbol.png';
import USGSingleCube from '../assets/images/usg-single-cube.png';
import USGLogoSymbol from '../assets/images/us-gold-currency-logo-symbol.png';

// USGInUSD in is master value for entire application
import {USGInUSD} from './partials/USGInUSD';

// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
// import { inlineStyles } from '../css/inlineStyles';
import '../css/react-reveal.css';
import '../css/mailchimp.css';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, HhH3,
  Img2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenH5, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenUl, OpenLi,
  BorderedDiv, BorderedDivHead, BorderedDivBody, BorderedDivInnerWrapper,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange, HrWhite,
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


class Home extends Component {

  state = { USGInUSD: 0.0, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  componentDidMount() {
    this.getEthereumPrice();
    console.log('usginusd:');
    console.log(USGInUSD);
    this.setState({ USGInUSD: USGInUSD });
  }

  getEthereumPrice = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/1027/?convert=USD')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let ep = data.data.quotes.USD.price;
        let e24ch = data.data.quotes.USD.percent_change_24h.toFixed(2);
        let usgeth = (USGInUSD / ep).toFixed(7);
        console.log('usgeth');
        console.log(usgeth);
        this.setState({
          ethereumPrice: ep,
          ethereum24hrChange: e24ch,
          USGInEthereum: usgeth,
        });
      });
  };

  render() {
    return (
      <Container fluid>
        <Container>
          <CookieConsent
            location="top"
            buttonText="Yes, I agree"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            <Container>
              We use cookies on this site to enhance your user experience.<br />
              <span style={{ fontSize: "10px" }}>
              By clicking any link on this site you give your consent for us to use cookies.
              </span>
              {" "}
            </Container>

          </CookieConsent>
        </Container>

        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  US Gold Currency
                </HhH1>
                <HhH3>
                  The convenience of digital money. <br />
                  The security of the blockchain.<br />
                  The stability of gold.
                </HhH3>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9'>
          <Container>
            <OpenH3>
              USG tokens are direct representations of American Eagle one ounce gold coins, minted by the United States of America — in cryptographic form.
            </OpenH3>
            <Grid stackable>
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <FlexRowContainer>
                    <div>
                      <Img src={USGSingleCube} width={127} height={110} mode='fit' alt='usg single cube' />
                    </div>
                    <OpenP>
                      Each USG token is backed by an American Eagle one ounce gold coin, minted by the United States Mint, and may be redeemed any time for the physical coin.
                    </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
                <Grid.Column>
                  <FlexRowContainer>
                    <div>
                      <Img src={USGLogoSymbol} width={127} height={118} mode='fit' alt="US Gold Currency Symbol" />
                    </div>

                    <OpenP>
                      Our blockchain currency is a utility token with a <em>stable-value</em> by design. It’s a true virtual currency, ideal for global payment systems and a safe haven coin from crypto market volatility.
                    </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column rows={2}>
                  <FlexRowContainer>
                    <OpenP>
                      It’s the perfect currency whether you plan to hold it, spend it, or exchange it.
                    </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={2}>

          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={7}>

                </Grid.Column>
                <Grid.Column width={2}>
                  <OpenH5 testAlign='center'>
                    <Img src={USGoldToken} width={100} height={80} mode='fit' />
                  </OpenH5>
                </Grid.Column>
                <Grid.Column width={7}>

                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={styles.noPadOrMargin}>
                <Grid.Column width={6} />
                <Grid.Column width={4} style={styles.noPadOrMargin}>
                  <OpenH4>
                    Buy USG Tokens
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={6} />
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={3} verticalAlign='middle'>
                  <FlexRowContainer>
                    <div style={styles.fullWidth} >
                      <OpenPSmall>
                        CURRENT PRICE (IN <strong>ETH</strong>) </OpenPSmall>
                      <OpenPSmall>
                        {this.state.USGInEthereum} &nbsp;
                        {
                          (this.state.ethereum24hrChange > 0)
                          ? <OpenSpanGreen>
                              {this.state.ethereum24hrChange}%
                            </OpenSpanGreen>
                          : <OpenSpanRed>
                              {this.state.ethereum24hrChange}%
                            </OpenSpanRed>
                          }
                      </OpenPSmall>
                    </div>
                  </FlexRowContainer>
                </Grid.Column>

                <Grid.Column width={3} verticalAlign='middle'>
                  <OpenPSmall>
                    CURRENT PRICE (IN <strong>USD</strong>) <br />
                  </OpenPSmall>
                  <OpenPSmall>
                    ${this.state.USGInUSD.toFixed(2)}
                    <OpenSpanGreen>
                      &nbsp; STABLE
                    </OpenSpanGreen>
                  </OpenPSmall>
                </Grid.Column>

                <Grid.Column width={3} verticalAlign='middle'>
                  <FlexRowContainer>
                    <div style={styles.fullWidth} >
                      <OpenPSmall>
                        CURRENT SUPPLY (OF <strong>USG</strong>)<br />
                      </OpenPSmall>
                      <OpenPSmall>
                        1,000,000
                      </OpenPSmall>
                    </div>
                  </FlexRowContainer>
                </Grid.Column>

                <Grid.Column width={3}>
                  <OpenPSmall>
                    MAXIMUM SUPPLY (OF <b>USG</b>)<br />
                  </OpenPSmall>
                  <OpenPSmall>
                    10,000,000
                  </OpenPSmall>
                </Grid.Column>

                <Grid.Column width={3}>
                  <OpenPSmall>
                    MAXIMUM VALUE (OF <b>USG</b>)<br />
                  </OpenPSmall>
                  <OpenPSmall>
                    $15,275,000,000
                  </OpenPSmall>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={7} />
                <Grid.Column verticalAlign='middle' width={2}>
                  <a href='/purchase'><USGButton>Buy</USGButton></a>
                </Grid.Column>
                <Grid.Column width={5} />
                <Grid.Column width={2} textAlign='right' style={styles.noPadOrMargin} only='tablet computer'>
                  <a href="http://www.opennetwork.io" target="_blank" rel="noopener noreferrer"><Img src={PoweredByOpenNetwork} width={120} height={29} mode='fit' /></a>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={MainPanelsBg} minHeight='850px' id={3}>
          <Container>
            <HoverCenterDivWrap top='0'>
              <Fade bottom delay={10}>
                <HoverCenterDiv
                  bgImage={CubesColored}
                  height='300px'
                  top='-165px'
                />
              </Fade>
            </HoverCenterDivWrap>
            <HoverCenterDivWrap top='200px'>
              <Fade bottom delay={300}>
                <HoverCenterDiv
                  bgImage={LinesColored}
                  height='300px'
                  top='-165px'
                />
              </Fade>
            </HoverCenterDivWrap>

            <Grid padded stackable style={styles.pushedDown}>
              <Grid.Row columns='equal' stretched style={styles.orangeBorder} >
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  {/* <Fade bottom className='fade-flex'> */}
                  <Fade bottom style={{...styles.fadeFlex}}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          <Img src={IconGoldBacked} width={120} height={77} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          100% Gold Coin-Backed
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <OpenP>
                            Each USG Token is backed by an American Eagle one ounce gold coin from the U.S. Mint, creating a unique, stable blockchain currency.
                          </OpenP>
                          <OpenUl>
                            <OpenLi>
                              Accurate blockchain ledger delivers security and transparency.
                            </OpenLi>
                            <OpenLi>
                              Blockchain currency provides instant access and convenience.
                            </OpenLi>
                            <OpenLi>
                              Real gold backing maintains unmatched stability.
                            </OpenLi>
                          </OpenUl>
                        </BorderedDivBody>
                    </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  <Fade bottom delay={200}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          <Img src={IconStableValue} width={120} height={77} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          100% Stable Value Token
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <div>
                            <OpenP>
                              Each USG Token is tied to an American Eagle one ounce gold coin, creating a unique, stable currency measured in gold — not dollars.
                            </OpenP>
                            <OpenUl>
                              <OpenLi>
                                Our tokens are equally matched to the United States Mint published price.
                              </OpenLi>
                              <OpenLi>
                                Our tokens are a perfect overnight safe-haven for cryptocurrency day traders.
                              </OpenLi>
                              <OpenLi>
                                Our tokens are the safe alternative to volatile market conditions.
                              </OpenLi>
                            </OpenUl>
                          </div>
                          {/* US Gold cryptocurrency tokens are tied to a fixed gold price:<br /><br />
                          • Hedge against volatile markets<br />
                          • The U.S. Mint sets the price<br />
                          • The alternative to Bitcoin<br /> */}
                        </BorderedDivBody>
                      </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  <Fade bottom delay={400}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          <Img src={IconPerfectExit} width={120} height={77} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          100% Perfect Currency
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <div>
                            <OpenP>
                              {/* USG Tokens may be redeemed any time for the physical American Eagle gold coins that they directly represent. */}
                              You may redeem your USG Tokens at any time for the physical American Eagle one ounce gold coins that they directly represent.
                            </OpenP>
                            <OpenUl>
                              <OpenLi>
                                American Eagle gold coins are real currency.
                              </OpenLi>
                              <OpenLi>
                                US Gold Currency tokens are also real currency.
                              </OpenLi>
                              <OpenLi>
                                Stable value tokens backed by gold: the ideal blockchain currency for everyday use.
                              </OpenLi>
                            </OpenUl>
                          </div>
                          {/* USG tokens are always redeemable for physical 1 oz American Gold Eagle coins:<br /><br />
                          Plan your hedge play or exit from cryptocurrencies that aren't asset-backed. */}
                        </BorderedDivBody>
                      </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <VerticalSpacer height='50px' /> */}
          </Container>
        </FullWidthBgDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#e9e9e9' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h1>&nbsp;</h1>
                  <Fade bottom>
                    <Img2 src={USGSingleCube} width='100%' />
                  </Fade>
                </Grid.Column>
                <Grid.Column width={11}>
                  <OpenH3 textAlign='left'>
                    Security is Paramount
                  </OpenH3>
                  <Grid stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>Physical Gold</OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          Every American Eagle one ounce gold coin backing a USG token is stored in a fully insured, secure vault, and audited annually by an independent third party auditing firm.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenH4 textAlign='left'>Blockchain</OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          USG tokens are issued and administered via smart contracts on Ethereum, a blockchain-based distributed computing platform. Providing immutable transparent transactions for safety and accuracy.
                          {/* USG tokens are based on industry-standard, military-grade blockchain encryption — a technology that has a proven track record and is trusted by countless banks and institutions around the world. */}
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <OpenP>
                          When your ether starts to feel too ... well, ethereal, come and experience the feeling of knowing your currency is backed by solid gold.
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={5}>
          <Container>
            <Grid padded>
              <Grid.Row>
                <Grid.Column>
                  <OpenH3>
                    {/* The Unmistakable Allure of Stability */}
                    The Power Of Stability
                  </OpenH3>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <OpenH4>
                    Bitcoin (BTC)
                  </OpenH4>
                  <HrOrange />
                    <p />
                    <Image src={ChartBitcoin} size='large' />
                </Grid.Column>
                <Grid.Column>
                  <OpenH4>
                    US Gold (USG)
                  </OpenH4>
                  <HrOrange />
                  <p />
                    <Image src={ChartUSGold} size='large' />
                </Grid.Column>
                <Grid.Column>
                  <OpenH4>
                    Ethereum (ETH)
                  </OpenH4>
                  <HrOrange />
                  <p />
                    <Image src={ChartEthereum} size='large' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <FullWidthDiv topColor='#63cdf6' bottomColor='#3c86a3' padTopAndBottom='20px' padLeftAndRight='15%'>
                    <OpenH5 color='#fff'>
                      These charts are provided to compare the volatility over time of leading cryptocurrencies to that of USG. If a picture is worth a thousand words, these charts tell all you need to know about the benefit of the stable value of our blockchain currency.
                    </OpenH5>
                  </FullWidthDiv>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={2} />
                <Grid.Column width={12} >
                  <OpenH4>
                    If you value the privacy, flexibility, and security of cryptocurrencies, but find yourself wanting real stability, USG tokens are the ones you want in your wallet.
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#efefef' id={6}>
          <DividerGrayGrad>
            <Segment basic>
              <Fade right delay={10}>
                <Img src={CubeColoredB} width={160} height={130} marginTop={50} />
              </Fade>
            </Segment>
          </DividerGrayGrad>
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <OpenH3 style={styles.padTopB} >
                    Solid Gold...
                  </OpenH3>
                  <HrOrange />
                  <Fade>
                    <Image src={GoldBarsHoriz} fluid />
                  </Fade>
                  <OpenH4>
                    We live in a rapidly changing world. But for a very long time, one thing has never changed: the use of Gold as a reliable store of value.<br /><br />
                  </OpenH4>
                  <OpenP>
                    US Gold Currency adds something to this already-solid mechanism: The market price for a USG token upon this website is always equal to the established market price for an American Eagle one ounce gold coin from the United States Mint.
                  </OpenP>
                  <OpenP>
                    From time to time, the value of a USG token may change, and in the open market exchanges, the value of USG tokens is set by the market condition.
                  </OpenP>
                  <OpenP>
                    United States Mint current price: ${this.state.USGInUSD.toFixed(2)} USD<br />
                    US Gold Currency current price: ${this.state.USGInUSD.toFixed(2)} USD
                  </OpenP>
                </Grid.Column>
                {/* <Grid.Column width={2} /> */}
                <Grid.Column width={8}>
                  <OpenH3 style={styles.padTopB}>
                    Solid Company.
                  </OpenH3>
                  <HrOrange />

                  <Grid stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <FullWidthDiv topColor='#ccc' bottomColor='#eee' padTopAndBottom='20px' padLeftAndRight='10%' height='350px'>
                          <OpenP>
                            <Image src={FincenGray} centered size='tiny' />
                            <br /><br />
                            <strong>Registered:</strong><br />
                            United States Treasury FinCEN – Financial Crimes Enforcement Network.
                          </OpenP>
                        </FullWidthDiv>
                      </Grid.Column>
                      <Grid.Column>
                        <FullWidthDiv topColor='#ccc' bottomColor='#eee' padTopAndBottom='20px' padLeftAndRight='10%' height='350px'>
                          <OpenP>
                            <Image src={WyomingGray} centered size='tiny' />
                            <br /><br />
                            <strong>Licensed:</strong><br />
                            State of Wyoming Money Transmitter
                          </OpenP>
                        </FullWidthDiv>
                      </Grid.Column>
                      <Grid.Column>
                        <FullWidthDiv topColor='#ccc' bottomColor='#eee' padTopAndBottom='20px' padLeftAndRight='10%' height='350px'>
                          <OpenP>
                            <Image src={BBBGray} centered size='tiny' />
                            <br /><br />
                            <strong>Accredited:</strong><br />
                            Better Business Bureau. BBB Rating A+
                          </OpenP>
                        </FullWidthDiv>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv minHeight='600px' id={7}>
          <Container>
            <OpenH3 style={styles.padTop}>
              Buy it, Spend it, Hold it, Sell it
            </OpenH3>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <OpenH4 textAlign='left'>
                    Easy To Buy
                  </OpenH4>
                  <HrOrange />
                  <OpenP textAlign='left'>
                    Purchasing USG tokens is easy. Here's where to start: <br />
                    <a href='/purchase'><USGButton>Buy</USGButton></a>
                  </OpenP>

                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH4 textAlign='left'>
                    Easy To Redeem
                  </OpenH4>
                  <HrOrange />
                  <OpenP textAlign='left'>
                    Once you have your USG tokens, you can do whatever you want with them: exchange them for other currencies, save them, trade them for goods and services - just like any currency.
                  </OpenP>
                  <OpenP textAlign='left'>
                    Redeeming USG tokens is easy: simply submit a redemption form, and transfer the tokens to the US Gold Currency Ethereum address. Your American Eagle one ounce gold coins are pulled from the gold vault, prepared for shipment, and sent to the verified physical address within your account profile.
                  </OpenP>
                  <OpenP textAlign='left'>
                    All physical gold coins are shipped through United Parcel Service (UPS) – Parcel Pro, and will require a government issued identification with a matching adult signature upon delivery.
                  </OpenP>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={7} textAlign='right' style={styles.noPadOrMargin} only='tablet computer'>
                  <a href="http://www.opennetwork.io" target="_blank" rel="noopener noreferrer"><Img src={PoweredByOpenNetwork} width={120} height={29} mode='fit' /></a>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv>
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
    transform: 'translateY(300px)',
    paddingBottom: '300px',
  },
  padTop: {
    paddingTop: '30px',
  },
  padTopB: {
    paddingTop: '70px',
  },
  fullWidth: {
    width: '100%',
  },
  orangeBorder: {
    borderColor: 'orange',
    borderWidth: '0',
    borderStyle: 'solid',
  },
  fadeFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Home;
