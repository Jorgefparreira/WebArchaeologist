import React, { Component } from "react";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: 0,
      scroll: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    scroll = scroll / 3;
    this.setState({ scroll });
  };

  handleImageLoaded = () =>{
    this.props.onImagesLoaded();
  }

  render() {
    return <div id="intro">
      <picture>
        <source media="(max-width: 800px)" srcSet={`${process.env.PUBLIC_URL}/images/ammaia_top_xs.webp`}></source>
        <img
        src={`${process.env.PUBLIC_URL}/images/ammaia_top.webp`}
        className="img-fluid intro-img intro-img-top"
        alt="ammaia ruins"
        onLoad={() => this.handleImageLoaded()}
      />
      </picture>
      <picture>
        <source media="(max-width: 800px)" srcSet={`${process.env.PUBLIC_URL}/images/ammaia_bottom_xs.webp`}></source>
        <img
        src={`${process.env.PUBLIC_URL}/images/ammaia_bottom.webp`}
        className="img-fluid intro-img intro-img-bottom"
        alt="ammaia ruins"
        style={{ transform: `translateY(-${this.state.scroll}px)` }}
        onLoad={() => this.handleImageLoaded()}
      />
      </picture>
    </div>
  }
}

export default Intro;
