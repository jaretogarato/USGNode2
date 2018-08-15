import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import { inlineStyles } from '../../css/inlineStyles';
// import '../../css/inlineStyles.js';
// import LogoMed from '../../assets/images/ims-logo-med.png';

class BBB extends React.Component {
  render() {
    return (
      <div style={styles.scoochLeft}>
        <Container fluid align="center">
          <Image
            src="https://seal-utah.bbb.org/seals/gray-seal-200-42-whitetxt-bbb-90014432.png"
            as="a"
            href="https://www.bbb.org/utah/business-reviews/bullion-coin-dealers/us-gold-in-salt-lake-cty-ut-90014432/#sealclick"
            target="_blank"
            rel="noopener noreferrer"
            alt="US GOLD BBB Business Review"
          />
            {/* <a href="https://www.bbb.org/utah/business-reviews/bullion-coin-dealers/us-gold-in-salt-lake-cty-ut-90014432/#sealclick" target="_blank" rel="nofollow"><img src="https://seal-utah.bbb.org/seals/darkgray-seal-250-52-bbb-90014432.png" style="border: 0;" alt="US GOLD BBB Business Review" /></a> */}

        </Container>
      </div>
    )
  }
}
const styles = {
  scoochLeft: {
    marginLeft: '-17px',
  },
}

export default BBB;
