import React from "react";
import Card from "./common/card";
import { getArtists } from "./../services/artistService";

class CardsHomepage extends React.Component {
  state = {
    artists: [],
    firstArtist: {},
    secondArtist: {},
    imgFA: "",
    imgSA: "",
  };

  async componentDidMount() {
    const { data } = await getArtists();
    this.setState({ artists: data });
    const length = data.length;
    let index1 = Math.floor(Math.random() * length);
    let index2 = Math.floor(Math.random() * length);
    if (index2 === index1) {
      if (index2 === length - 1) {
        index2 = 0;
      } else {
        index2 = length - 1;
      }
    }
    const firstArtist = data[index1];
    const secondArtist = data[index2];
    this.setState({ firstArtist, secondArtist });
    const imgFA = firstArtist.images[0];
    const imgSA = secondArtist.images[0];
    this.setState({ imgFA, imgSA });
  }

  render() {
    const { firstArtist, secondArtist, imgSA, imgFA } = this.state;
    return (
      <React.Fragment>
        <div className="card-container">
          <div className="row">
            <Card
              srcImage="images/cards/genre.jpg"
              altImage="genre"
              heading="Explore Genres"
              paragraphText="Explore genres and see their description. You can listen some example of them and get know about bands that have song in those genres."
              buttonText="Genres"
              is100={true}
              linkTo={"/genres"}
            />
            <div className="col-6">
              <Card
                id={firstArtist._id}
                srcImage={`${process.env.REACT_APP_MEDIA_URL}${imgFA}`}
                altImage={firstArtist.name}
                heading={firstArtist.name}
                paragraphText={firstArtist.biography}
                buttonText="See Artist"
                linkTo={`/artists/${firstArtist._id}`}
              />
            </div>
            <div className="col-6">
              <Card
                id={secondArtist._id}
                srcImage={`${process.env.REACT_APP_MEDIA_URL}${imgSA}`}
                altImage={secondArtist.name}
                heading={secondArtist.name}
                paragraphText={secondArtist.biography}
                buttonText="See Artist"
                linkTo={`/artists/${secondArtist._id}`}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardsHomepage;
