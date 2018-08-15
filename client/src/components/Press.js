import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-press.png';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import VideoChrisSF from './partials/VideoChrisSF';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Press extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              Crypto Cowboy
            </HhH2>
            <HhH1>
              PRESS
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h2' textAlign='center'>Christopher Johnson in San Francisco</Header>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12} textAlign='center'>
                <VideoChrisSF />
              </Grid.Column>
              <Grid.Column width={2} />
              {/* <Grid.Column width={10}>
                Crypto Cowboy will be speaking soon in Dallas on our new platform client! Details will be posted in the next day or two.
              </Grid.Column> */}
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

export default Press;
