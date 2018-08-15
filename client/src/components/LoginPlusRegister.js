import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import AccountLogin from './AccountLogin';
import AccountNew from './AccountNew';
import Footer from './partials/Footer.js';
import { withRouter } from 'react-router-dom';
import {
  FullWidthDiv, FullWidthBgDiv,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed
} from '../css/styledComponents';

class Login extends Component {
  // state = { email: '', password: '' };
  //
  // handleChange = event => {
  //   const { id, value } = event.target;
  //   this.setState({ [id]: value });
  // }
  //
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { dispatch, history } = this.props;
  //   const { email, password } = this.state;
  //   dispatch(handleLogin(email, password, history));
  // }
  componentDidMount () {
    console.log('this.props @ login:');
    console.log(this.props);
  }

  render() {
    // const { email, password } = this.state;

    return (
      <Container fluid>
        <FullWidthDiv topColor='#eee' bottomColor='#fff'>
          <Container>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <AccountLogin />
                </Grid.Column>
                <Grid.Column>
                  <AccountNew />
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

export default withRouter(connect()(Login));
// export default Login;
