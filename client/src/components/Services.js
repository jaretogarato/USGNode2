import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-yellow.png';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Services extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              How Can
            </HhH2>
            <HhH1>
              We Help?
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Service Offerings</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Icon name='settings' size='massive' color='grey' />
              </Grid.Column>
              <Grid.Column width={12}>
                <p>
                  Strip steak drumstick cupim pork belly picanha landjaeger ribeye capicola corned beef ham spare ribs biltong kielbasa fatback pancetta. Boudin hamburger ball tip spare ribs pig landjaeger turkey. Boudin buffalo salami, kielbasa picanha chicken turkey. Sausage drumstick corned beef landjaeger, short ribs turkey capicola jerky strip steak pig ball tip andouille. Frankfurter alcatra bacon, ham tail picanha salami. Chicken shank doner, pastrami prosciutto picanha ball tip andouille pig shoulder sausage meatloaf hamburger pork loin. Burgdoggen kevin ribeye cow doner chuck turducken tri-tip sausage ball tip corned beef.
                </p>
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

export default Services;
