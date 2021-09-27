import React from "react";
import { getArtist, getDiscography } from "./../services/fakeArtists";
import LineUp from "./lineUp";
import Accordion from "./common/accordion";
import Discography from "./discography";

class ArtistPage extends React.Component {
  state = {
    artist: {},
  };
  componentDidMount() {
    const artist = getArtist(this.props.match.params.id);
    this.setState({ artist });
  }

  initParameters = () => {
    const { artist } = this.state;
    let elements = null;
    if (artist) {
      const { albums, singleTracks } = getDiscography(artist._id);
      const hasAlbumsOrSingleTracks =
        albums.length !== 0 || singleTracks.length !== 0;
      elements = [
        artist.biography && {
          title: "Biography",
          body: <p>{artist.biography}</p>,
        },
        artist.line_up && {
          title: "Line Up",
          body: <LineUp lineUp={artist.line_up} />,
        },
        artist.personal_influence && {
          title: "Personal Influence",
          body: <p>{artist.personal_influence}</p>,
        },
        artist.essential_stylistic_features && {
          title: "Essential Stylistic Features",
          body: <p>{artist.essential_stylistic_features}</p>,
        },
        artist.harmonic_material && {
          title: "Harmonic Material",
          body: <p>{artist.harmonic_material}</p>,
        },
        artist.sound && {
          title: "Sound",
          body: <p>{artist.sound}</p>,
        },
        hasAlbumsOrSingleTracks && {
          title: "Discography",
          body: <Discography albums={albums} singleTracks={singleTracks} />,
        },
      ];
      return {
        name: artist.name,
        epithet: artist.epithet,
        imageUrl: artist.imageUrl,
        elements: elements,
      };
    }
    return null;
  };

  render() {
    const params = this.initParameters();
    const r = params ? (
      <Accordion
        title={params.name}
        subTitle={params.epithet}
        image={params.imageUrl}
        imageAlt={params.name}
        elements={params.elements}
      />
    ) : (
      <h1 className="title">This Artist not found</h1>
    );
    return <div className="component">{r}</div>;
  }
}

export default ArtistPage;
