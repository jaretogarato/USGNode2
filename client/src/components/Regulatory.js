import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-regulatory.jpg';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Regulatory extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              Compliance
            </HhH2>
            <HhH1>
              Matters
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Regulatory Compliance Adherence</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <p>
                  Crypto Cowboy and its legal team ensures all designs meet all existing regulatory requirements needed Our philosophy is that security tokens should comply with all existing regulations in each country. Therefore, tailors the entire user experience for each investor based on their country and the advice of the client’s legal team, including various checks, different legal documents per country, management of quotas for types of investors etc. This enables our clients to maximize their global investor footprint, while staying well within the guidelines of their legal advisers.
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Icon name='checkmark box' size='massive' color='grey' />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
        </Container>
        <MainLinks />
        <Footer />
      </Container>
    );
  }
}

export default Regulatory;
