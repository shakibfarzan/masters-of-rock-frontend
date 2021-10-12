import React from "react";
import { toast } from "react-toastify";
import { getAlbum, getSongs } from "./../services/albumService";
import Audio from "./common/audio";
import Accordion from "./common/accordion";

class AlbumPage extends React.Component {
  state = {
    album: {},
    artistName: "",
    songs: [],
    songArtists: [],
    songGenres: [],
  };

  async componentDidMount() {
    const { data: album } = await getAlbum(this.props.match.params.id);
    const { data: songs } = await getSongs(this.props.match.params.id);
    const artistName = album.artist.name;
    const songArtists = [];
    const songGenres = [];
    songs.forEach((song) => {
      songArtists.push(song.artist);
      songGenres.push(song.genre);
    });
    this.setState({
      album,
      songs,
      artistName,
      songArtists,
      songGenres,
    });
  }

  render() {
    const { album, artistName } = this.state;

    return (
      <div className="component">
        {album ? (
          <React.Fragment>
            <Accordion
              title={album.name}
              subTitle={artistName}
              image={`${process.env.REACT_APP_MEDIA_URL}${album.cover}`}
              imageAlt={album.name}
              elements={this.renderElements()}
              cover
            />
          </React.Fragment>
        ) : (
          <h1 className="title">There is no album</h1>
        )}
      </div>
    );
  }

  renderElements() {
    const elements = [];
    const { songs, songArtists, songGenres, album } = this.state;
    for (let index = 0; index < songs.length; index++) {
      elements.push({
        title: songs[index].name,
        body: (
          <Audio
            id={songs[index]._id}
            name={songs[index].name}
            artistName={songArtists[index].name}
            albumName={album.name}
            genre={songGenres[index].name}
            url={songs[index].url}
            onComment={this.handleClickComment}
            type={"AlbumPage"}
          />
        ),
      });
    }
    return elements;
  }
  handleClickComment = (id) => {
    this.props.history.push(`/song/${id}`);
    toast.info("This is song page to see and send comments.");
  };
}

export default AlbumPage;
