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
import {  Form } from 'semantic-ui-react';

import axios from 'axios';

import Table from './partials/DataTable'
class Wallet extends Component {

    async doLogin() {
        //hash and sign now
        console.log(window.wallet);
        let acct = window.wallet[0];
        console.log(acct);


        // "log into USG (" + Date.now() + ")";
        let timestamp = new Date(Date.now()).toString();

        console.log(timestamp)

        let thing  = window.wallet[0].sign(timestamp);


        axios.post('api/login', {signature:thing, timestamp:timestamp})
            .then(function (res) {
                //history.push('/success');
                window.location.reload();
               // history.push('');
            })
            .catch( err => {
                console.log('Failed to log in');
            });

    }

    componentDidMount() {

        axios.get('api/usgprice').then(
            (d)=>{
              console.log(d.data.USG)
                this.setState({price: d.data.USG})
            }
        );
    }
 state = { price: 0, number: 0, address: "" }

    handleChange = event => {

        console.log("q")
        // use 'event' to grab the id off the element also the value and set state
        // const { id, value } = event.target;
        const id = event.target.id;
        const value = event.target.value;
        this.setState({ [id]: value });
        // console.log(this.state);
    }

    handleIssueUSGSubmit = (e) => {
        e.preventDefault();
        const {price, number, address} = this.state;
/*
        console.log(number)
        console.log(address)
*/
        if(!window.confirm("Are you sure you want to issue USG? This cannot be undone.")){
            return;
        }


        /*
        * TODO: allow notes
        * */

        window.usg.methods.issue(address, number, "0x0000000000000000000000000000000000000000000000000000000000000000" ).send();


    }

    handlePriceChangeSubmit = (e) =>{
        e.preventDefault();

        const {price, number, address} = this.state;
        console.log(price)

        let toSign = {
            price : price,
            time : Date.now()
        }

        let sig = window.wallet[0].sign(JSON.stringify(toSign));
        console.log(sig);

        //send sig to server
        axios.post('/api/setusgprice', sig)  .then(function (res) {

            //TODO: error handling
            console.log(res.data)

           window.location.reload();

        })
            .catch( err => {
                console.log(err);
            });
    }

  render() {
      const {price, number, address} = this.state;
      const $ = require('jquery');
      $.DataTable = require('datatables.net');
    
    
    return (
      <Container fluid>
          <br/><br/><br/><br/>
        <Container>
          <Grid>

              <Grid.Row>
                  <Grid.Column>
                      <USGButton onClick={this.doLogin} >Admin Login</USGButton>
                  </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                  <Grid.Column>
                      <h2>Set USG Price</h2>
                      <Form onSubmit={this.handlePriceChangeSubmit}>
                          <Form.Field>
                              Price: <input step="50" id={'price'} name={'price'} onChange={this.handleChange} value={price} type={"number"} />
                              <USGButton type='submit'>Change Price</USGButton>
                          </Form.Field>
                      </Form>
                  </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                  <Grid.Column>
                      <h2>Issue USG</h2>
                      <Form onSubmit={this.handleIssueUSGSubmit}>
                          <Form.Field>
                              Number: <input id={'number'} name={'number'} onChange={this.handleChange} value={number} type={"number"} />
                              Address: <input  id={'address'} name={'address'} onChange={this.handleChange} value={address}  />
                              <USGButton type='submit'>Issue USG</USGButton>
                          </Form.Field>
                      </Form>
                  </Grid.Column>
              </Grid.Row>
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
                      <h2>Redemptions</h2>
                      <Table dataSource="api/redemptionList" cols={[

                          {
                              title:"Qty.",
                              data: "qty_to_redeem",
                              defaultContent: ""
                          },
                          {
                              title:"Email",
                              data: "email",
                              defaultContent: ""
                          },
                          {
                              title:"Shipping",
                              data: "shipping_details",
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



          </Grid>
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Wallet;
