import React, {Component} from 'react';

import {
  HeroHeader,
  HhInnerContainer,
  HhTextContainer,
  HhImageContainer,
  HhH1,
  HhH2,
  HhH3,
  HhH4,
  FullWidthDiv,
  FullWidthBgDiv,
  FlexRowContainer,
  OpenH3,
  OpenH4,
  OpenP,
  OpenPSmall,
  OpenSpanGreen,
  OpenSpanRed,
  BorderedDiv,
  BorderedDivHead,
  BorderedDivBody,
  HoverCenterDiv,
  HoverCenterDivWrap,
  DividerGrayGrad,
  VerticalSpacer,
  HrOrange,
  USGButton
} from '../../css/styledComponents';
import Img from './Img';


import LogoImage from '../../assets/images/us-gold-logo.png';
import {
  Header,
  Form,
  Button,
  Segment,
  Dropdown,
  Grid,
  Container,
  TextArea,
  Modal
} from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';

import {withRouter} from 'react-router-dom';
let $ = require('jquery');
let jQuery = $;
let QRCode = require('qrcode')

//Returns true if it is a DOM element
window.isElement = (o)=>{
    return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
}


class WalletControls extends Component {
  state = {
    pw: '',
    words: '',
      pk: ''
  };

  readSingleFile(e) {

    let f = e.target.files[0];
    if (!f) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      // this.displayContents(contents);

      var element = document.getElementById('file');
      //element.textContent = contents;

      window.file = contents;
    };
    reader.readAsText(f);
  }
  componentDidMount = () => {
    window.addEventListener("web3Complete", this.setWeb3);
    /*document.getElementById('file')
            .addEventListener('change', this.readSingleFile, false);*/
  }

  lockWallet() {
    window.localStorage.removeItem('hasPW');
    window.localStorage.removeItem('pw');
    window.location.reload();
  }
  unlockWallet() {
    if (localStorage.getItem('hasAccount')) {
      let pw = window.prompt("input your password to unlock your wallet");
      window.wallet = window.web3js.eth.accounts.wallet.load(pw);
      window.localStorage.setItem('hasPW', true);
      window.localStorage.setItem('pw', pw);
      window.location.reload();
    }

  }
  forgetWallet() {

    if (window.wallet != undefined && window.wallet != null) {

      window.wallet.remove();
      if (!window.confirm("are you sure you want to forget this wallet? This cannot be undone (your funds will be safe, but you will have to recover the wallet later")) {
        return;
      }
      window.wallet = null;
      //set has account = false;
      window.localStorage.removeItem('hasAccount');
      window.localStorage.removeItem('hasPW');
      window.localStorage.removeItem('pw');
      window.location.reload();
    }
  }
  backupWallet() {
    let encryptedKeystore = window.wallet.encrypt(window.prompt("Password to encrypt the backup with: "));
    var a = window.document.createElement('a');
    let stringKetstore = JSON.stringify(encryptedKeystore);
    var blob = new Blob([stringKetstore], {type: 'text/csv'});
    a.href = window.URL.createObjectURL(blob);
    a.download = 'test.usg';

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);

  }
  createPaperWalletSubmit = async (event) => {
    event.preventDefault();

  }
  restoreWalletSubmit = async (event) => {
    event.preventDefault();
    const {pw, words, pk} = this.state;

      let file = null;



    //return;
    if (localStorage.getItem('hasAccount')) {

      if (!window.confirm("are you sure you want to restore a wallet? this will overwrite your currently loaded wallet (your funds will be safe, but you will have to recover the wallet later")) {
        return;
      }

      window.wallet.clear();
      window.localStorage.removeItem('hasPW');
      window.localStorage.removeItem('pw');
      window.localStorage.removeItem('hasAccount');
      window.wallet = null;
    }

      if(window.file === null || window.file === undefined || window.isElement(window.file)){
          console.log(this.state.pk)
        let account = window.web3js.eth.accounts.privateKeyToAccount(this.state.pk);
          window.web3js.eth.accounts.wallet.add(account);
          window.wallet = window.web3js.eth.accounts.wallet;

      }
      else  {
          file = JSON.parse(window.file);
          window.wallet = window.web3js.eth.accounts.wallet.decrypt(file, this.state.pw);
      }




    window.acct = window.wallet.address;

    window.wallet.save(this.state.pw);

    //let decryptedKeystore = window.wallet.decrypt(file, this.state.pw);

    // console.log(decryptedKeystore);

    window.localStorage.setItem('hasAccount', true);
    window.pw = this.state.pw;
    window.localStorage.setItem('hasPW', true);
    window.localStorage.setItem('pw', this.state.pw);

    window.location.reload();
  }

  createWalletSubmit = async (event) => {

    event.preventDefault();

    if (window.wallet != undefined && window.wallet != null) {

      if (!window.confirm("are you sure you want to make a new wallet? this will overwrite your currently loaded wallet (your funds will be safe, but you will have to recover the wallet later")) {
        return;
      }

      window.wallet.clear();

      window.wallet = null;
    }

    let entropy = this.state.words + Date.now() + this.state.pw;
    window.wallet = window.web3js.eth.accounts.wallet.create(1, entropy);
    console.log(window.wallet)
    window.acct = window.wallet[0].address;

    window.wallet.save(this.state.pw);

    let encryptedKeystore = window.wallet.encrypt(this.state.pw);
    var a = window.document.createElement('a');
    let stringKetstore = JSON.stringify(encryptedKeystore);
    var blob = new Blob([stringKetstore], {type: 'text/csv'});
    a.href = window.URL.createObjectURL(blob);
    a.download = 'test.usg';

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
    //set has account = true;
    window.localStorage.setItem('hasAccount', true);
    window.pw = this.state.pw;
    window.localStorage.setItem('hasPW', true);
    window.localStorage.setItem('pw', this.state.pw);
    window.location.reload();
  }
  handleChange = event => {
    // use 'event' to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({[id]: value});
    console.log(this.state);
  }


  async loadQrs(){


    console.log(window.wallet[0].privateKey);
      console.log(window.wallet[0].address);

     // $("#paperWalletPAQR").QRCode()

      let pk = await QRCode.toDataURL(window.wallet[0].privateKey);
      let pub = await QRCode.toDataURL(window.wallet[0].address);

      console.log(pk);
      console.log(pub);


      $("#paperWalletPKQR").append("<img src='"+ pk+"'>");
      $("#paperWalletPKQR").append("<p>"+ window.wallet[0].privateKey +"</p><br/><br/>");

      $("#paperWalletPAQR").append("<img src='"+ pub+"'>");
      $("#paperWalletPAQR").append("<p>"+ window.wallet[0].address+"</p><br/><br/>");

      $('body > :not(#paperWalletModal)').hide(); //hide all nodes directly under the body
      $('#instructions').hide();

      $('#paperWalletModal').css('width', "100%");
      $('#paperWalletModal').css('height', "100%");


  }
  render() {



    const {pw, words, file} = this.state;

    let inlineStyle = {
      modal: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
      },
      header: {},
      content: {},
      input: {
        margin: '5px'
      },
      buttonStyle: {
        width: "120px"
      }
    };

    return (<Grid padded="padded">
      <Grid.Row >
        <Grid.Column>
          <h2>Wallet Settings</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row id="noWallet">
        <Grid.Column width={4}>
          <Modal style={inlineStyle.modal} className={"modal-dialog-centered"} trigger={<USGButton style = {
              inlineStyle.buttonStyle
            }
            onClick = {
              this.createWallet
            } > Create</USGButton>}>

            <Modal.Content style={inlineStyle.content}>
              <Modal.Description>
                <Header>Disclaimer</Header>
                <p>Information provided by you and the private keys generated from the information will never be transmitted to us, it will only be done on your device. Any password you create when creating or returning to use your wallet containing a US Gold Currency – USG Token is solely the responsible of the creator (you) of the wallet. We are unable to assist in the recovery of any passwords or private keys in the event they become lost, and strongly recommend that you select a compliant provider of Cold-Storage services to hold a copy of your passwords and/or private keys in the event of such a loss.</p>
                <Header>Create Wallet</Header>
                <Form onSubmit={this.createWalletSubmit}>
                  <input value={pw} id={"pw"} name={"pw"} type={'password'} placeholder={"Password"} onChange={this.handleChange}/>
                  <br/>
                  <input id={"words"} name={"words"} value={words} placeholder={"3 random words you see nearby (you do not need to remember these"} onChange={this.handleChange}/>
                  <USGButton type='submit'>Submit</USGButton>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Grid.Column>
        <Grid.Column >
          <Modal style={inlineStyle.modal} className={"modal-dialog-centered"} trigger={<USGButton style = {
              inlineStyle.buttonStyle
            } > Restore</USGButton>}>

            <Modal.Content style={inlineStyle.content}>
              <Modal.Description>
                <Header>Disclaimer</Header>
                <p>Information provided by you and the private keys generated from the information will never be transmitted to us, it will only be done on your device. Any password you create when creating or returning to use your wallet containing a US Gold Currency – USG Token is solely the responsible of the creator (you) of the wallet. We are unable to assist in the recovery of any passwords or private keys in the event they become lost, and strongly recommend that you select a compliant provider of Cold-Storage services to hold a copy of your passwords and/or private keys in the event of such a loss.</p>
                <Header>Restore Wallet</Header>
                <Form onSubmit={this.restoreWalletSubmit}>
                  password:
                  <input value={pw} id={"pw"} name={"pw"} type={'password'} placeholder={"Password"} onChange={this.handleChange}/>
                  <br/>
                  <br />
                  backup file
                  <input onChange={this.readSingleFile} id={"file"} name={"file"} type={"file"}/>
                    <br />
                  OR restore from private key (used with paper wallets)
                    <input onChange={this.handleChange} id={"pk"} name={"pk"} type={"password"}/>
                  <USGButton type='submit'>Submit</USGButton>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row id="walletLock">
        <Grid.Column width={4}>
          <USGButton onClick={this.lockWallet} style={inlineStyle.buttonStyle}>Lock</USGButton>
        </Grid.Column>
        <Grid.Column >
          <USGButton onClick={this.unlockWallet} style={inlineStyle.buttonStyle}>Unlock</USGButton>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row id="walletUnlocked">
        <Grid.Column width={4}>
          <USGButton onClick={this.forgetWallet} style={inlineStyle.buttonStyle}>Forget</USGButton>
        </Grid.Column>
        <Grid.Column >
          <USGButton onClick={this.backupWallet} style={inlineStyle.buttonStyle}>Backup</USGButton>
        </Grid.Column>
      </Grid.Row>
        <Grid.Row id="walletUnlocked">
          <Grid.Column >
            <Modal id="paperWalletModal" style={inlineStyle.modal} className={"modal-dialog-centered"} trigger={<USGButton style = {
                    inlineStyle.buttonStyle
                } > Paper Wallet</USGButton>}>

              <Modal.Content style={inlineStyle.content}>
                <Modal.Description >
                    <h1> <Img src={LogoImage} width={240} height={60} />  US Gold Currency Paper Wallet</h1>
                    <Header>Disclaimer</Header>
                    <p>Keep this safe, this is everything necessary to control this wallet</p>
                </Modal.Description>


                  <Form onSubmit={this.createPaperWalletSubmit}>
                      <div id="instructions">
                        <p>If you are sure, press: </p>
                        <USGButton onClick={this.loadQrs} >Generate Paper Wallet</USGButton>
                      </div>
                      <div id="public">
                          <h3>Public Address</h3>
                          <p>Give this to anyone who might want to send you tokens</p>
                          <div id='paperWalletPAQR' ></div>
                      </div>


                      <div id="private">
                        <h3>Private Key</h3>
                        <p>Keep this safe from prying eyes</p>
                        <div id='paperWalletPKQR' ></div>
                      </div>

                      <h4>Please print this page, then refresh your browser</h4>

                  </Form>
              </Modal.Content>
            </Modal>
          </Grid.Column>
      </Grid.Row>
    </Grid>);
  }
}

export default withRouter(WalletControls);
