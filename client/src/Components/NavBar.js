import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import LogIn from './LogIn';
import LogOut from './LogOut';
import SignUp from './SignUp';

const NavBar = (props) => {
    const { allProducts, viewEverything, telescopes, sextants, belowThousand, currentUser, onLoginSuccess, onLogOut, onSignUpSuccess } = props
    console.log(props) 
    return (
      <Router>
          {currentUser
            ? (
              <div>
                <ul className="navbar fixed-top justify-content-center">
                  <li className="nav-link">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/logout">LogOut</Link>
                  </li>
                </ul>
                <Route exact path="/" component={Home} />
                <Route path="/products" render={(props) => <Products {...props} allProducts={allProducts} viewEverything={viewEverything} telescopes={telescopes} sextants={sextants} belowThousand={belowThousand}/>}/>
                <Route path="/contact" component={Contact} />
                <Route path="/logout" render={(props) => <LogOut {...props} onLogOut={onLogOut}/>} />
              </div>
            )
            : (
              <div>
                <ul className="navbar fixed-top justify-content-center">
                  <li className="nav-link">
                    <Link to="/login">Log In</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/">Home</Link>
                  </li>
                </ul>
                <Route path="/login" render={(props) => <LogIn {...props} onLoginSuccess={onLoginSuccess}/>}/>
                <Route path="/signup" render={(props) => <SignUp {...props} onSignUpSuccess={onSignUpSuccess}/>}/>
                <Route exact path="/" component={Home}/>
              </div>
  
            )
          }
      </Router>
    )
}

export default NavBar