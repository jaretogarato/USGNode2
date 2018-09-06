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

import axios from 'axios';

import Table from './partials/DataTable'
class Wallet extends Component {

    async doLogin() {
        //hash and sign now
        let acct = (await window.web3js.eth.getAccounts())[0];
        console.log(acct);


        // "log into USG (" + Date.now() + ")";
        let timestamp = new Date(Date.now()).toString();

        console.log(timestamp)

        let thing  = await window.web3js.eth.personal.sign(timestamp,  acct);


        axios.post('api/login', {signature:thing, timestamp:timestamp})
            .then(function (res) {
                //history.push('/success');
                window.location.reload();
               // history.push('');
            })
            .catch( err => {
                console.log('Failed to add contact');
            });

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
                <h2>Leads</h2>
               <Table dataSource="api/leadList" cols={[
                   {
                        title:"Title",
                        data: "title",
                       defaultContent: ""
                    },
                      {
                          title:"First",
                              data: "first_name",
                          defaultContent: ""
                      },
      {
          title:"Last",
              data: "last_name",
          defaultContent: ""
      },
      {
          title:"Phone",
              data: "phone",
          defaultContent: ""
      },
      {
          title:"Email",
              data: "email",
          defaultContent: ""
      },
      {
          title:"Message",
              data: "message",
          defaultContent: ""
      },
      {
          title:"Eth Addr",
              data: "ethereum_address",
          defaultContent: ""
      },
      {
          title:"Complete",
              data: "complete",
          defaultContent: ""
      }
                ]} />
              </Grid.Column>
            </Grid.Row>
      <Grid.Row>
      <Grid.Column>
      <h2>Purchase Requests</h2>
      <Table dataSource="api/purchaseList" cols={[
              {
                  title:"Title",
                  data: "title",
                  defaultContent: ""
              },
      {
          title:"Ethereum",
              data: "ethereum_address",
          defaultContent: ""
      },
      {
          title:"Number to buy",
              data: "qty_to_purchase",
          defaultContent: ""
      },
      {
          title:"Email",
              data: "email",
          defaultContent: ""
      },
      {
          title:"Complete",
              data: "complete",
          defaultContent: ""
      },
      {
          title:"Key",
              data: "key",
          defaultContent: ""
      },
      {
          title:"Eth Addr",
              data: "ethereum_address",
          defaultContent: ""
      },
      {
          title:"Complete",
              data: "complete",
          defaultContent: ""
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
