import react from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import { auth ,createUserProfileDocument} from './firebase/firebase.config';

import Header from './components/header/Header';
import drogAndDrop from './components/drog-and-drop/drog-and-drop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import ExmpleForAnimationComponents from './pages/ExmpleForAnimationComponents/ExmpleForAnimationComponents';
import FiveCellGrid from './pages/GridTamplates/FiveCellGrid/FiveCellGrid';
import SelectPlacesFromGoogle from './components/select-places-from-google/select-places-from-google';
import GivesDayTimesByCoordinates from './components/Gives-day-times-by-coordinates/Gives-day-times-by-coordinates'


class App extends react.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFormAuth = null;
  componentDidMount() {
    console.log('props', this.props);
    console.log('ComponentDidMount');
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        console.log('userAuth ==\n',userAuth);
        this.setState({ currentUser: userAuth }, () => console.log(this.state))

        const userRef = await createUserProfileDocument(userAuth);
console.log('userRef ==\n',userRef);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      }
      else {
        this.setState({ currentUser: userAuth }, () => console.log(this.state))
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  render() {
    return (
  <div className='App'> 
            <Header currentUser = {this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component ={SignInAndSignUpPage} />
                    <Route exact path="/drogAndDrop" component ={drogAndDrop} />
                    <Route exact path="/FiveCellGrid"  component ={FiveCellGrid} />
                    <Route exact path="/Exmple"  component ={ExmpleForAnimationComponents} />
                    <Route exact path="/selectPlace"  component ={GivesDayTimesByCoordinates} />
                </Switch>
       </div> 
    );
  }

}

export default App;
