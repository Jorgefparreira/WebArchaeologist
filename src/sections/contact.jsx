import React, { Component } from "react";
import { ContactBanner } from "../components/displayContactBanner";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      bannerType: ""
    };
  }

  componentDidMount() {

  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      this.setState({ bannerType: "missingFields" });
      return;
    }
    this.setState({ bannerType: "" });

    fetch("https://us-central1-web-archaeologis-1487692258858.cloudfunctions.net/contactMailer", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      })
    })
      .then((response) => {
        if(response?.ok){
          this.setState({
            name: "",
            phone: "",
            email: "",
            message: "",
            bannerType: "sent"
          });
        } else {
          this.setState({
            bannerType: "errorSending"
          });
        }
      });

    this.setState({
      bannerType: "sending"
    });
  };

  render() {
    return (
      <div className="page-height">
        <section
          id="contact"
          className="scroll-margin"
        >
          <div className={`contact-box ${this.state.bannerType === 'missingFields' ? 'missingFields' : ''}`}>
            <div className="container">
              <div className="row">
                <div className=" col-sm-12 col-md-6 col-lg-6 get-in-touch">
                  <div className="clearfix d-none d-md-block">&nbsp;</div>
                  <div className="clearfix d-none d-md-block">&nbsp;</div>
                  <h3 className="h1">Get in touch</h3>
                  <p>
                    If there's anything you would like to know about my work,
                    don't hesitate to reach me through this form.
                  </p>

                  <ContactBanner type={this.state.bannerType}></ContactBanner>

                </div>
              </div>

              <div className="row">
                <div className=" col-sm-12 col-md-6 col-lg-6 get-in-touch">
                  <form
                    onSubmit={this.handleSubmit}
                    id="contact-us-form"
                    noValidate
                  >
                    <div className="form-group">
                      {/* <label htmlFor="name" className="sr-only">
                        Name
                      </label> */}
                      <input
                        type="text"
                        placeholder="Name*"
                        title="Enter your name"
                        required="required"
                        className="form-control"
                        name="name"
                        id="name"
                        onChange={this.updateInput}
                        value={this.state.name}
                      />
                    </div>
                    <div className="form-group">
                      {/* <label htmlFor="phone" className="sr-only">
                        Phone number
                      </label> */}
                      <input
                        type="tel"
                        placeholder="Phone number"
                        pattern="[0-9]{6,}"
                        title="Enter your phone number"
                        className="form-control"
                        name="phone"
                        id="phone"
                        onChange={this.updateInput}
                        value={this.state.phone}
                      />
                    </div>
                    <div className="form-group">
                      {/* <label htmlFor="email" className="sr-only">
                        Email
                      </label> */}
                      <input
                        type="email"
                        placeholder="Email*"
                        title="Enter your email"
                        required="required"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={this.updateInput}
                        value={this.state.email}
                      />
                    </div>
                    {/* <label htmlFor="message-box" className="sr-only">
                      Message
                    </label> */}
                    <div className="form-group">
                      <textarea
                        placeholder="Message*"
                        cols="40"
                        rows="5"
                        minLength="2"
                        title="Write a message"
                        required="required"
                        className="form-control"
                        name="message"
                        id="message-box"
                        onChange={this.updateInput}
                        value={this.state.message}
                        data-gramm_editor="false"
                      />
                    </div>
                    <button
                      type="submit"
                      value="Send"
                      className="btn"
                      id="submit-button"
                    >
                      <i className="fa fa-paper-plane" aria-hidden="true" />{" "}
                      Submit
                    </button>
                  </form>
                </div>
                <div className="d-none d-sm-block col-sm-6 col-lg-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/dluis-find1.png`}
                    alt="Terra Sigillata find"
                    className="d-block mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
