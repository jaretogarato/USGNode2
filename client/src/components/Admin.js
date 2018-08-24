import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import WalletForm from './partials/WalletForm';
import WalletBalance from './partials/WalletBalance';
import Fade from 'react-reveal/Fade';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import Img from './partials/Img';
import USGoldToken from '../assets/images/usg-token.png';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, 
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';

import Table from './partials/DataTable'
class Wallet extends Component {

    doLogin() {
        console.log("zzzz")

        '/api/login'

    }

    componentDidMount() {

    }
 
  render() {

      const $ = require('jquery');
      $.DataTable = require('datatables.net');
    
    
    return (
      <Container fluid>

        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
               <Table dataSource="api/tableTest" cols={[
                   {
                        title:"Name",
                        data: "name"
                    },
                      {
                          title:"Nickname",
                              data: "nickname"
                      }
                ]} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <button onClick={this.doLogin} >doLogin</button>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Wallet;
