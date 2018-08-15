import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import USGoldToken from '../assets/images/usg-token.png';
import Footer from './partials/Footer';
import Fade from 'react-reveal/Fade';
import {
  Segment,
  Header,
  Form,
  Button,
  Container,
  Grid,
  Checkbox,
} from 'semantic-ui-react';

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

class AccountNew extends Component {
  state = { email: '', password: '', passwordConfirmation: '', nickname: '', first_name: '', last_name: '', phone: '', agree_to_terms: '', isValidated: false };

  validate = () => {
    const formLength = this.formEl.length;
    if (this.formEl.checkValidity() === false) {
      for(let i=0; i<formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');

        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = '';
          }
        }
      }
      return false;
    } else {
      for(let i=0; i<formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
        }
      };
      return true;
    }
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    // console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, passwordConfirmation, nickname, first_name, last_name, phone } = this.state;
    const { dispatch, history } = this.props;
    // console.log('password length: ', password.length);

    if (password.length < 8){
      dispatch(setFlash('Passwords must be 8 characters or longer. Please try again.', 'red'));
    } else {
      if (password === passwordConfirmation) {
        dispatch(registerUser(email, password, passwordConfirmation, nickname, first_name, last_name, phone, history));
      } else {
        dispatch(setFlash('Passwords do not match. Please try again.', 'red'));
      }
    }
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { email, password, passwordConfirmation, nickname, first_name, last_name, phone } = this.state;
  //   const { dispatch, history } = this.props;
  //   if (password === passwordConfirmation) {
  //     if (this.validate()) {
  //         dispatch(registerUser(email, password, passwordConfirmation, nickname, first_name, last_name, phone, history));
  //       }
  //       this.setState({isValidated: true});
  //   } else {
  //     dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  //   }
  // }

  render() {
    const { email, password, passwordConfirmation, nickname, first_name, last_name, phone, agree_to_terms } = this.state;
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  US Gold
                </HhH1>
                <HhH2>
                  New Account Registration
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
            {/* <Header as='h1' textAlign='left'>New Account</Header> */}
            <OpenH3>
              <br />
              US Gold Currency respects your privacy and anonymity &mdash; it will always be your choice whether to provide your name or address.
            </OpenH3>
            <p style={styles.graySmallTextCentered}>
              (Note that you must provide a valid U.S. mailing address in the case that you wish to redeem your USG tokens for 1 oz U.S. American Eagle gold coins.)
            </p>
          </Container>
        </FullWidthDiv>

        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Grid stackable columns='equal'>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h4' textAlign='left'>Required fields:</Header>
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
                    <label htmlFor='nickname'>Username</label>
                    <input
                      required
                      id='nickname'
                      value={nickname}
                      placeholder='nickname'
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Group widths='equal'>
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
                    <Form.Field>
                      <label htmlFor='passwordConfirmation'>Password Confirmation</label>
                      <input
                        required
                        id='passwordConfirmation'
                        value={passwordConfirmation}
                        placeholder='Password Confirmation'
                        type='password'
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                  </Form.Group>
                  
                  <span style={styles.graySmallText}>Must be at least 8 characters long and contain letters and numbers</span>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h4' textAlign='left'>Optional fields:</Header>
                  <Form.Field>
                    <label htmlFor='first_name'>First Name</label>
                    <input
                      id='first_name'
                      value={first_name}
                      placeholder='First Name'
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='last_name'>Last Name</label>
                    <input
                      id='last_name'
                      value={last_name}
                      placeholder='Last Name'
                      onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Form.Field>
                    <label htmlFor='phone'>Phone</label>
                    <input
                      id='phone'
                      value={phone}
                      placeholder='Phone Number'
                      onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Segment textAlign='center' basic>
                    <Form.Group>
                      <Form.Field
                        required
                        control={Checkbox}
                        label={{ children: 'I have read and agree to the terms of the User Agreement' }}
                        id='agree_to_terms'
                        onChange={this.handleChange}
                      />
                      &nbsp;&nbsp;
                      <Button primary type='submit'>Submit</Button>
                    </Form.Group>
                  </Segment>
                </Grid.Column>

              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  &nbsp;<br /><br />&nbsp;
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Container>

        <Footer />
      </Container>
    )
  }
}

const styles = {
  image: {
    borderRadius: '50%',
    width: '2.5rem',
    height: '2.5rem',
    border: '1px solid white',
  },
  header: {
    marginTop: '0',
    fontWeight: '500',
    color: '#fff',
    padding: '18px 0 0 5px',
  },
  segment: {
    padding: '0',
  },
  dropdown: {
    marginTop: '20px',
  },
  whiteText: {
    color: 'white',
  },
  graySmallText: {
    color: '#777',
    fontSize: '.85em',
  },
  graySmallTextCentered: {
    color: '#777',
    fontSize: '.85em',
    textAlign: 'center',
  },
}


// export default connect()(AccountNew);
export default withRouter(connect()(AccountNew));
