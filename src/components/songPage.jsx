import React from "react";
import { getSong } from "./../services/songService";
import { getCommentsOfGivenSong } from "../services/fakeComments";

import Audio from "./common/audio";
import CommentContainer from "./common/commentContainer";
import FormablePage from "./common/formablePage";

class SongPage extends FormablePage {
  state = {
    currentSong: {},
    comments: [],
  };

  async componentDidMount() {
    const { data: currentSong } = await getSong(this.props.match.params.id);
    const comments = getCommentsOfGivenSong(this.props.match.params.id);
    this.setState({ currentSong, comments });
  }

  render() {
    const { currentSong, comments } = this.state;
    return (
      <div className="component">
        {currentSong ? (
          <div className="row">
            <div className="col-6">
              <div className="card card-song-page">
                <Audio
                  id={currentSong._id}
                  name={currentSong.name}
                  artistName={currentSong.artist.name}
                  albumName={currentSong.album.name}
                  genre={currentSong.genre.name}
                  url={currentSong.url}
                  coverUrl={currentSong.album.cover}
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
