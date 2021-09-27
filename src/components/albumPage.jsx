import React from "react";
import { toast } from "react-toastify";
import { getAlbum, getSongs } from "./../services/fakeAlbums";
import Audio from "./common/audio";
import Accordion from "./common/accordion";

class AlbumPage extends React.Component {
  state = {
    album: {},
    songs: [],
  };

  componentWillMount() {
    const album = getAlbum(this.props.match.params.id);
    const songs = getSongs(this.props.match.params.id);
    this.setState({ album, songs });
  }

  render() {
    const { album } = this.state;

    return <div className="componet">
      {album ? (
      <React.Fragment>
        <Accordion
          title={album.name}
          subTitle={album.artist.name}
          image={album.cover}
          imageAlt={album.name}
          elements={this.renderElements()}
          cover
        />
      </React.Fragment>
    ) : (
      <h1 className="title">There is no album</h1>
    )}
    </div>
      
  }

  renderElements() {
    return this.state.songs.map((song) => ({
      title: song.name,
      body: (
        <Audio
          id={song._id}
          name={song.name}
          artistName={song.artist.name}
          albumName={song.album.name}
          genre={song.genre.name}
          url={song.url}
          onComment={this.handleClickComment}
          type={"AlbumPage"}
        />
      ),
    }));
  }
  handleClickComment = (id) => {
    this.props.history.push(`/song/${id}`);
    toast.info("This is song page to see and send comments.");
  };
}

export default AlbumPage;
