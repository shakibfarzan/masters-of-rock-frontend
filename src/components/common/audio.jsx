import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { toast } from "react-toastify";

import { getSong } from "./../../services/fakeSongs";
import icons from "./icons";

class Audio extends React.Component {
  state = {
    isLiked: false,
    currentSong: {},
  };

  componentDidMount() {
    const currentSong = getSong(this.props.id);
    this.setState({ currentSong });
  }

  handleClickLikeBtn = () => {
    const isLiked = this.state.isLiked ? false : true;
    this.setState({ isLiked });
    // const currentSong = { ...this.state.currentSong };
    // if (this.state.isLiked) {
    //   currentSong.isLiked++;
    //   saveSong(currentSong);
    // } else {
    //   currentSong.isLiked--;
    //   saveSong(currentSong);
    // }
  };

  renderLikeBtn = () => {
    // Call server => if it is user fav song isLiked other wise false
    return this.state.isLiked ? (
      <button
        onClick={this.handleClickLikeBtn}
        className="btn btn-sm btn-primary-m"
      >
        {icons().like} Liked
      </button>
    ) : (
      <button
        onClick={this.handleClickLikeBtn}
        className="btn btn-sm btn-outline"
      >
        {icons().dislike} Like
      </button>
    );
  };

  renderPlayer = (url, name, artistName) => (
    <AudioPlayer
      src={`${process.env.PUBLIC_URL}/${url}`}
      hasDefaultKeyBindings={true}
      showJumpControls={false}
      onPlay={() =>
        toast(`You are listen to ${name} by ${artistName}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    />
  );

  renderCover = (coverUrl, name) => (
    <img
      src={`${process.env.PUBLIC_URL}/${coverUrl}`}
      alt={name}
      className={"cover"}
    />
  );
  renderCommentBtn = (id, onComment) => (
    <button
      onClick={() => onComment(id)}
      className="btn btn-sm btn-secondary-m"
    >
      {icons().comment} Comment
    </button>
  );

  renderInAlbumPage = (id, genre, onComment, url, name, artistName) => {
    return (
      <div key={id} className="audio-container">
        <p>Genre: {genre}</p>
        <div className="top-of-cover">
          {this.renderLikeBtn(id)}
          {this.renderCommentBtn(id, onComment)}
        </div>
        {this.renderPlayer(url, name, artistName)}
      </div>
    );
  };

  renderInSongs = (
    id,
    name,
    artistName,
    albumName,
    genre,
    url,
    onComment,
    coverUrl
  ) => {
    return (
      <div key={id} className="audio-container with-border with-cover">
        <div className="row">
          <div className="col-8">
            <h3>{name}</h3>
            <h4>{artistName}</h4>
            <div className="song-property">
              <p>
                Album: {albumName}
                <br />
                Genre: {genre}
              </p>
            </div>
            {this.renderPlayer(url, name, artistName)}
          </div>
          <div className="col-4">
            <div className="top-of-cover">
              {this.renderLikeBtn(id)}
              {this.renderCommentBtn(id, onComment)}
            </div>
            {this.renderCover(coverUrl, name)}
          </div>
        </div>
      </div>
    );
  };

  renderInSongPage = (name, artistName, albumName, genre, url, coverUrl) => {
    return (
      <div className="audio-container song-page">
        {this.renderCover(coverUrl, name)}
        <h3 className="title mb-0 mt-4">{name}</h3>
        <h4 className="title mb-4 mt-2">{artistName}</h4>
        {this.renderPlayer(url, name, artistName)}
        <p className="title title-bold mb-0 mt-4">{albumName}</p>
        <p className="title mb-2 mt-2">{genre}</p>
      </div>
    );
  };

  render() {
    const {
      id,
      name,
      artistName,
      albumName,
      genre,
      url,
      coverUrl,
      onComment,
      type,
    } = this.props;
    const cover = coverUrl
      ? coverUrl
      : `${process.env.PUBLIC_URL}/images/covers/Cover-music.jpg`;
    switch (type) {
      case "AlbumPage":
        return this.renderInAlbumPage(
          id,
          genre,
          onComment,
          url,
          name,
          artistName
        );
      case "Songs":
        return this.renderInSongs(
          id,
          name,
          artistName,
          albumName,
          genre,
          url,
          onComment,
          cover
        );
      case "SongPage":
        return this.renderInSongPage(
          name,
          artistName,
          albumName,
          genre,
          url,
          cover
        );
      default:
        break;
    }
  }
}

export default Audio;
