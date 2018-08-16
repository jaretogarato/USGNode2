import React, { Component } from 'react';

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
} from '../../css/styledComponents';
import Img from './Img';

import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';

import { withRouter } from 'react-router-dom';
class WalletBalance extends Component {
  state = { ethereum_address: '...', usg_balance: '...' }
  
  
  
   componentDidMount =  () => {
      
     // initWeb3();
    
      window.addEventListener("web3Complete", this.x);
      //console.log((await web3js.eth.getAccounts())[0]);
      
  }
  x = ()=>{
    console.log(window.web3js);  
    console.log(window.acct);  
      
       this.setState({
           ethereum_address: window.acct,
           usg_balance: window.bal
           });
      
  }
  
   render() {
       const { ethereum_address, usg_balance } = this.state;
       
       
       return (
        <HhInnerContainer>
              <HhTextContainer>
                <h4>
                Your Wallet
                </h4>
                <HhH1>
                  <Img src={USGoldToken} width={60} height={60} /> {usg_balance} USG
                </HhH1>
                <HhH2>
                    {ethereum_address}
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
            );
   }
}

export default withRouter(WalletBalance);