import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid, Container } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-yellow.png';
// import { connect } from 'react-redux';
// import { flash } from '../../actions/flash';
// import { setFlash } from '../../actions/flash';
import { inlineStyles } from '../css/inlineStyles.js';
import { withRouter } from 'react-router-dom';
import Footer from './partials/Footer.js';
import User from './User.js';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Users extends Component {
  state = { created_at: '', first_name: '', last_name: '', phone: '', email: '', users: [], loaded: false }

  componentDidMount() {
    this.setState({ loaded: true });

    axios.get('/api/users')
      .then( res => this.setState({ users: res.data }) )
      .catch( err => {
        console.log('Failed to find users');
      });
  }

  render() {
    let { first_name, last_name, phone, email, users, loaded } = this.state;
    // let { posts } = this.state;

    // this.state.loaded ? {let ccUsers = users.map( l => <User key={l.id} {...l} /> )} : console.log('loading');
    let ccUsers = users.map( l => <User key={l.id} {...l} />);
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              All Them
            </HhH2>
            <HhH1>
              Users
            </HhH1>
          </HhTextContainer>
        </HeroHeader>
        <Container>
          <Header as='h1' />
          <Grid>
            <Grid.Column width={3}><Grid.Row><Header as='h3'>Date Created</Header></Grid.Row></Grid.Column>
            <Grid.Column width={2}><Grid.Row><Header as='h3'>First Name</Header></Grid.Row></Grid.Column>
            <Grid.Column width={2}><Grid.Row><Header as='h3'>Last Name</Header></Grid.Row></Grid.Column>
            <Grid.Column width={2}><Grid.Row><Header as='h3'>Phone</Header></Grid.Row></Grid.Column>
            <Grid.Column width={2}><Grid.Row><Header as='h3'>Email</Header></Grid.Row></Grid.Column>
            <Grid.Column width={5}><Grid.Row><Header as='h3'>Message</Header></Grid.Row></Grid.Column>
          </Grid>
          {ccUsers}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Users);
