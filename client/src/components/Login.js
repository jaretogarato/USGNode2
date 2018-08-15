import React, { Component } from 'react';
import { Header, Segment, Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import Footer from './partials/Footer';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import USGoldToken from '../assets/images/usg-token.png';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
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
import Fade from 'react-reveal/Fade';


class AccountLogin extends Component {
  state = { email: '', password: '' };

  componentDidMount (){
    console.log('this.props @ accountlogin:');
    console.log(this.props);
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  Log In
                </HhH1>
                <HhH2>
                  To Your Account.
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>
        <VerticalSpacer height='50px' />
        <Container>
          <Segment basic>
            <Header as='h1' textAlign='left'>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <input
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
            </Form>
          </Segment>
        </Container>

        <FullWidthDiv topColor='#eee' bottomColor='#ccc'>
          <OpenH3>Don't have an account?</OpenH3>
          <OpenP>
            New account signups are temporarily on pause. Please return in a few days to check the status on signups — we will re-open them shortly!
          </OpenP>
        </FullWidthDiv>

        <Footer />
      </Container>
    );
  }
}

export default withRouter(connect()(AccountLogin));
