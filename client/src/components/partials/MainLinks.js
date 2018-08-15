import React from 'react';
import { Grid, Container, Card, Image } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
import '../../css/mainlinks.css';

import IconCoinClientsTop from '../../assets/images/icon-coin-clients-top.png';
import IconCoinClientsBottom from '../../assets/images/icon-coin-clients-bottom.png';
import IconCoinServicesTop from '../../assets/images/icon-coin-services-top.png';
import IconCoinServicesBottom from '../../assets/images/icon-coin-services-bottom.png';
import IconCoinRegulatoryTop from '../../assets/images/icon-coin-regulatory-top.png';
import IconCoinRegulatoryBottom from '../../assets/images/icon-coin-regulatory-bottom.png';
import IconCoinContactTop from '../../assets/images/icon-coin-contact-top.png';
import IconCoinContactBottom from '../../assets/images/icon-coin-contact-bottom.png';

import LogoMedium from '../../assets/images/logo-medium.png';
import LogoShapeshift from '../../assets/images/logo-shapeshift.png';
import LogoCoinbase from '../../assets/images/logo-coinbase.png';

import Fade from 'react-reveal/Fade';

class MainLinks extends React.Component {
  render() {
    return (
      <Container>
        <Grid stackable padded centered>
          <Grid.Row columns='equal'>
            <Grid.Column>
              <Fade bottom>
                <Card>
                  <Image src={LogoShapeshift} />
                  <Card.Content>
                    <Card.Header>Item 1</Card.Header>
                    <Card.Meta>Content Card</Card.Meta>
                    <Card.Description>Generic, sample content<br />Lucas ipsum dolor sit amet darth moff amidala antilles tatooine tatooine moff droid lando fett. </Card.Description>
                  </Card.Content>
                </Card>
              </Fade>
            </Grid.Column>
            <Grid.Column>
              <Fade bottom delay={200}>
                <Card>
                  <Image src={LogoCoinbase} />
                  <Card.Content>
                    <Card.Header>Item 2</Card.Header>
                    <Card.Meta>Content Card</Card.Meta>
                    <Card.Description>Generic, sample content<br />Lucas ipsum dolor sit amet darth moff amidala antilles tatooine tatooine moff droid lando fett. </Card.Description>
                  </Card.Content>
                </Card>
              </Fade>
            </Grid.Column>
            <Grid.Column>
              <Fade bottom delay={400}>
                <Card>
                  <Image src={LogoMedium} />
                  <Card.Content>
                    <Card.Header>Item 3</Card.Header>
                    <Card.Meta>Content Card</Card.Meta>
                    <Card.Description>Generic, sample content<br />Lucas ipsum dolor sit amet darth moff amidala antilles tatooine tatooine moff droid lando fett. </Card.Description>
                  </Card.Content>
                </Card>
              </Fade>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default MainLinks;
