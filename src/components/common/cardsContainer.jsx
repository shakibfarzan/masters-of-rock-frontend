import React from "react";
import Card from "./card";

class CardsContainer extends React.Component {
  render() {
    const { data } = this.props;
    let twoCol = this.getTwoEqualsArray(data);
    return (
      <div className="card-container">
        <div className="row">
          {this.renderCards(twoCol.firstArray, twoCol.secondArray)}
        </div>
      </div>
    );
  }

  getTwoEqualsArray = (array) => {
    const firstArray = [];
    const secondArray = [];
    for (let index = 0; index < array.length; index++) {
      if (index % 2 === 0) {
        firstArray.push(array[index]);
      } else {
        secondArray.push(array[index]);
      }
    }
    return { firstArray, secondArray };
  };

  renderCards = (data1, data2) => {
    let elements = [];
    while (data1.length !== 0 || data2.length !== 0) {
      const firstItem = data1.shift();
      const secondItem = data2.shift();
      elements.push(
        <React.Fragment>
          <div className="col-6">
            <Card
              id={firstItem._id}
              srcImage={firstItem.imageUrl}
              altImage={firstItem.name}
              heading={firstItem.name}
              paragraphText={firstItem.biography}
              buttonText={`See ${firstItem.name} page`}
              linkTo={`/${this.props.link}/${firstItem._id}`}
            />
          </div>
          {secondItem && (
            <div className="col-6">
              <Card
                id={secondItem._id}
                srcImage={secondItem.imageUrl}
                altImage={secondItem.name}
                heading={secondItem.name}
                paragraphText={secondItem.biography}
                buttonText={`See ${secondItem.name} page`}
                linkTo={`/${this.props.link}/${secondItem._id}`}
              />
            </div>
          )}
        </React.Fragment>
      );
    }
    return elements;
  };
}

export default CardsContainer;
