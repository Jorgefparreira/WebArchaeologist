import React, { Component } from "react";
import GITHUB from "../assets/svg/github";
import LINKEDIN from "../assets/svg/linkedin";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      height: 0,
      year: 0
    };
  }

  componentDidMount() {
    const date = new Date();
    const year = date.getFullYear();
    this.setState({ year });
    setTimeout(
      function() {
        this.getSectionHeight();
      }.bind(this),
      2000
    );
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.getSectionHeight();
  };

  getSectionHeight = () => {
    const height = this.divElement.clientHeight;
    this.props.footerHeight(height);
  };

  render() {
    return (
      <footer
        className="page-height"
        ref={divElement => (this.divElement = divElement)}
      >
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="col-sm-6">
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/jorgefparreira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LINKEDIN />
                </a>
                <a
                  href="https://github.com/Jorgefparreira/WebArchaeologistReact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GITHUB
                    circleFill="#fff"
                    fill="#000"
                    width="50"
                    height="50"
                    className="img-bounce"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col" id="copyright">
              <p>&copy;Web Archaeologist {this.state.year}</p>
            </div>
          </div>
        </div>
        <img
          className="d-none"
          src={require("../assets/brand.jpg")}
          alt="site logo"
        />
      </footer>
    );
  }
}

export default Footer;
