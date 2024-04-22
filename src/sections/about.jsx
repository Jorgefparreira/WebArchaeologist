import React, { Component } from "react";
import BrowserAnimation from "../components/browser_ani";
import TROWEL from "../assets/svg/trowel";
import "../styles/about.scss";

class About extends Component {
  constructor(props) {
    super(props);
    let height = window.innerHeight;
    this.state = {
      aboutMargin: height + "px",
      showAbout: ""
    };
  }

  componentDidMount() {
    let margin = window.innerWidth > 450 ? 200 : 300;
    setTimeout(
      function () {
        this.setState({ aboutMargin: window.innerHeight - margin + "px" });
      }.bind(this),
      1000
    );
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  

  reachIframe(el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
  }

  handleScroll = () => {
    this.setState({ showAbout: "show-about" });
  };

  render() {
    return (
      <div className="page-height">
        <section
          className="main"
          id="about-section"
          style={{ marginTop: this.state.aboutMargin }}
        >
          <div className="about-row">
            <div className="container">
              <div className="main-header">
                <div className="navbar-brand">
                  <TROWEL className='brand-img' />
                </div>
                <h1>Web Archaeologist</h1>
              </div>
              <div
                className={this.state.showAbout}
                id="about"
                ref={divElement => (this.divElement = divElement)}
              >
                <div className="row">
                  <div className="col-12">
                    <article>
                      <p>
                        <strong>From archaeologist to web developer.</strong>{" "}
                        Having studied archaeology for my{" "}
                        <span
                          tooltip="University of Lisbon, 2004-2007"
                          className="about-tooltip"
                        >
                          degree
                        </span>{" "}
                        and{" "}
                        <span
                          tooltip="University of Lisbon, 2007-2010"
                          className="about-tooltip"
                        >
                          masters
                        </span>
                        , I worked in commercial archaeology for 9 years in Portugal and in the UK. Although at first, this might not seem very similar to web development, both have problem-solving at their core. This is why I decided it was finally time to pursue my dream of creating websites and applications.
                      </p>
                    </article>
                  </div>
                  <div className="col-md-6">
                    <BrowserAnimation></BrowserAnimation>
                  </div>
                  <div className="col-md-6 skills-row">
                    <h2>Experience with:</h2>
                    <ul>
                      <li>HTML, CSS, JavaScript, PHP</li>
                      <li>Angular, React</li>
                      <li>MySQL</li>
                      <li>Adobe Photoshop and Illustrator</li>
                      <li>Managing large scale websites</li>
                      <li>Team working and attention to detail</li>
                      <li>Keeping to deadlines in commercial projects</li>
                    </ul>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
