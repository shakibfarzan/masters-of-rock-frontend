import React from "react";
import Card from "./common/card";
import { getArtists } from "./../services/fakeArtists";

class CardsHomepage extends React.Component {
  state = {
    firstArtist: getArtists()[0],
    secondArtist: getArtists()[1],
  };

  render() {
    const { firstArtist, secondArtist } = this.state;
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
                srcImage={firstArtist.imageUrl}
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
                srcImage={secondArtist.imageUrl}
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
