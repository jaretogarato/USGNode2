import React, { Component } from 'react';
import { Header, Container, Card, Icon, Image } from 'semantic-ui-react';
import TopBg from '../assets/images/hh-bg-clients.jpg';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
// import LogoSunPacific from '../assets/images/sun-pacific.jpg';
import LogoMoneyTrac from '../assets/images/mtrac.jpg';
import LogoUSGold from '../assets/images/us-gold.jpg';
import LogoOpenNetwork from '../assets/images/open-network.jpg';
import {
  HeroHeader,
  HhTextContainer,
  HhH1,
  HhH2,
} from '../css/styledComponents';

class Clients extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <HhTextContainer>
            <HhH2>
              We Love
            </HhH2>
            <HhH1>
              Our Clients
            </HhH1>
          </HhTextContainer>
        </HeroHeader>

        <Container>
          <Header as='h1' /> {/* vertical whitespace */}
          <Header as='h1' textAlign='center'>Select Clients</Header>
          <Card.Group itemsPerRow={2} centered>
            <Card>
              {/* <Image src={LogoSunPacific} /> */}
              <Card.Content>
                <Card.Header>
                  <a href="http://sunpacificpower.com/" target="_blank" rel="noopener noreferrer">Sun Pacific Power Corp</a></Card.Header>
                {/* <Card.Meta>Sun Pacific Power builds competitively priced next-generation solar panel and lighting projects.</Card.Meta> */}
                <Card.Description>Sun Pacific Power builds competitively priced next-generation solar panel and lighting projects.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href='http://sunpacificpower.com/' target="_blank" rel="noopener noreferrer">
                  <Icon name='world' />
                  sunpacificpower.com
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Image src={LogoMoneyTrac} />
              <Card.Content>
                <Card.Header>
                  <a href="https://www.moneytractechnology.com/" target="_blank" rel="noopener noreferrer">MoneyTrac</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description>MoneyTrac Technology offers businesses operating in a variety of alternative or "high-risk" industries with a broad suite of services that provide them with an opportunity to manage and run their business with optimum efficiency. </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href='https://www.moneytractechnology.com/' target="_blank" rel="noopener noreferrer">
                  <Icon name='world' />
                  www.moneytractechnology.com
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Image src={LogoUSGold} />
              <Card.Content>
                <Card.Header>
                  <a href="http://www.usgoldinc.com/" target="_blank" rel="noopener noreferrer">US Gold</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description>Your private gold bullion dealer. US Gold makes buying, selling, and storing gold safe and easy, at industry-leading rates.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href='http://usgoldinc.com/' target="_blank" rel="noopener noreferrer">
                  <Icon name='world' />
                  usgoldinc.com
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Image src={LogoOpenNetwork} />
              <Card.Content>
                <Card.Header>
                  <a href="http://www.opennetwork.exchange/" target="_blank" rel="noopener noreferrer">Open Network Exchange</a></Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description>Open Network is the issuer of the ON cryptographic tokens. ON manages cash, real estate investments, gold bullion reserves, and provides a direct exit window for token holders who have successfully completed the qualification process.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href='http://www.opennetwork.exchange/' target="_blank" rel="noopener noreferrer">
                  <Icon name='world' />
                  www.opennetwork.exchange
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
          <Header as='h1' />
          <Header as='h1' />
        </Container>
        <MainLinks />
        <Footer />
      </Container>
    );
  }
}

export default Clients;
