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
  HrOrange,
  USGButton,
} from '../css/styledComponents';

// https://www.react-reveal.com/examples/
import Fade from 'react-reveal/Fade';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

const Example = () => (
  <Accordion>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>1. USE OF THIS SITE</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign="left">
          This website and its contents, including photography and other USGC-owned assets, (the “Content”) are intended for customers of USGC. You may not use this website or the Content for any purpose not related to your business with USGC. You are specifically prohibited from: (a) downloading, copying, or re-transmitting any or all of the website or the Content without, or in violation of, a written license or agreement with USGC; (b) using any data mining, robots or similar data gathering or extraction methods; (c) manipulating or otherwise displaying the website or the Content by using framing or similar navigational technology; (d) registering, subscribing, unsubscribing, or attempting to register, subscribe, or unsubscribe any party for any USGC product or service if you are not expressly authorized by such party to do so; and (e) using the website or the Content other than for its intended purpose, as determined solely in USGC’s discretion, including but not limited to, to defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy) of others, and/or to publish, post, distribute or disseminate any defamatory, infringing, obscene, pornographic, sexual, indecent or unlawful material or information.
        </OpenP>
        <OpenP>
          You may not interfere with the security of, or otherwise abuse this website or any system resources, services or networks connected to or accessible through this website. You may only use this website for lawful purposes.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>2. INTELLECTUAL PROPERTY</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign="left">
          All materials, including the organization and presentation of such material, on this website, including wholly owned brand assets such as photography (the “Materials”) are the property of USGC and its licensors and may be protected by intellectual property laws including laws relating to copyrights, trademarks, trade names, internet domain names and other similar rights.
        </OpenP>
        <OpenP>
          Unless you have entered into a separate agreement with USGC, any other use of these Materials without USGC's written permission is prohibited. Action taken as a result of use of Materials without express written permission from USGC is at the discretion of USGC and our legal team.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>3. TRADEMARKS</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          USGC, USG and any other product or service name or slogan contained in the Site are trademarks of USGC and its licensors and may not be copied, imitated or used, in whole or in part, without the prior written permission of USGC or the applicable trademark holder. You may not use any “hidden text” utilizing “USGC” or any other name, trademark or product or service name of USGC without our prior written permission. In addition, the look and feel of the Site, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of USGC and may not be copied, imitated or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned in the Site are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by us.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);


class Terms extends Component {
  // USGInUSD in state is master value for component - don't let the app modify it
  state = { USGInUSD: 1627.50, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg} alignItems="left">
          <HhInnerContainer>
            <HhTextContainer>
              <HhH1>
                Terms
              </HhH1>
              <HhH2>
                Of Use
              </HhH2>
            </HhTextContainer>
            <Fade>
              <HhImageContainer bgImage={USGoldToken} />
            </Fade>
          </HhInnerContainer>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9' id={1}>
          <Container>
            <OpenH3>
              This website is owned and operated by USGC. Access and use of this website is provided by USGC to you on condition that you accept these Terms of Use, and by accessing or using this website, you agree to these Terms of Use. If you do not agree to accept and abide by these Terms of Use you should not access or use this website.
            </OpenH3>
            <OpenP>
              USGC may revise and update these Terms of Use at any time and without notice. You are cautioned to review the Terms of Use posted on the website periodically. Your continued access or use of this website after any such changes are posted will constitute your acceptance of these changes.
            </OpenP>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#eee'>
          <Container>
            <Example />
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

export default Terms;
