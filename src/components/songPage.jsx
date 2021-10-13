import React from "react";
import { getSong } from "./../services/songService";
import { getCommentsOfGivenSong } from "../services/commentService";

import Audio from "./common/audio";
import CommentContainer from "./common/commentContainer";
import FormablePage from "./common/formablePage";

class SongPage extends FormablePage {
  state = {
    currentSong: {},
    artistName: "",
    albumName: "",
    genreName: "",
    cover: "",
    comments: [],
  };

  async componentDidMount() {
    const { data: currentSong } = await getSong(this.props.match.params.id);
    const artistName = currentSong.artist.name;
    const albumName = currentSong.album.name;
    const genreName = currentSong.genre.name;
    const cover = currentSong.album.cover;
    const { data: comments } = await getCommentsOfGivenSong(
      this.props.match.params.id
    );
    this.setState({
      currentSong,
      comments,
      artistName,
      albumName,
      genreName,
      cover,
    });
  }

  render() {
    const { currentSong, comments, artistName, albumName, genreName, cover } =
      this.state;
    return (
      <div className="component">
        {currentSong ? (
          <div className="row">
            <div className="col-6">
              <div className="card card-song-page">
                <Audio
                  id={currentSong._id}
                  name={currentSong.name}
                  artistName={artistName}
                  albumName={albumName}
                  genre={genreName}
                  url={currentSong.url}
                  coverUrl={cover}
                  type="SongPage"
                />
              </div>
            </div>
            <div className="col-6">
              <CommentContainer
                comments={comments}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        ) : (
          <h1 className="title">This song not found!</h1>
        )}
      </div>
    );
  }
}

export default SongPage;
