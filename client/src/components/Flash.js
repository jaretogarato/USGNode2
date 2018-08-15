import React from 'react';
import { connect } from 'react-redux';
import { Message, Container, Header, Segment, Grid } from 'semantic-ui-react';
import { clearFlash } from '../actions/flash';
import '../css/flash.css';

const fadeFlash = dispatch => {
  setTimeout(() => {
    dispatch(clearFlash());
  }, 15000);
};

const Flash = ({ flash, dispatch }) => {
  if (flash.message) {
    return (
      // <Container style={styles.flashMessage}>
      <Grid className='flashGrid' stackable>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={9}>
            <Container className='flashMessage'>
              <Message
                onDismiss={() => dispatch(clearFlash())}
                color={flash.color}
              >
                <Header as='h5' textAlign='center'>{flash.message}</Header>
                  {fadeFlash(dispatch)}
              </Message>
            </Container>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return null;
};

const mapStateToProps = state => {
  const { flash } = state;
  return { flash };
};

export default connect(mapStateToProps)(Flash);
