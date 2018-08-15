import React from 'react';
import { Segment, Image, Container, Grid, Icon, List } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
import '../../css/inlineStyles.js';
// import LogoMed from '../../assets/images/ims-logo-med.png';

class HeroHeaderPartial extends React.Component {
  render() {
    return (
      <div>
        <Container fluid style={inlineStyles.darkGrayBg}>
          <Grid padded stackable>
            <Grid.Row>
              <Grid.Column width={16}>
                yoyoyo
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HeroHeaderPartial;
