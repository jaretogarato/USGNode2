import React, { Component } from 'react';
import axios from 'axios';
import { Header, Form, Button, Segment, Dropdown, Grid, Container, TextArea } from 'semantic-ui-react';
import { FullWidthDiv, OpenH3, USGButton } from '../../css/styledComponents';
// import { connect } from 'react-redux';
// import { addLead } from '../../actions/leads';
// import { flash } from '../../actions/flash';
// import { setFlash } from '../../actions/flash';
// import { titleOptions, phoneTypeOptions, stateOptions } from './FormOptions.js';
import { titleOptions } from './FormOptions.js';
import { withRouter } from 'react-router-dom';


class PurchaseForm extends Component {
    state = { ethereum_address: '', qty_to_purchase: '', email: '' }

    handleSubmit = event => {
        event.preventDefault();
        const { ethereum_address, qty_to_purchase, email } = this.state;
        const { dispatch, history } = this.props;

        // TODO: better error checking
        if (false) {
            console.log('Please complete all fields');
        } else {


            let msg = JSON.stringify(this.state);
            let hash = window.web3js.utils.sha3(msg);
            console.log(hash);

            axios.post('/api/purchase', this.state)
                .then(function (res) {

                    //TODO: error handling

                    //TODO: tell user we will contact them shortly

                    console.log(res.data)

                    history.push('/purchasesuccess?key=' +res.data.key);
                    // window.usg.methods.redeem(qty_to_redeem,hash).send();

                })
                .catch( err => {
                    console.log(err);
                });
            this.setState({ ethereum_address: '', qty_to_purchase: '', email: '' });
        }
    }

    handleChange = event => {
        // use 'event' to grab the id off the element also the value and set state
        // const { id, value } = event.target;
        const id = event.target.id;
        const value = event.target.value;
        this.setState({ [id]: value });
        // console.log(this.state);
    }

    handleOptionChange = event => {
        const id = event.target.id;
        const value = event.target.value;
        this.setState({ [id]: value });
        // console.log(event.target);
        // console.log(event.target.value);
        // console.log(this.state);
    }
    componentDidMount =  () => {
        window.addEventListener("web3Complete", this.setWeb3);

    }

    setWeb3 = ()=>{

        if(window.needsMetamask) {

        }
        else {
            this.setState({
                ethereum_address: window.acct
            });
        }
    };
    render() {
        const { ethereum_address, qty_to_purchase, email } = this.state;

        return (
            <FullWidthDiv topColor='#fff' bottomColor='#ddd' id={4}>

        <Container>

        <Form onSubmit={this.handleSubmit}>
    <Grid padded>

        <Grid.Row>
        <Grid.Column width={8}>
            <Form.Field>
            <input
        type='number'
        min='1'
        id='qty_to_purchase'
        placeholder='Quantity To Purchase'
        required
        value={qty_to_purchase}
        onChange={this.handleChange}
        />
        </Form.Field>
        </Grid.Column>
        <Grid.Column width={8}>
            <Form.Field>
            <input
        id='email'
        placeholder='Email Address'
        required
        value={email}
        onChange={this.handleChange}
        />
        </Form.Field>
        <Form.Field>
        <input type='hidden'
        id='ethereum_address'
        placeholder='Ethereum Address'
        required
        value={ethereum_address}
        onChange={this.handleChange}
        />
        </Form.Field>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        <Segment basic textAlign='center'>
            <USGButton type='submit'>Submit</USGButton>
            </Segment>
            </Form>
            </Container>

            </FullWidthDiv>
    );
    }
}

export default withRouter(PurchaseForm);
