import React from 'react';
import { Container, Grid, Icon, Form, Button, Segment, Image } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
// import '../../css/inlineStyles.js';
import BBB from './BBB';
import '../../css/mailchimp.css';
import '../../css/fonts.css';
import {
  FullWidthDiv, FullWidthBgDiv,
  OpenH4, OpenP, OpenPSmall, HrWhite,
  OpenSpanWhite,
  DividerTransparent,
} from '../../css/styledComponents';
import Img from './Img';
import Fade from 'react-reveal/Fade';

import CoinAndLight from '../../assets/images/coin-and-light.png';
import SubFooterBg from '../../assets/images/sub-footer-bg.jpg';
import FincenLogo from  '../../assets/images/fincen-logo.png';
import USMintLogo from '../../assets/images/usmint-logo.png';
import FacebookWhite from '../../assets/images/facebook-white.png';
import TwitterWhite from '../../assets/images/twitter-white.png';

const MailChimpForm = () => (
  <div>
    <OpenH4 color='white' textAlign='left'>
      Subscribe
    </OpenH4>

    <div id="mc_embed_signup">
      <Form
        action="https://usgold.us18.list-manage.com/subscribe/post?u=198699fe84bf843f460265a53&amp;id=049fa57b81"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        // className="validate"
        target="_blank"
        rel="noopener noreferrer"
        size='small'
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            onChange={this.handleChange}
            type="email"
            value=""
            name="EMAIL"
            // className="email"
            id="mce-EMAIL"
            placeholder="Email Address"
            required
          />
          <br />
          <input
            type="text"
            value=""
            name="FNAME"
            className="firstName"
            id="mce-FNAME"
            placeholder="First Name"
            required
          />
          <br />
          <input
            type="text"
            value=""
            name="LNAME"
            className="lastName"
            id="mce-LNAME"
            placeholder="Last Name"
            required
          />
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div style={styles.mc1}>
            <input
              type="text"
              name="b_198699fe84bf843f460265a53_049fa57b81"
              value=""
            />
          </div>
          <div style={styles.alignCenter}>
            &nbsp;<br />
            <Button
              // as="input"
              color="green"
              inverted
              basic
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              // className="button"
            >
              Submit
            </Button>
            {/* <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            /> */}
          </div>
        </div>
      </Form>
    </div>
  </div>
)

class Footer extends React.Component {
  state = { subscribeEmail: '', subscribeFirstName: '', subscribeLastName: '' }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { dispatch, course, toggleForm, editing, announcement } = this.props;
  //   if(editing) {
  //     dispatch(editAnnouncement(course.id, {...announcement, body: this.state.body } , announcement.id));
  //     this.props.toggleEdit();
  //   } else {
  //     dispatch(addAnnouncement(course.id, this.state));
  //     toggleForm();
  //   }
  // }
  handleChange = (e) => {
    this.setState({ subscribeEmail: e.target.value});
    console.log(this.state.subscribeEmail);
  };

  render() {
    return (
      <div>
        <FullWidthDiv topColor='#828282' bottomColor='#6c6c6c' id={6}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2}></Grid.Column>

                <Grid.Column width={5}>
                  <OpenH4 color='white' textAlign='left'>
                    Connections
                  </OpenH4>
                  <OpenP color='white' textAlign='left'>
                    <b>+1.800.673.5800</b> | <a href='mailto:support@usgold.io'><OpenSpanWhite>support@usgold.io</OpenSpanWhite></a>
                  </OpenP>
                  <HrWhite />
                    <Grid>
                      <Grid.Row columns='equal'>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>
                          <a href='https://twitter.com/usgoldcurrency' target='_blank' rel='noreferrer nofollow'>
                            <Img src={TwitterWhite} width={30} height={30} />
                          </a>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>
                          <a href='https://www.facebook.com/USGoldCurrency/' target='_blank' rel='noreferrer nofollow'>
                            <Img src={FacebookWhite} width={30} height={30} />
                          </a>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  <HrWhite />

                  <Image.Group>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={3} />
                        <Grid.Column width={4}>
                          <a href='/usmint'>
                            {/* <Image fluid src={USMintLogo} /> */}
                            <Img src={USMintLogo} width={50} height={50} />
                          </a>
                        </Grid.Column>
                        <Grid.Column width={2} />
                        <Grid.Column width={4}>
                          <a href='/fincen'>
                            {/* <Image fluid src={FincenLogo} /> */}
                            <Img src={FincenLogo} width={50} height={50} />
                          </a>
                        </Grid.Column>
                        <Grid.Column width={3} />
                      </Grid.Row>
                    </Grid>
                  </Image.Group>
                </Grid.Column>
                <Grid.Column width={3} />
                <Grid.Column width={6}>
                  <OpenH4 color='white' textAlign='left'>
                    Links
                  </OpenH4>
                  <a href="/" alt="home">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Home
                    </OpenP>
                  </a>
                  <a href="/about" alt="about">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      About Us
                    </OpenP>
                  </a>
                  <a href="/token" alt="token">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      USG Token
                    </OpenP>
                  </a>
                  <a href="/resources" alt="resources">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Resources
                    </OpenP>
                  </a>
                  <a href="/contact">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Contact Us
                    </OpenP>
                  </a>
                  <a href="/privacy" alt="privacy policy">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Privacy Policy
                    </OpenP>
                  </a>

                  {/* <a href="/mediakit" alt="media kit">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Media Kit
                    </OpenP>
                  </a> */}

                  <a href="/branding" alt="branding">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Branding
                    </OpenP>
                  </a>

                  <a href="/user-agreement" alt="user agreement">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      User Agreement
                    </OpenP>
                  </a>
                  <a href="/token-purchase-agreement" alt="token purchase agreement">
                    <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                      Token Purchase Agreement
                    </OpenP>
                  </a>
                </Grid.Column>
                {/* <Grid.Column width={6}>
                  <MailChimpForm />
                </Grid.Column> */}
              </Grid.Row>
              <Grid.Row columns='equal'>
                <Grid.Column textAlign='center'>
                  <HrWhite />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns='equal'>
                <Grid.Column textAlign='center'>
                  <BBB /><br />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#272727' bottomColor='#474747' id={6}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2} />
                <Grid.Column width={12}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={16}>
                        <OpenPSmall textAlign='center' color='white'>
                          <Icon name='phone' />+1.800.673.5800
                          &nbsp; &nbsp; | &nbsp; &nbsp;
                          <Icon name='mail outline' /><a href="mailto:support@usgold.io">support@usgold.io</a>
                        </OpenPSmall>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                  <OpenPSmall textAlign='center' color='white'>
                    &nbsp;<br />
                    The materials provided on the US Gold Currency website are for informational purposes only. Neither US Gold Currency LLC nor its affiliates make any express or implied warranties (including without limitation, any warranty of merchantability or fitness for a particular purpose or use) regarding the information appearing on the website nor will they be liable for loss, damages or loss of profit resulting from the use of information appearing on the website. Neither US Gold Currency LLC nor its affiliates will be liable to any user or anyone else for any interruption, inaccuracy, error or omission, delay in or failure of transmission of information through the website regardless of cause, or for any resulting damages.
                  </OpenPSmall>
                  <OpenPSmall textAlign='center' color='white'>
                    &nbsp;<br />
                    Copyright © 2018 US Gold Currency
                  </OpenPSmall>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={SubFooterBg} minHeight='450px'>
          <Container>
            <DividerTransparent>
              <Segment basic>
                <Fade top delay={10}>
                  <Img src={CoinAndLight} width={944} height={563} marginTop={350} mode='fill' />
                </Fade>
              </Segment>
            </DividerTransparent>
          </Container>
        </FullWidthBgDiv>
      </div>
    )
  }
}

const styles = {
  mcEmbedSignup: {
    background: 'transparent',
    clear: 'left',
    font: '14px',
    fontFamily: 'Helvetica,Arial,sans-serif',
    width: '100%',
  },
  mc1: {
    position: 'absolute',
    left: '-5000px',
    ariaHidden: 'true',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignCenter: {
    textAlign: 'center',
  },
  tuneTop: {
    marginTop: '20px',
  },
}

export default Footer;
