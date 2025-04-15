import React, { Component } from "react";
import "./styles/lib/bootstrap-grid.min.css";
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
      imagesLoaded: 0,
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ showContent: 1 });
      }.bind(this),
      2100
    );
  }

  onImagesLoaded() {
    this.setState({ imagesLoaded: this.state.imagesLoaded + 1 }, () => {
      if (this.state.imagesLoaded >= 2) {
        this.setState({ showContent: 1 });
      }
    })
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
          <Intro onImagesLoaded={this.onImagesLoaded.bind(this)} showContent={this.state.showContent} />
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
