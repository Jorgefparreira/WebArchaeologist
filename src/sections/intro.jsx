import React, { Component } from "react";

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      opacity: 0,
      scroll: 0
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleImageLoaded() {
    this.setState({ opacity: 1 });
  }

  handleScroll = () => {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    scroll = scroll / 3;
    this.setState({ scroll });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 800;
    if (isMobile) {
      return (
        <div id="intro">
          <img
            src={`${process.env.PUBLIC_URL}/images/ammaia_top_xs.webp`}
            className="img-fluid intro-img intro-img-top"
            alt="ammaia ruins"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/ammaia_bottom_xs.webp`}
            className="img-fluid intro-img intro-img-bottom"
            alt="ammaia ruins"
            style={{ transform: `translateY(-${this.state.scroll}px)` }}
          />
        </div>
      );
    } else {
      return (
        <div id="intro">
          <img
            src={`${process.env.PUBLIC_URL}/images/ammaia_top.webp`}
            className="img-fluid intro-img intro-img-top"
            alt="ammaia ruins"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/ammaia_bottom.webp`}
            className="img-fluid intro-img intro-img-bottom"
            alt="ammaia ruins"
            style={{ transform: `translateY(-${this.state.scroll}px)` }}
          />
        </div>
      );
    }
  }
}

export default Intro;
