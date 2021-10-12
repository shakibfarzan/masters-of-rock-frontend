import React from "react";
import { getArtist, getDiscography } from "./../services/artistService";
import LineUp from "./lineUp";
import Accordion from "./common/accordion";
import Discography from "./discography";

class ArtistPage extends React.Component {
  state = {
    artistName: "",
    artistEpithet: "",
    artistImg: "",
    elements: [],
  };
  async componentDidMount() {
    const { data: artist } = await getArtist(this.props.match.params.id);
    const { data } = await getDiscography(this.props.match.params.id);
    const { albums, single_tracks } = data;
    const elements = [
      artist.biography && {
        title: "Biography",
        body: <p>{artist.biography}</p>,
      },
      (artist.lineUp || artist.line_up.length !== 0) && {
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
      (albums.length !== 0 || single_tracks.length !== 0) && {
        title: "Discography",
        body: <Discography albums={albums} singleTracks={single_tracks} />,
      },
    ];
    this.setState({
      artistName: artist.name,
      artistEpithet: artist.epithet,
      artistImg: artist.images[0],
      elements,
    });
  }
  render() {
    const { artistName, artistEpithet, artistImg, elements } = this.state;
    const r = artistName ? (
      <Accordion
        title={artistName}
        subTitle={artistEpithet}
        image={`${process.env.REACT_APP_MEDIA_URL}${artistImg}`}
        imageAlt={artistName}
        elements={elements}
      />
    ) : (
      <h1 className="title">This Artist not found</h1>
    );
    return <div className="component">{r}</div>;
  }
}

export default ArtistPage;
