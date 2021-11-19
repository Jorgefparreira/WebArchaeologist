import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import TROWEL from "./assets/svg/trowel";
// import Navbar from "./components/navbar";
import Intro from "./sections/intro";
import ProjectsMain from "./sections/projects_main";
import Contact from "./sections/contact";
import Footer from "./components/footer";
import About from "./sections/about";
// import ProjectsRouter from "./sections/projects_router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: 0,
      // hideLoading: "block",
      aboutHeight: 0,
      projectsHeight: 0,
      contactHeight: 0,
      height: 0
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ showContent: 1 });
        // this.setState({ hideLoading: "none" });
        this.setPageHeight();
      }.bind(this),
      2100
    );
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const pageHeight =
      this.state.aboutHeight +
      this.state.projectsHeight +
      this.state.contactHeight +
      this.state.footerHeight;
    this.setState({ height: pageHeight });
  };

  setPageHeight = () => {
    // const pageHeight =
    //   this.state.aboutHeight +
    //   this.state.projectsHeight +
    //   this.state.contactHeight +
    //   this.state.footerHeight;
    // this.setState({ height: pageHeight });
  };

  handleScroll = () => {
    // const scroll =
    //   document.body.scrollTop || document.documentElement.scrollTop;
    // this.setState({ scroll });
  };

  aboutHeight = height => {
    this.setState({ aboutHeight: height });
  };

  projectsHeight = height => {
    this.setState({ projectsHeight: height });
  };

  contactHeight = height => {
    this.setState({ contactHeight: height });
    this.setPageHeight();
  };

  footerHeight = height => {
    this.setState({ footerHeight: height });
  };

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div
          className="loading-trowel-wrapper"
          // style={{ display: this.state.hideLoading }}
        >
          <TROWEL className='img-fluid loading-trowel' />
        </div>
        <div
          className="general-container"
          style={{
            opacity: this.state.showContent,
            height: `${this.state.height}px`
          }}
        >
          <Intro />
          <div
            id="scrollable-content"
            style={{ transform: `translateY(-${this.state.scroll}px)` }}
          >
            <About aboutHeight={this.aboutHeight} />
            <ProjectsMain projectsHeight={this.projectsHeight} />
            <Contact contactHeight={this.contactHeight} />
            <Footer footerHeight={this.footerHeight} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
