import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import { NavSpacer } from '../css/styledComponents.js';
import Login from './Login';
import Register from './Register';
import AccountNew from './AccountNew';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import Admin from './Admin';
import Token from './Token';
import Contact from './Contact';
import Wallet from './Wallet';
import Redeem from './Redeem';
import Purchase from './Purchase';
import Resources from './Resources';
import Success from './Success';
import RegistrationPending from './RegistrationPending';
import Profile from './Profile';
import USMint from './USMint';
import Fincen from './Fincen';
// import Terms from './Terms';
import Privacy from './Privacy';
import Dashboard from './Dashboard';
import Leads from './Leads';
import Users from './Users';
import UserAgreement from './UserAgreement';
import PurchaseSuccess from './PurchaseSuccess';
import TokenPurchaseAgreement from './TokenPurchaseAgreement';
// import FormWrap from './FormValidationEg';
import ReactTrackDemo from './ReactTrackDemo';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/fonts.css';
import '../css/semantic-ui/semantic.min.css';
import Ticker from './partials/CryptoTicker';



class App extends Component {

  constructor(props){
    super(props);

  }

  render() {
     // console.log(this.context.router.location.pathname)
      console.log(this);


    return (
      <div>

        <Ticker />
        <NavBar />
        <NavSpacer />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/about' component={About} />
            <Route path='/token' component={Token} />
            <Route path='/contact' component={Contact} />
            <Route path='/wallet' component={Wallet} />
            <Route path='/redeem' component={Redeem} />
            <Route path='/purchase' component={Purchase} />
            <Route path='/resources' component={Resources} />
            <Route path='/success' component={Success} />
            <Route path='/usmint' component={USMint} />
            <Route path='/fincen' component={Fincen} />
            <Route path='/privacy' component={Privacy} />
            <Route path='/purchasesuccess' component={PurchaseSuccess} />
            <Route path='/token-purchase-agreement' component={TokenPurchaseAgreement} />
            <Route path='/user-agreement' component={UserAgreement} />
            {/* <Route path='/form-validation-eg' component={FormWrap} /> */}


            <Route exact path='/register' component={AccountNew} />
            <Route exact path='/registration-pending' component={RegistrationPending} />

            <AuthRoute exact path='/login' component={Login} />
            {/* <Route exact path='/register2' component={AccountNew} /> */}
            <ProtectedRoute path='/leads' component={Leads} />
            <ProtectedRoute path='/users' component={Users} />
            <ProtectedRoute path='/profile/*' component={Profile} />
            <ProtectedRoute path='/dashboard/*' component={Dashboard} />
            <Route component={Home} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
