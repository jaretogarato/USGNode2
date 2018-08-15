import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
// import TopBg from '../assets/images/hh-bg-yellow.png';
import TopBg from '../assets/images/home-slider-1-slide-1b.jpg';
import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import MainLinks from './partials/MainLinks';
import Footer from './partials/Footer';
import {
  HeroHeader,
  HhInnerContainer,
  HhTextContainer,
  HhImageContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Resources extends Component {
  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <HhInnerContainer>
            <HhTextContainer>
              <HhH2>
                your
              </HhH2>
              <HhH1>
                profile
              </HhH1>
            </HhTextContainer>
            <HhImageContainer>
              <WalkingLiberty />
            </HhImageContainer>
          </HhInnerContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Profile:</Header>
          <Grid verticalAlign='middle' padded >


            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h3' textAlign='left'>
                  Main
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <a href="#"><Icon name='edit' /></a>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Username:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                AnonOrama22
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Name:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                Testy Testerson
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Email:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                test@test.com
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Phone:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                555-555-1212
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h3' textAlign='left'>
                  Mailing address
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <a href="#"><Icon name='edit' /></a>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Street 1:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>

              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Street 2:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>

              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  City:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>

              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  State:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>

              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Zip:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>

              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h3' textAlign='left'>
                  Payment options
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <a href="#"><Icon name='edit' /></a>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Ethereum:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                **********#ABX$
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>
                  Visa Debit:
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                **********4342
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Header as='h4' textAlign='right'>

                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <a href="#">Add payment option</a>
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

export default Resources;
