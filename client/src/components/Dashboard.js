import React, { Component } from 'react';
import { Header, Container, Grid, Segment, Card } from 'semantic-ui-react';
// import TopBg from '../assets/images/hh-bg-yellow.png';
import TopBg from '../assets/images/home-slider-1-slide-1b.jpg';
import MainLinks from './partials/MainLinks';
import Footer from './partials/Footer';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Dashboard extends Component {
  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              your
            </HhH2>
            <HhH1>
              dashboard
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
          {/* <Header as='h1' textAlign='center'>Introducing US Gold</Header> */}
          <Grid verticalAlign='middle' padded >
            <Grid.Row align='center' >
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                {/* Your Dashboard */}
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={14}>
                <Header as='h3' textAlign='center'>
                  Transaction history
                </Header>
                <Segment>
                  No prior transactions
                </Segment>

                <Card.Group itemsPerRow='3'>
                  <Card>
                    <Card.Content>
                      <Card.Header>Total USG Tokens acquired:</Card.Header>
                      {/* <Card.Meta>Content Card</Card.Meta> */}
                      <Card.Description>
                        <Header>
                          0
                        </Header>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header>Total Value of your USG tokens</Card.Header>
                      {/* <Card.Meta>Content Card</Card.Meta> */}
                      <Card.Description>
                        <Header>
                          $0
                        </Header>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header>Total Tokens Redeemed for Gold Coins</Card.Header>
                      {/* <Card.Meta>Content Card</Card.Meta> */}
                      <Card.Description>
                        <Header>
                          0
                        </Header>
                      </Card.Description>
                    </Card.Content>
                  </Card>

                </Card.Group>
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

export default Dashboard;
