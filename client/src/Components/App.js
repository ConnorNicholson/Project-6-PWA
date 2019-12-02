import React from 'react';
import '../lib/css/styles.css';

import httpClient from '../httpClient';

// import Home from './Home';
// import Products from './Products';
// import Contact from './Contact';
import NavBar from './NavBar';

const PORT = process.env.PORT || 3001

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Temporary fix for Heroku:
      fetchEndpoint: `https://reactjs-proj5-authentication.herokuapp.com/api/products`,
      // Temporary fix for local:
      // fetchEndpoint: 'http://localhost:3001/api/products',
      allProducts: [],
      everything: true,
      telescopes: false,
      sextants: false,
      belowThousand: false,
      currentUser: httpClient.getCurrentUser()
    };
  };

  // This function will fetch an endpoint stored in the fetchEndpoint state, then it will return the appropriate data and set the state of allProducts to equal the returned data.

  fetchSpecificEndpoint = () => {
    fetch(this.state.fetchEndpoint)
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
      allProducts: data
    })})
    .catch(function(error) {
      console.log(error)
    })
  };

  // As soon as the application loads, execute the fetchSpecificEndpoint function, returning the data from the current endpoint stored in the fetchEndpoint state: 'http://localhost:3001/api/products'

  componentDidMount() {
    this.fetchSpecificEndpoint()
  };

  // When the application updates (for instance the state changes) componenetDidUpdate will re-render
  componentDidUpdate(oldProps, oldState) {
    if (this.state.everything !== oldState.everything || 
      this.state.telescopes !== oldState.telescopes || 
      this.state.sextants !== oldState.sextants || 
      this.state.belowThousand !== oldState.belowThousand) {
      this.fetchSpecificEndpoint()
    }
  }

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  viewEverything = () => {
    this.setState({
        // Temporary fix for Heroku:
        fetchEndpoint: `https://reactjs-proj5-authentication.herokuapp.com/api/products`,
        // Temporary fix for local:
        // fetchEndpoint: 'http://localhost:3001/api/products',
        everything: true,
        telescopes: false,
        sextants: false,
        belowThousand: false
    })
}

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  telescopes = () => {
    this.setState({
        fetchEndpoint: `${PORT}/api/productfilter/telescopes`,
        everything: false,
        telescopes: true,
        sextants: false,
        belowThousand: false
    })
}

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  sextants = () => {
    this.setState({
        fetchEndpoint: `${PORT}/api/productfilter/sextants`,
        everything: false,
        telescopes: false,
        sextants: true,
        belowThousand: false
    })
}

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  belowThousand = () => {
    this.setState({
        fetchEndpoint: `${PORT}/api/productprice/lowprice`,
        everything: false,
        telescopes: false,
        sextants: false,
        belowThousand: true
    })
}

//--------AUTHENTICATION---------//

onLoginSuccess = (user) => {
  this.setState({
    currentUser: httpClient.getCurrentUser()
  })
}

logOut = () => {
  httpClient.logOut()
  this.setState({
    currentUser: null
  })
}

//--------RENDER---------//

  render() {
    
    const { currentUser } = this.state
    console.log(this.state.currentUser)

    return (
      <div className='App_container'>
      <NavBar 
          allProducts={(this.state.allProducts)} 
          viewEverything={this.viewEverything} 
          telescopes={this.telescopes} 
          sextants={this.sextants} 
          belowThousand={this.belowThousand}
          currentUser={this.state.currentUser}
          onLoginSuccess={this.onLoginSuccess}
          onLogOut={this.logOut}
          onSignUpSuccess={this.onLoginSuccess}
        />

        {/* <Switch> */}
         {/* <Route path="/login" render={(props) => {
           return <LogIn {...props}
           onLoginSuccess={this.onLoginSuccess} />
         }}/> */}

         {/* <Route path="/logout" render={(props) => {
           return <LogOut onLogOut={this.logOut} />
         }}/> */}

         {/* The sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
         {/* <Route path="/signup" render={(props) => {
           return <SignUp {...props}
           onSignUpSuccess={this.onLoginSuccess} />
         }}/> */}
         
         {/* <Route path="/" render={() => {
           return currentUser ? <Home/> : <Redirect to="/login" />
         }}/>

         <Route path="/" component={Home} />

        </Switch> */}
      </div>
    );
  };
};
export default App;
