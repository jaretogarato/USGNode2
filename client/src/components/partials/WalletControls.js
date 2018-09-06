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

import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';

import { withRouter } from 'react-router-dom';
class WalletBalance extends Component {
    state = { ethereum_address: '', usg_balance: '...'}



    componentDidMount =  () => {
        window.addEventListener("web3Complete", this.setWeb3);

    }


    render() {
        const { ethereum_address, usg_balance } = this.state;


        return (
            <HhInnerContainer>
            <HhTextContainer>

            <HhH1>{this.props.title}</HhH1>
        <br />
        <HhH4>
        Your balance
        </HhH4>
        <HhH1>
        <Img src={USGoldToken} width={60} height={60} /> {usg_balance} USG
        </HhH1>
        <HhH4>
        {ethereum_address}
        </HhH4>
        </HhTextContainer>
        <Fade>
        <HhImageContainer bgImage={USGoldToken} />
        </Fade>
        </HhInnerContainer>
    );
    }
}

export default withRouter(WalletBalance);