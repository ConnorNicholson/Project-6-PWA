import React from 'react';
import ContactsDisplay from './ContactsDisplay'
import Footer from './Footer';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {},
            contacts: []
        };
    };

    fetchContacts = () => {
      fetch('http://localhost:5000/api/contacts')
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
        contacts: data
      })})
      .catch(function(error) {
        console.log(error)
      });
    };

    componentDidMount() {
      this.fetchContacts()
    };

    render() {

        // Arrow function 'handleChange'. This function is used to handle the input in the form below. Sets a variable 'fields' to equal 'this.state.fields'. Then sets 'fields[e.target.name]' to equal the target value. Last, the state of fields is set to the variable fields

        let handleChange = (e) => {
            let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
            this.setState({
              fields
            });
          };

        // Arrow function 'submitUserRegistrationForm'. First it cancels the event if it is cancelable, meaning the submit button will not automatically 'submit'. Then checks if the 'validateForm' function passed. If it passed, create a variable called fields and set it to an empty object. Then use bracket notation to set 'fields.username', 'fields.email', 'fields.subject' and 'fields.comment' to empty strings. Last, set the state of fields to equal the fields object.

        let submitUserRegistrationForm = (e) => {
            e.preventDefault();
            if (validateForm()) {
                let fields = {};
                fields["username"] = "";
                fields["email"] = "";
                fields["subject"] = "";
                fields["comment"] = "";
                this.setState({fields:fields});
            };
          };

        // Arrow function 'validateForm'.

        let validateForm = () => {

            // Sets 3 variables: 'fields', 'errors', and 'formIsValid'. 

            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            // If 'fields.username' was not filled out correctly, then set 'formIsValid' to false and set the 'errors' property of 'username' to a string.
      
            if (!fields["username"]) {
              formIsValid = false;
              errors["username"] = "*Please enter your username.";
            };

            // If the type of 'fields.username' is not equal to undefined, then checks if it does not match the Regex pattern. If 'fields.username' does not pass the Regex pattern, then set 'formIsValid' to false and set the 'email' property of the 'errors' object to a string.

            if (typeof fields["username"] !== "undefined") {
              if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
              };
            };
      
            // If the 'email' property of 'fields' is empty, set 'formIsValid' to false and set the 'email' property of 'errors' to string.

            if (!fields["email"]) {
              formIsValid = false;
              errors["email"] = "*Please enter your email.";
            };
      
            // Set the state of 'errors' to the 'errors' variable at the start of the function. Then return the variable 'formIsValid'.

            this.setState({
              errors: errors
            });
            return formIsValid;
      
        }

        return (
          <div>
            <header className="contact-header">

              <div className="container">
                  <div className="col-md-8 mx-auto">
                      <form name="registration" action="#" method="GET" onSubmit={submitUserRegistrationForm}>
                          <fieldset className="contact-form">
                              <h1 className="contact-intro">Contact us:</h1>
                              <input type="email" className="form-elements" id="email" name="email" placeholder="email..." value={this.state.fields.email} onChange={handleChange}/>
                              <div className="errMsg">{this.state.errors.email}</div>
                              <input type="text" className="form-elements" id="name" name="username" placeholder="name..." value={this.state.fields.username} onChange={handleChange}/>
                              <div className="errMsg">{this.state.errors.username}</div>
                              <input type="text" className="form-elements" id="subject" placeholder="subject..." value={this.state.fields.subject} onChange={handleChange}/>       
                              <textarea className="form-elements" id="message" placeholder="message..." value={this.state.fields.comment} onChange={handleChange} rows="3"></textarea>
                              <button type="submit" value="submit" className="form-elements contact-submit">submit</button>
                          </fieldset>
                      </form>
                  </div>
              </div>

            </header>
            {/* Calls the components 'ContactsDisplay' and 'Footer' */}
            <ContactsDisplay contacts={this.state.contacts}/>
            <Footer />
          </div>
        );
    };
};

export default Contact;