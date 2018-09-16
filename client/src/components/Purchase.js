import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import SubmitForm from './partials/SubmitForm';
import Fade from 'react-reveal/Fade';
import WalletBalance from './partials/WalletBalance';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import {
    HeroHeader, HhInnerContainer, HhTextContainer,
    HhImageContainer, HhH1, HhH2,HhH3, HhH4,
    FullWidthDiv, FullWidthBgDiv,
    FlexRowContainer,
    OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
    BorderedDiv, BorderedDivHead, BorderedDivBody,
    HoverCenterDiv, HoverCenterDivWrap,
    DividerGrayGrad, VerticalSpacer,
    HrOrange,
    USGButton,
} from '../css/styledComponents';
import PurchaseForm from "./partials/PurchaseForm";

class Contact extends Component {
    render() {
        return (
            <Container fluid>
        <HeroHeader bgImage={TopBg}>
            <Container>
                <WalletBalance title='Purchase USG' />
                <div style={{"marginTop":"-50px"}}>
                    <HhH2>Call +1.800.673.5800</HhH2>
                    <HhH3>or fill out the form below</HhH3>
                </div>
            </Container>
        </HeroHeader>

        <Grid padded>
        <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
            <OpenH3>
            Purchase USG
        </OpenH3>
        <OpenH4>
            Fill out the following information and we will provide you with further instructions
        </OpenH4>
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
            </Grid>

            <PurchaseForm />


            <Footer />
            </Container>
    );
    }
}

export default Contact;
