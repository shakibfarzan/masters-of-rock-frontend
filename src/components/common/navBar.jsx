/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getArtists } from "../../services/fakeArtists";
import { getAlbums } from "../../services/fakeAlbums";
import { getSongs } from "../../services/fakeSongs";

class NavBar extends React.Component {
  state = {
    items: [],
    collapse: "collapse navbar-collapse",
  };

  componentDidMount() {
    const items = [...getArtists(), ...getAlbums(), ...getSongs()];
    this.setState({ items });
  }

  handleOnSelect = (item) => {
    console.log(item);
    let type = "";
    if (item.biography) type = "Artist";
    else if (item.album) type = "Song";
    else type = "Album";

    switch (type) {
      case "Artist":
        window.location = `/artists/${item._id}`;
        break;
      case "Song":
        window.location = `/songs/${item._id}`;
        break;
      case "Album":
        window.location = `/albums/${item._id}`;
        break;
      default:
        break;
    }
  };

  formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  handleClickOnLinks = () => {
    let collapse = "navbar-collapse collapsing";
    this.setState({ collapse });
    collapse =
      this.state.collapse === "collapse navbar-collapse"
        ? "collapse navbar-collapse show"
        : "collapse navbar-collapse";
    this.setState({ collapse });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          // data-toggle="collapse"
          // data-target="#collapsibleNavbar"
          onClick={this.handleClickOnLinks}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
            className="nav-icon"
            alt="search"
          />
        </button>
        <NavLink to={"/"} className="navbar-brand">
          Masters Of Rock
        </NavLink>
        <form>
          <div className="search-box">
            <ReactSearchAutocomplete
              items={this.state.items}
              placeholder={"Search..."}
              onSelect={this.handleOnSelect}
              formatResult={this.formatResult}
              styling={{
                iconColor: "#4830a1",
                borderRadius: "0",
                height: "40px",
                fontFamily: "sans-serif",
              }}
            />
          </div>
        </form>
        <div className={this.state.collapse} id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={this.handleClickOnLinks}>
              <NavLink to={"/artists"} className="nav-link">
                Artists
              </NavLink>
            </li>
            <li className="nav-item" onClick={this.handleClickOnLinks}>
              <NavLink to={"/songs"} className="nav-link">
                Songs
              </NavLink>
            </li>
            <li
              className="nav-item mb-2 mr-3"
              onClick={this.handleClickOnLinks}
            >
              <NavLink to={"/signIn"} className="nav-link">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item" onClick={this.handleClickOnLinks}>
              <NavLink to={"/createAccount"} className="btn btn-primary-m">
                Create Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
