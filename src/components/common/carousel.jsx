import React, { Component } from "react";
import CarouselItem from "./carouselItem";

class Carousel extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">{this.renderIndicators()}</ul>
        <div className="carousel-inner">{this.renderItems()}</div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }

  renderIndicators() {
    const elements = [];
    for (let index = 0; index < this.props.images.length; index++) {
      index === 0
        ? elements.push(
            <li
              key={0}
              data-target="#demo"
              data-slide-to="0"
              className="active"
            ></li>
          )
        : elements.push(
            <li key={index} data-target="#demo" data-slide-to={`${index}`}></li>
          );
    }
    return elements;
  }
  renderItems() {
    const images = [...this.props.images];
    const first = images.shift();
    const elements = [];
    const firstCaption = (
      <React.Fragment>
        <h4>Masters of Rock</h4>
        <p>For Rock Lovers</p>
      </React.Fragment>
    );
    const captions = [
      <button className="btn btn-primary-m">
        Find Best Backing Tracks for Improvising
      </button>,
      <button className="btn btn-outline-s">Listen Your Favorite Songs</button>,
      <button className="btn btn-outline">Suggest Your Favorite Artist</button>,
      <button className="btn btn-secondary-m">Express Your Experience</button>,
    ];

    elements.push(
      <CarouselItem
        active={true}
        data_bs_interval={"5000"}
        src={first.src}
        alt={first.src}
        caption={firstCaption}
      />
    );

    let counter = 0;
    images.forEach((i) => {
      elements.push(
        <CarouselItem
          key={counter}
          active={false}
          data_bs_interval={"2000"}
          src={i.src}
          alt={i.src}
          caption={captions[counter++]}
        />
      );
    });

    return elements;
  }
}

export default Carousel;
