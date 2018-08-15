import React from 'react';
import { Grid } from 'semantic-ui-react';

const User = ({ id, created_at, first_name, last_name, email }) => (
  <Grid>
    <Grid.Column width={3}><Grid.Row>{created_at}</Grid.Row></Grid.Column>
    <Grid.Column width={2}><Grid.Row>{first_name}</Grid.Row></Grid.Column>
    <Grid.Column width={2}><Grid.Row>{last_name}</Grid.Row></Grid.Column>
    <Grid.Column width={2}><Grid.Row>{email}</Grid.Row></Grid.Column>
  </Grid>
)


export default User;
