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
import '../css/mailchimp.css';
import 'react-accessible-accordion/dist/fancy-example.css';
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
        <h3>1. INFORMATION WE COLLECT AND HOW WE USE IT</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign="left">
          We may collect and store information about you in connection with your use of the Service, including any information you transmit to or through the Service. We use that information to provide the Service’s functionality, fulfill your requests, improve the Service’s quality, engage in research and analysis relating to the Service, personalize your experience, track usage of the Service, provide feedback to third party businesses that are listed on the Service, display relevant advertising, market the Service, provide customer support, message you, back up our systems, allow for disaster recovery, enhance the security of the Service, and comply with legal obligations. Even when we do not retain such information, it still must be transmitted to our servers initially and stored long enough to process. 
        </OpenP>
        <OpenP textAlign="left">
          Please also note:
        </OpenP>
        <OpenP textAlign="left">
          a. <strong>Account Information:</strong> If you create a US GOLD account, we may store and use the information you provide during that process, such as your full name, email address, zip code, physical address, and other information you may provide with your account, such as your gender, phone number, and birth date. We may publicly display your first name and last initial, as well as any photo or other content you submit through the registration process, as part of your account profile. You can modify some of the information associated with your account through your account settings. If you believe that someone has created an unauthorized account depicting you or your likeness, you can request its removal by flagging it.
        </OpenP>
        <OpenP textAlign="left">
          b. <strong>Contacts:</strong> You may invite others to become a user of products and or services offered within US GOLD by providing us with their contact information, or by allowing us to access your contacts from your computer, mobile device, or third-party sites to select which individuals you want to invite. If you allow us to access your contacts, we may transmit that information to our servers long enough to process your invitations.
        </OpenP>
        <OpenP textAlign="left">
          c. <strong>Communications:</strong> a.	When you sign up for an account or use certain features, you are opting to receive messages from other businesses, and US GOLD. You can manage some of your messaging preferences through your account settings but note that you cannot opt out of receiving certain administrative, transactional, or legal messages from US GOLD. For example, if you elect to redeem your USG Token(s) for the direct representation gold currency coin or coins – a 1oz Gold American Eagle coin, the shipping company i.e. United Parcel Service – Parcel Pro, may provide to you through US GOLD a quote for the shipping charges from US GOLD to your physical address, and or from an additional business through the Service, we may send you messages about your transaction using the contact information you provide, including through automated SMS text messages to your phone number. We may also track your actions in response to the messages you receive from us or through the Service, such as whether you deleted, opened, or forwarded such messages. If you exchange messages with others through the Service, we may store them in order to process and deliver them, allow you to manage them, and we may review and disclose them in connection with investigations related to use of the Service, as well as our efforts to improve the Service. We may not deliver messages that we believe are objectionable, such as spam messages, fraudulent solicitations, or requests to exchange reviews for compensation. If you send or receive messages through the Service via SMS text message, we may log phone numbers, phone carriers, and the date and time that the messages were processed. Carriers may charge recipients for texts that they receive. We may also store information that you provide through communications to us, including from phone calls, letters, emails and other electronic messages, or in person. Our phone calls with you may be monitored and recorded for quality purposes.
        </OpenP>
        <OpenP textAlign="left">
          d. <strong>Transactions:</strong> a.	If you initiate a transaction through the Service, such as a purchase or redemption, we may collect and store information about you, such as your name, phone number, address, email, and payment information (such as a credit card number and expiration date), as well as any other information you provide to us, in order to process your transaction, send communications about them to you, and populate forms for future transactions. This information may be shared with third parties, and third parties may share such information with us, for the same purposes. When you submit credit card numbers, we encrypt that information using industry standard technology. If you write reviews about businesses with which you transact through the Service, we may publicly display the fact that you transacted with those businesses. For example, if you make a dinner reservation through the Service and write a review about your experience, we may publicly display the fact that you made your dinner reservation through the Service.
        </OpenP>
        <OpenP textAlign="left">
          e. <strong>Activity:</strong> We may store information about your use of the Service, such as your search activity, the pages you view, the date and time of your visit, businesses you call using our mobile applications, and reservations and purchases you make through the Service. We also may store information that your computer or mobile device may provide to us in connection with your use of the Service, such as your browser type, type of computer or mobile device, browser language, IP address, WiFi information such as SSID, mobile carrier, phone number, unique device identifier, advertising identifier, location (including geolocation, beacon based location, and GPS location), and requested and referring URLs. We may also receive and store your location whenever our mobile applications are running, including when running in the background, if you enable our mobile apps to access such information in the course of using the Service. You may be able to limit or disallow our use of certain location data through your device or browser settings, for example by adjusting the "Location Services" settings for our applications in iOS privacy settings.
        </OpenP>
        <OpenP textAlign="left">
          f. <strong>Different Devices:</strong> a.	You may access the Service through different devices (e.g., your mobile phone or desktop computer) and different platforms (e.g., the US GOLD website or US GOLD mobile app). The information that we collect and store through those different uses may be cross-referenced and combined, and your contributions through one US GOLD platform will typically be similarly visible and accessible through all other US GOLD platforms.
        </OpenP>
        <OpenP textAlign="left">
          <strong></strong>
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>2. COOKIES</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign="left">
          We, and third parties with whom we partner, may use cookies, web beacons, tags, scripts, local shared objects such as HTML5 and Flash (sometimes called "flash cookies"), advertising identifiers (including mobile identifiers such as Apple’s IDFA or Google’s Advertising ID) and similar technology (<strong>"Cookies"</strong>) in connection with your use of the US GOLD Service, third party websites, and mobile applications. Cookies may have unique identifiers, and reside, among other places, on your computer or mobile device, in emails we send to you, and on our web pages. Cookies may transmit information about you and your use of the Service, such as your browser type, search preferences, IP address, data relating to advertisements that have been displayed to you or that you have clicked on, and the date and time of your use. Cookies may be persistent or stored only during an individual session.
       </OpenP>
        <OpenP textAlign="left">
          The purposes for which we use Cookies in the Service include:
        </OpenP>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <strong>
                Purpose
              </strong>
            </Grid.Column>
            <Grid.Column width={12}>
              <strong>
                Explanation
              </strong>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <OpenP textAlign="left">
                Processes
              </OpenP>
            </Grid.Column>
            <Grid.Column width={12}>
              <OpenP textAlign="left">
                Intended to make the Service work in the way you expect. For example, we use a Cookie that tells us whether you have already signed up for an account.
              </OpenP>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <OpenP textAlign="left">
                Authentication, Security, and Compliance
              </OpenP>
            </Grid.Column>
            <Grid.Column width={12}>
              <OpenP textAlign="left">
                Intended to prevent fraud, protect your data from unauthorized parties, and comply with legal requirements. For example, we use Cookies to determine if you are logged in.
              </OpenP>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <OpenP textAlign="left">
                Preferences
              </OpenP>
            </Grid.Column>
            <Grid.Column width={12}>
              <OpenP textAlign="left">
                Intended to remember information about how you prefer the Service to behave and look. For example, we use a Cookie that tells us whether you have declined to allow us to send push notifications to your phone.
              </OpenP>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <OpenP textAlign="left">
                Notifications
              </OpenP>
            </Grid.Column>
            <Grid.Column width={12}>
              <OpenP textAlign="left">
                Intended to allow or prevent notices of information or options that we think could improve your use of the Service. For example, we use a Cookie that stops us from showing you the signup notification if you have already seen it.
              </OpenP>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <OpenP textAlign="left">
                Analytics
              </OpenP>
            </Grid.Column>
            <Grid.Column width={12}>
              <OpenP textAlign="left">
                Intended to help us understand how visitors use the Service. For example, we use a Cookie that tells us how our search suggestions correlate to your interactions with the search page.
              </OpenP>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <OpenP textAlign="left">

              </OpenP>
            </Grid.Column>
            <Grid.Column width={12}>
              <OpenP textAlign="left">

              </OpenP>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <OpenP textAlign="left">
          You can set some Cookie preferences through your device or browser settings, but doing so may affect the functionality of the Service. The method for disabling Cookies may vary by device and browser, but can usually be found in your device or browser preferences or security settings. For example, iOS and Android devices each have settings which are designed to limit forms of ad tracking. For flash cookies, you can manage your privacy settings by clicking here. Please note that changing any of these settings does not prevent the display of certain advertisements to you.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>3. THIRD PARTIES</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          Third parties may receive information about you as follows:
        </OpenP>
        <OpenP textAlign='left'>
          a. <strong>Service Providers:</strong> We may rely on third party providers
          to support or provide some of the services that are available through the
          Service. We may also rely on third
          party providers to perform certain services for us in connection with your
          use of the Service, such as communications and hosting services, network
          security, technical and customer support, tracking and reporting functions,
          quality assurance testing, payment processing, our own marketing of the
          Service, and other functions. We may share information from or about you
          with these third-party providers so that they can perform their services or
          complete your requests. These third-party providers may share information
          with us that they obtain from or about you in connection with providing
          their services or completing your requests. Third party providers may also
          share this information with their subsidiaries, joint ventures, or other
          companies under common control. Some of our web pages utilize framing
          techniques to serve content to you from our third-party providers, while
          preserving the look and feel of the Service. In such cases, please note
          that the information you provide is being provided to the third party.
        </OpenP>
        <OpenP textAlign='left'>
          b. <strong>Aggregate or Anonymous Information:</strong> We may share user
          information in the aggregate with third parties. For example, we may also
          disclose anonymized information about your use on US GOLD, for example if
          you engage in a transaction in connection with US GOLD, we may publicly
          disclose information about the transaction without providing identifying
          information about you or otherwise disclosing your participation in the
          transaction.
        </OpenP>
        <OpenP textAlign='left'>
          c. <strong>Business Transfers:</strong> We may share information from or
          about you with our parent companies, subsidiaries, joint ventures, or other
          companies under common control, in which case we will require them to honor
          this Privacy Policy. If another company acquires US GOLD, or all or
          substantially all of our assets, that company will possess the same
          information, and will assume the rights and obligations with respect to
          that information as described in this Privacy Policy.
        </OpenP>
        <OpenP textAlign='left'>
          d. <strong>Investigations and Legal Disclosures:</strong> We may
          investigate and disclose information from or about you if we have a good
          faith belief that such investigation or disclosure: (a) is reasonably
          necessary to comply with legal process and law enforcement instructions and
          orders, such as a search warrant, subpoena, statute, judicial proceeding,
          or other legal process or law enforcement requests served on us; (b) is
          helpful to prevent, investigate, or identify possible wrongdoing in
          connection with any US GOLD product(s) and or service(s); or (c) protects
          our rights, reputation, property, or that of our users, affiliates, or the
          public, such as disclosures in connection with the US GOLD Consumer Alerts
          program.
        </OpenP>
        <OpenP textAlign='left'>
          e. <strong>Links:</strong> The Service may link to third party services,
          like a governmental agency or a business’s URL. Except as set forth herein,
          we do not share your personal information with them, and are not
          responsible for their privacy practices. We suggest you read the privacy
          policies on or applicable to all such third-party services.
        </OpenP>
        <OpenP textAlign='left'>
          f. <strong>Third Party Accounts:</strong> If you sign up for, or log into,
          Yelp using a third-party service like Facebook or Google, or link your Yelp
          account to your account with a third-party service like Facebook or
          Twitter, we may receive information about you from such third-party
          service. If you post content to a third-party service through the Service,
          that third party service will also receive that content, which will be
          visible to anyone that has access to it through that third-party service.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>4. CONTROLLING YOUR PERSONAL DATA</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
          <OpenP><OpenP textAlign='left'>
            Other users may be able to identify you, or associate you with your
  account, if you include personal information in any content you post
  publicly at your sole discretion – which US GOLD has no control of and no
  liability for your actions. Please also note that the messages you send to
  or receive from USGOLD are only private to the extent that both you and US
  GOLD will keep them private. For example, if you send a message to US GOLD
  – you may choose later to publicly post it. Also, we may access and
  disclose such messages in the course of investigations relating to the
  purchase and or any use of any product and service provided by US GOLD.
          </OpenP></OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>5. DATA RETENTION AND ACCOUNT TERMINATION</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          You can close your account by clicking here. We may retain information
          about you for the purposes authorized under this Privacy Policy unless
          prohibited by law. For example, we may retain information to prevent,
          investigate, or identify possible wrongdoing in connection with the Service
          or to comply with legal obligations. Please note that businesses cannot
          remove their business listings, ratings, or reviews by closing their
          accounts.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>6. CHILDREN</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          The Service is intended for general audiences and is not directed to
          children under 13. We do not knowingly collect personal information from
          children under 13. If you become aware that a child has provided us with
          personal information without parental consent, please contact us here. If
          we become aware that a child under 13 has provided us with personal
          information without parental consent, we take steps to remove such information and terminate the child's account.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>7. SECURITY</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          We use various safeguards to protect the personal information submitted to us, both during transmission and once we receive it. However, no method of transmission over the Internet or via mobile device, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>8. CONTACT</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          You may <u>contact us online</u> concerning our Privacy Policy, or write to us at the following address:
        </OpenP>
        <OpenP textAlign='left'>
          US Gold Currency
        </OpenP>
        <OpenP textAlign='left'>
          Attn: Data Privacy Manager
          <br/>
          1603 Capitol Ave.
        </OpenP>
        <OpenP textAlign='left'>
          Suite 303
        </OpenP>
        <OpenP textAlign='left'>
          Cheyenne, WY 82001
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>9. MODIFICATIONS TO THIS PRIVACY POLICY</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          We may revise this Privacy Policy from time to time. The most current version of the Privacy Policy will govern our collection, use, and disclosure of information about you and will be located here. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on the Service prior to the effective date of the changes. By continuing to access or use the Service after those changes become effective, you acknowledge the revised Privacy Policy.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        <h3>10. CALIFORNIA RESIDENTS: YOUR CALIFORNIA PRIVACY RIGHTS</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          We do not disclose your personal information to third parties for the purpose of directly marketing their goods or services to you unless you first agree to such disclosure. If you have any questions regarding this policy, or would like to change your preferences, you may contact us at the address listed above in Section 8.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);

class Privacy extends Component {
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
                  US Gold Currency
                </HhH2>
                <HhH1>
                  Privacy Policy
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
              This Privacy Policy describes our policies on the collection, use, and disclosure of information about you in connection with your use of our services, including those offered through our websites, emails, and mobile applications.<sup>*</sup>
            </OpenH3>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#eee'>
          <Container>
            <Example />
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#eee' bottomColor='#ddd' id={2}>
          <Container>
            <OpenP textAlign="left">
              (*)  Collectively, the "Service". <br />
              The terms "we", "us", and "US GOLD" refer to US Gold Currency LLC, a Wyoming limited liability company, with its headquarters in Cheyenne, Wyoming, USA. When you use the Service, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy.
            </OpenP>
            <OpenP textAlign='left'>
              Last Updated on June 20, 2018. This Privacy Policy is effective June 20, 2018 for all users.
            </OpenP>
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

export default Privacy;
