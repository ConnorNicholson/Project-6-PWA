import React from 'react';

export default function ContactsDisplay(props) {

    const {contacts} = props

    function displayContacts() {

        const mappedContacts = contacts.map((contact, index) => {
            return (
                <div key={index}>
                    <div className="comments-display">
                        <p className="contact-comment">{contact.comments}</p>
                        <p className="contact-name">{contact.contact_name}</p>
                    </div>
                </div>
            );
        });
        return mappedContacts;
    };

    return (
        <section className="comments-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 comments-container">
                        <h2 className="comments-header">What our Customers have to say:</h2>
                        {displayContacts()}
                    </div>

                </div>
            </div>
        </section>
    );

};