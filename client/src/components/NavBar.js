import React, { Component } from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { handleLogout } from '../actions/auth';
// import { inlineStyles } from '../css/inlineStyles';
import { NavStyled, NavLinks } from '../css/styledComponents';
import NavLink from './NavLink';
import MemberAccount from './members/MemberAccount';
import LogoImage from '../assets/images/us-gold-logo.png';
import LogoImageNew from '../assets/images/usg-currency-logo-horizontal.png';
import '../css/fonts.css';
import '../css/styles.css';
import '../css/semantic-ui/semantic.min.css';
import Img from './partials/Img';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../css/navbar.css';

class NavBar extends Component {
  state = { transform: 0.0, navBgOpacity: 1.0, navBgHeight: 100, currentRoute: '/', showNav: false };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, 0);
    this.getRoute();
    this.setState({ showNav: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState ({ showNav: window.pageYOffset <= 100 ? true : false });
  }

  getRoute = () => {
    var currentRoute = this.props.location.pathname;
    this.setState({
      currentRoute: currentRoute,
    });
  }

  isRouteCurrent = (route) => {
    if (this.state.currentRoute === route){
      return('yes');
    } else {
      return('no');
    }
  }

  showHideNav = () => {
    return(
      <Fade when={this.state.showNav}>
        <div className='navWrap'>
          <div className='navLogo'>
            <a href="/" alt="US Gold Currency">
              {/* <Img src={LogoImage} width={240} height={60} marginTop='24px' /> */}
              <Img src={LogoImageNew} width={240} height={60} marginTop='24px' />
            </a>
          </div>
            { this.mainNavs() }
            { this.memberNavs() }
        </div>
      </Fade>
    )
  }

  mainNavs = () => {
    const { user: { id, is_admin } } = this.props;

    return(
      <NavLinks navOpacity={this.state.navBgOpacity} marginTop='28px'>
        {/* <Header as='h1'>user: {user}</Header> */}
        {/* <Header as='h1'>ID: {id ? id : `no id`}</Header> */}
        <NavLink name='Home' to='/' isCurrent={this.isRouteCurrent('/')} />
        <NavLink name='About' to='/about' isCurrent={this.isRouteCurrent('/about')} />
        {/* <NavLink name='Services' to='/services' isCurrent={this.isRouteCurrent('/services')} /> */}
        <NavLink name='Token' to='/token' isCurrent={this.isRouteCurrent('/token')} />
        <NavLink name='Purchase' to='/purchase' isCurrent={this.isRouteCurrent('/purchase')} />
        <NavLink name='Wallet' to='/wallet' isCurrent={this.isRouteCurrent('/wallet')} />
        <NavLink name='Redeem' to='/redeem' isCurrent={this.isRouteCurrent('/redeem')} />
        <NavLink name='Contact' to='/contact' isCurrent={this.isRouteCurrent('/contact')} />
        {/* <NavLink name='Media' to='/mediakit' isCurrent={this.isRouteCurrent('/mediakit')} /> */}
        <NavLink name='Resources' to='/resources' isCurrent={this.isRouteCurrent('/resources')} />
        {/* <p>{this.props.user.id ? this.props.user.id : "nothing here"}</p> */}
      </NavLinks>
    )

  }


  memberNavs = () => {
    const { user: { id, is_admin } } = this.props;

    if (id) {
      // if (is_admin) {
      //   return(
      //     <Menu.Menu style={styles.navbarPrimary} position='right'>
      //       <Menu.Item
      //         as={Link}
      //         to='/courses'
      //         style={styles.navText}
      //         name="Courses"
      //         active={this.state.activeItem === 'Courses'}
      //         onClick={this.handleItemClick}
      //       />
      //       <Menu.Item style={styles.menuStyle}>
      //         <MemberAccount />
      //       </Menu.Item>
      //     </Menu.Menu>
      //   );
      // }

      return(
        <Menu.Menu style={styles.navbarPrimary} position='right'>
           {/* <Dropdown item text='My Stuff' style={styles.navText}>
            <Dropdown.Menu style={styles.dropdown}>
              { this.renderCourseSections() }
            </Dropdown.Menu>
            <Dropdown.Menu style={styles.dropdown}>
              <h3>a</h3>
              <h3>b</h3>
              <h3>c</h3>
              <h3>d</h3>
            </Dropdown.Menu>
          </Dropdown> */}

          <Menu.Item style={styles.menuStyle}>
            <MemberAccount />
          </Menu.Item>

        </Menu.Menu>
      )
    }

    return (
      <Menu.Menu style={styles.navbarPrimary} position='right'>

      </Menu.Menu>
    );
  }

  render() {
    return (
      <Container >
        {/* <NavStyled navOpacity={this.state.navBgOpacity}> */}
        {/* <NavStyled navOpacity={1}>
          <a href="/" alt="US Gold Currency">
            <Img src={LogoImage} width={240} height={60} marginTop='14px'/>
          </a>
          { this.mainNavs() }
          { this.memberNavs() }
        </NavStyled> */}
        { this.showHideNav() }
      </Container>
    )
  }
}

const styles = {
  navbarWrap: {
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  },
  dropdown: {
    width: '21vw',
    overflow: 'auto',
  },
  navText: {
    color: '#fff',
    paddingBottom: '1.178rem',
    border: 'none',
  },
  navbarPrimary: {
    border: 'none',
  },
  menuStyle: {
    paddingBottom: '0px',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
