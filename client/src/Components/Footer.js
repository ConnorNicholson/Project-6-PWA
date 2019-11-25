import React from 'react';
import '../lib/css/styles.css'


function Footer() {
  return (
    <div className="Footer">
      
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-4">
              <h3>Follow Us!</h3>
              <ul className="list-inline">
                  <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i>{null}</a></li>
                  <li className="list-inline-item"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i>{null}</a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i>{null}</a></li>
                  <li className="list-inline-item"><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest-p fa-2x" aria-hidden="true"></i>{null}</a></li>
                  <li className="list-inline-item"><a href="https://aboutme.google.com/u/0/?referer=gplus&pli=1" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-2x" aria-hidden="true"></i>{null}</a></li>
                  <li className="list-inline-item"><a href="https://rss.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-rss fa-2x" aria-hidden="true"></i>{null}</a></li>
                </ul>
                  <div>
                    <p>&copy; 2019 Designed by AstroTech</p>
                  </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <h3>Keep in Touch:</h3>
              <ul className="list-unstyled">
                <li><p><strong><i className="fa fa-map-marker"></i> Address:</strong> Location, Street, Code</p></li>
                <li><p><strong><i className="fa fa-envelope" aria-hidden="true"></i> Email:</strong> <a href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" rel="noopener noreferrer">info@randomemail.com</a></p></li>
                <li><p><strong><i className="fa fa-phone" aria-hidden="true"></i> Phone:</strong> +01 999 999 9999</p></li>
              </ul>
              <div>
                <a href="http://jigsaw.w3.org/css-validator/check/referer" target="_blank" rel="noopener noreferrer">
                  <img src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;