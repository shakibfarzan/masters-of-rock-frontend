import React from "react";

class Accordion extends React.Component {
  renderCards = (elements) => {
    let cards = [];
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      if (element) {
        cards.push(
          <React.Fragment>
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href={`#collapse${index}`}
              >
                {element.title}
              </a>
            </div>
            <div
              id={`collapse${index}`}
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">{element.body}</div>
            </div>
          </React.Fragment>
        );
      }
    }
    return cards;
  };

  render() {
    const { title, subTitle, image, imageAlt, elements, cover } = this.props;
    const imageClass = cover ? "img-fluid img-cover" : "img-fluid ";
    return (
      <div className="accordion-container">
        <div className="card card-fluid">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <img className={imageClass} src={image} alt={imageAlt} />
          <div id="accordion" className="accordion">
            {this.renderCards(elements)}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
