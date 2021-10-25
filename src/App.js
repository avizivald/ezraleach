import react from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.config';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/Header';
import drogAndDrop from './components/drog-and-drop/drog-and-drop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import ExmpleForAnimationComponents from './pages/ExmpleForAnimationComponents/ExmpleForAnimationComponents';
// import FiveCellGrid from './pages/GridTamplates/FiveCellGrid/FiveCellGrid';
import SelectPlacesFromGoogle from './components/select-places-from-google/select-places-from-google';
import GivesDayTimesByCoordinates from './components/Gives-day-times-by-coordinates/Gives-day-times-by-coordinates'


class App extends react.Component {

  unsubscribeFormAuth = null;

  componentDidMount() {
    console.log(this.props);
    const { setCurrentUser } = this.props;

    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={SignInAndSignUpPage} />
          <Route exact path="/drogAndDrop" component={drogAndDrop} />
          {/* <Route exact path="/FiveCellGrid"  component ={FiveCellGrid} /> */}
          <Route exact path="/Exmple" component={ExmpleForAnimationComponents} />
          <Route exact path="/selectPlace" component={GivesDayTimesByCoordinates} />
        </Switch>
      </div>
    );
  }

}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(App);
