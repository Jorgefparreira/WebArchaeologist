import React, { Component } from "react";
import "./styles/bootstrap-grid.min.css";
import "./styles/App.scss";
import TROWEL from "./assets/svg/trowel";
import Intro from "./sections/intro";
import About from "./sections/about";
import ProjectsMain from "./sections/projects_main";
import Contact from "./sections/contact";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: 0,
      // hideLoading: "block",
      // aboutHeight: 0,
      // projectsHeight: 0,
      // contactHeight: 0,
      // height: 0
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ showContent: 1 });
        // this.setState({ hideLoading: "none" });
        // this.setPageHeight();
      }.bind(this),
      2100
    );
    // window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("resize", this.handleWindowSizeChange);
  }

  render() {
    return (
      <div className="App">
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
            <About />
            <ProjectsMain />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
