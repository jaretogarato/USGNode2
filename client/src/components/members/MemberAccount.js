import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Header,
  Image,
  Menu,
  Segment,
  Dropdown,
} from 'semantic-ui-react';
import { handleLogout } from '../../actions/auth';


class MemberAccount extends React.Component {

  trigger = () => (
    <Segment basic>
      <Menu.Item style={styles.navText}>
        {/* <Header as='h5' style={styles.header} textAlign='center'>Account</Header> */}
        Account
      </Menu.Item>
    </Segment>
  )

  render() {
    const { user, dispatch } = this.props
    return(
      <Dropdown trigger={this.trigger()} pointing='top right' icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item
            to={`/dashboard/`}
            text='Dashboard'
            as={Link}
          />
          <Dropdown.Item
            to={`/profile/${user.id}`}
            text='Profile'
            as={Link}
          />
          <Dropdown.Item
            text='Log out'
            name="Logout"
            style={styles.navText}
            onClick={() => dispatch(handleLogout(this.props.history))}
          />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const styles = {
  image: {
    borderRadius: '50%',
    width: '2.5rem',
    height: '2.5rem',
    border: '1px solid white',
  },
  header: {
    marginTop: '0',
    fontWeight: '500',
    color: '#fff',
    padding: '18px 0 0 5px',
  },
  segment: {
    padding: '0',
  },
  dropdown: {
    marginTop: '20px',
  },
  whiteText: {
    color: 'white',
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(MemberAccount));
