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
import Lead from './Lead.js';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Leads extends Component {
  state = { created_at: '', title: '', first_name: '', last_name: '', phone: '', email: '', message: '', leads: [] }

  componentDidMount() {
    axios.get('/api/leads')
      .then( res => this.setState({ leads: res.data }) )
      .catch( err => {
        console.log('Failed to find leads');
      });
  }

  render() {
    let { title, first_name, last_name, phone, email, message, leads } = this.state;

    let ccLeads = leads.map( l => <Lead key={l.id} {...l} /> );
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              All Them
            </HhH2>
            <HhH1>
              Leads
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
          {ccLeads}
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Leads);
