import React from "react";
import { Link } from "react-router-dom";
const Discography = ({ albums, singleTracks }) => {
  return (
    <React.Fragment>
      {albums.length !== 0 && (
        <React.Fragment>
          <h4>Albums</h4>
          <div className="d-flex flex-wrap">
            {albums.map((album) => (
              <div className="p-2">
                <Link to={`/albums/${album._id}`} className="nav-link">
                  {album.name}
                </Link>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
      {singleTracks.length !== 0 && (
        <React.Fragment>
          <h4>Single Tracks</h4>
          <div className="d-flex flex-wrap">
            {singleTracks.map((track) => (
              <div className="p-2">
                <Link to={`/songs/${track._id}`} className="nav-link">
                  {track.name}
                </Link>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Discography;
