import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-yellow.png';

import MainLinks from './partials/MainLinks';
import Footer from './partials/Footer';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Members extends Component {
  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              Landing For
            </HhH2>
            <HhH1>
              Members
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Header</Header>
          <Grid align='center' verticalAlign='middle' padded >
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                placeholder
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={14}>
                <Header as='h3' textAlign='center'>
                  Lucas ipsum dolor sit amet darth moff amidala antilles tatooine tatooine moff droid lando fett. Kenobi c-3po gonk darth darth. Organa mothma padmé fett darth antilles grievous fett. Organa owen bespin bespin. Boba qui-gonn ewok coruscant tatooine palpatine mothma anakin binks. Dantooine alderaan fett skywalker wedge sidious mandalore. Anakin skywalker utapau binks darth hutt darth. Moff luke darth secura jango. Solo amidala mon organa vader coruscant c-3po jango. Hoth qui-gon mon anakin ponda. C-3po biggs boba darth jabba.
                </Header>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
          </Grid>
          <MainLinks />
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Members;
