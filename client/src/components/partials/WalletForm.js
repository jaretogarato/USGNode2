import React, { Component } from 'react';
import axios from 'axios';
import { Header, Form, Button, Segment, Dropdown, Grid, Container, TextArea } from 'semantic-ui-react';
import {FullWidthDiv, HhH1, OpenH3, USGButton} from '../../css/styledComponents';
// import { connect } from 'react-redux';
// import { addLead } from '../../actions/leads';
// import { flash } from '../../actions/flash';
// import { setFlash } from '../../actions/flash';
import CubesGold02 from '../../assets/images/cubes-gold-02.png';
import { inlineStyles } from '../../css/inlineStyles.js';
// import { titleOptions, phoneTypeOptions, stateOptions } from './FormOptions.js';
import { titleOptions } from './FormOptions.js';
import { withRouter } from 'react-router-dom';
import Img from './Img';


import {config } from "../../configs/dev.js";

class WalletForm extends Component {
  state = { ethereum_address_to: '', amt_to_Send: '' }

  handleSubmit = event => {
      
    event.preventDefault();
    const { ethereum_address_to, amt_to_Send } = this.state;
    const { dispatch, history } = this.props;

    // TODO: better error checking

      if(!window.confirm("Are you sure you want to send USG? This cannot be undone.")){
          return;
      }

    if (false) {
      console.log('Please complete all fields');
    } else {
        console.log(window.usg);
        console.log(ethereum_address_to);
        console.log(amt_to_Send);
        window.usg.methods.transfer(ethereum_address_to, amt_to_Send).send();
        
        //TODO: alert user/ask "are you sure" and give them instructions to click send on MetaMask
        
        console.log("sending...");
        this.setState({ 
            ethereum_address_to : "",
            amt_to_Send: ""  
        });
    }
  }

  handleChange = event => {
    // use 'event' to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
    console.log(this.state);
  }

  handleOptionChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    // const options = event.target.options;
    this.setState({ [id]: value });
    console.log(event.target);
    console.log(event.target.value);
    // console.log(event.target.options);
    console.log(this.state);
  }

    componentDidMount =  () => {
        window.addEventListener("web3Complete", this.setWeb3);

    }
    setWeb3 = ()=>{

        if(window.needsMetamask) {
            console.log("needs metamask");

        }
        else {
            console.log(window.web3js);
            console.log(window.acct);

            this.setState({
                ethereum_address: window.acct,
                usg_balance: window.bal
            });
        }




    }


  render() {
    const { ethereum_address_to, amt_to_Send } = this.state;



    return (


          <Form onSubmit={this.handleSubmit}>
            <Grid padded >
                <Grid.Row>
                    <Grid.Column >
                        <h2>Send USG</h2>
                    </Grid.Column>
                </Grid.Row>
              <Grid.Row>
                <Grid.Column >
                  <Form.Field>
                    <input
                      id='ethereum_address_to'
                      placeholder='Ethereum Address TO'
                      required
                      value={ethereum_address_to}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                
                
              </Grid.Row>
              <Grid.Row>
              <Grid.Column >
                  <Form.Field>
                    <input
                      id='amt_to_Send'
                      placeholder='USG to send'
                      required
                      value={amt_to_Send}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>

                <Grid.Row>
                    <Grid.Column >
                        <USGButton type='submit'>Submit</USGButton>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

          </Form>
    );
  }
}

export default withRouter(WalletForm);
