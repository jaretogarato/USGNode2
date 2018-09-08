import React, { Component } from 'react';

import {
    HeroHeader, HhInnerContainer, HhTextContainer,
    HhImageContainer, HhH1, HhH2, HhH3,  HhH4,
    FullWidthDiv, FullWidthBgDiv,
    FlexRowContainer,
    OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
    BorderedDiv, BorderedDivHead, BorderedDivBody,
    HoverCenterDiv, HoverCenterDivWrap,
    DividerGrayGrad, VerticalSpacer,
    HrOrange,
    USGButton,
} from '../../css/styledComponents';
import Img from './Img';

import { Header, Form, Button, Segment, Dropdown, Grid, Container, TextArea, Modal } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';

import { withRouter } from 'react-router-dom';
class WalletControls extends Component {
    state = { pw: '', words: ''};



    componentDidMount =  () => {
        window.addEventListener("web3Complete", this.setWeb3);

    }


    restoreWallet(){}
    lockWallet(){}
    forgetWallet(){

        if(window.wallet != undefined && window.wallet != null){

            window.wallet.remove();
            if (!window.confirm("are you sure you want to forget this wallet? This cannot be undone (your funds will be safe, but you will have to recover the wallet later")) {
                return;
            }
            window.wallet = null;
        }
    }
    backupWallet(){}
    createWalletSubmit = async ( event) => {

        if(window.wallet != undefined && window.wallet != null){

            if (!window.confirm("are you sure you want to make a new wallet? this will overwrite your currently loaded wallet (your funds will be safe, but you will have to recover the wallet later")) {
                return;
            }

            window.wallet.clear();

            window.wallet = null;
        }

        let entropy = this.state.words + Date.now() + this.state.pw;
        window.wallet = window.web3js.eth.accounts.wallet.create(1,entropy);
        console.log(window.wallet)
        window.acct = window.wallet[0].address;

       window.wallet.save(this.state.pw);
       //TODO: download backup file

        //TODO: refresh page
       // console.log(acct)
        console.log(window.web3js.eth.accounts)
        event.preventDefault();

    }
    handleChange = event => {
        // use 'event' to grab the id off the element also the value and set state
        // const { id, value } = event.target;
        const id = event.target.id;
        const value = event.target.value;
        this.setState({ [id]: value });
        console.log(this.state);
    }
    render() {
        const { pw,words } = this.state;



        let inlineStyle = {
            modal : {
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:'auto',
                marginBottom:'auto'

            },
            header: {

            },
            content: {

            },
            input:{
                margin:'5px'
            }

        };

        return (

                <Grid padded >
                    <Grid.Row >
                        <Grid.Column>
                            <h2>Wallet Settings</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="noWallet"  >
                        <Grid.Column width={4}>
                            <Modal style={inlineStyle.modal} className={"modal-dialog-centered"} trigger={ <USGButton onClick={this.createWallet} >Create</USGButton>}>

                                <Modal.Content style={inlineStyle.content} >
                                    <Modal.Description>
                                        <Header>Disclaimer</Header>
                                        <p>[[[[[[[[[INSERT DISCLAIMER HERE]]]]]]]]]]</p>
                                        <p>Information provided by you and the private keys generated from the information will never be transmitted to us, it will only be done on your device.</p>
                                        <Header>Create Wallet</Header>
                                        <Form onSubmit={this.createWalletSubmit}>
                                            <input value={pw} id={"pw"} name={"pw"} type={'password'} placeholder={"Password"}
                                                   onChange={this.handleChange} />
                                            <br />
                                            <input id={"words"} name={"words"}  value={words} placeholder={"3 random words you see nearby (you do not need to remember these"}
                                                   onChange={this.handleChange} />
                                            <USGButton type='submit'>Submit</USGButton>
                                        </Form>

                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                        <Grid.Column >
                            <USGButton onClick={this.restoreWallet} >Restore</USGButton>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="walletLock">
                        <Grid.Column width={4}>
                            <USGButton onClick={this.lockWallet} >Lock</USGButton>
                        </Grid.Column>
                        <Grid.Column >
                            <USGButton onClick={this.unlockWallet} >Unlock</USGButton>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="walletUnlocked">
                        <Grid.Column  width={4}>
                            <USGButton onClick={this.forgetWallet} >Forget</USGButton>
                        </Grid.Column>
                        <Grid.Column >
                            <USGButton onClick={this.backupWallet} >Backup</USGButton>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
    );
    }
}

export default withRouter(WalletControls);