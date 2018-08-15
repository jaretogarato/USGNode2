import React, { Component } from 'react';
import axios from 'axios';
import { Header, Form, Button, Segment, Dropdown, Grid, Container, TextArea } from 'semantic-ui-react';
import { FullWidthDiv, OpenH3, USGButton } from '../../css/styledComponents';
// import { connect } from 'react-redux';
// import { addLead } from '../../actions/leads';
// import { flash } from '../../actions/flash';
// import { setFlash } from '../../actions/flash';
import { inlineStyles } from '../../css/inlineStyles.js';
// import { titleOptions, phoneTypeOptions, stateOptions } from './FormOptions.js';
import { titleOptions } from './FormOptions.js';
import { withRouter } from 'react-router-dom';


class PurchaseForm extends Component {
  state = { title: '', first_name: '', last_name: '', phone: '', email: '', message: '', ethereum_address: '' }

  handleSubmit = event => {
    event.preventDefault();
    const { title, first_name, last_name, phone, email } = this.state;
    const { dispatch, history } = this.props;

    // TODO: better error checking
    if (first_name === '' || last_name === '') {
      console.log('Please complete all fields');
    } else {
      axios.post('/api/leads', this.state)
      .then(function (res) {
        history.push('/success');
      })
      .catch( err => {
        console.log('Failed to add contact');
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

  render() {
    const { title, first_name, last_name, phone, email, message, ethereum_address } = this.state;

    return (
      <FullWidthDiv topColor='#fff' bottomColor='#ddd' id={4}>
        <Container>
          {/* <Grid padded>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
                <OpenH3>
                  Send us your questions or comments, and someone will be in touch with you as soon as possible.
                </OpenH3>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid> */}

          <Form onSubmit={this.handleSubmit}>
            <Grid padded>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Form.Field>
                    <input
                      id='first_name'
                      placeholder='First Name'
                      required
                      value={first_name}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Form.Field>
                    <input
                      id='last_name'
                      placeholder='Last Name'
                      required
                      value={last_name}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={9}>
                  <Form.Field>
                    <input
                      id='email'
                      placeholder='Email'
                      required
                      value={email}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Form.Field>
                    <input
                      id='phone'
                      placeholder='Phone'
                      required
                      value={phone}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Form.Field>
                    <input
                      id='ethereum_address'
                      placeholder='Ethereum Address'
                      required
                      value={ethereum_address}
                      onChange={this.handleChange}
                    />
                  </Form.Field>

                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Form.Field
                    id='message'
                    placeholder='Enter your message here...'
                    value={message}
                    control={TextArea}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment basic textAlign='center'>
              <USGButton type='submit'>Submit</USGButton>
              <br /><br />
            </Segment>
          </Form>
        </Container>
      </FullWidthDiv>
    );
  }
}

export default withRouter(PurchaseForm);
