import React from "react";
import { getSongs } from "../services/songService";
import { toast } from "react-toastify";

import ListPage from "./common/listPage";
import Filter from "./common/filter";
import Pagination from "./common/pagination";
import ScrollToTop from "./common/scrollToTop";
import Audio from "./common/audio";

class Songs extends ListPage {
  state = {
    currentPage: 1,
    pageSize: 10,
    sort: { path: "name", order: "asc", title: "Name" },
  };

  async componentDidMount() {
    const current = this.props.match.params.type
      ? [{ name: "type", title: this.props.match.params.type }]
      : [];
    const { data } = await getSongs();
    this.setState({ current, data });
  }

  searchQueryFunction = (array) => {
    const query = this.state.searchQuery.toLowerCase();
    return array.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.artist.name.toLowerCase().includes(query) ||
        s.album.name.toLowerCase().includes(query) ||
        s.genre.name.toLowerCase().includes(query) ||
        s.type.toLowerCase().includes(query)
    );
  };

  sortsAttr = () => {
    return [
      { name: "Name", func: () => this.handleSort("name", "Name") },
      {
        name: "Date Uploaded",
        func: () => this.handleSort("dateUploaded", "Date Uploaded"),
      },
      {
        name: "Released Year",
        func: () => this.handleSort("album.year", "Released Year"),
      },
      {
        name: "Popularity",
        func: () => this.handleSort("likes", "Popularity"),
      },
    ];
  };

  filtersAttr = () => {
    return [
      {
        title: "Type",
        links: [
          {
            name: "All",
            func: () =>
              this.handleFilter(
                { name: "type", title: "All" },
                this.state.current
              ),
          },
          {
            name: "Original Song",
            func: () =>
              this.handleFilter(
                { name: "type", title: "OriginalSong" },
                this.state.current
              ),
          },
          {
            name: "Backing Track",
            func: () =>
              this.handleFilter(
                { name: "type", title: "BackingTrack" },
                this.state.current
              ),
          },
          {
            name: "Jam Track",
            func: () =>
              this.handleFilter(
                { name: "type", title: "JamTrack" },
                this.state.current
              ),
          },
        ],
      },
    ];
  };

  render() {
    const sortsAttr = this.sortsAttr();
    const filtersAttr = this.filtersAttr();
    return (
      <div className="component">
        <Filter
          searchName={"song names, album names, artist names, genres"}
          searchValue={this.state.searchQuery}
          onChange={this.handleSearch}
          hasSorting={true}
          hasFiltering={true}
          sortsAttr={sortsAttr}
          filtersAttr={filtersAttr}
          sortObj={this.state.sort}
        />
        {this.getPageData().total.length === 0 ? (
          <h1 className="title">There is no songs</h1>
        ) : (
          <React.Fragment>
            <div className="audios">
              {this.getPageData().page.map((s) => (
                <Audio
                  id={s._id}
                  name={s.name}
                  artistName={s.artist.name}
                  albumName={s.album.name}
                  genre={s.genre.name}
                  url={s.url}
                  coverUrl={s.album.cover}
                  onComment={() => this.handleClickComment(s._id)}
                  type={"Songs"}
                />
              ))}
            </div>
            <Pagination
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              itemsCount={this.getPageData().total.length}
              onPageChange={this.handlePageChange}
            />
          </React.Fragment>
        )}
        <ScrollToTop />
      </div>
    );
  }

  handleClickComment = (id) => {
    this.props.history.push(`/song/${id}`);
    toast.info("This is song page to see and send comments.");
  };
}

export default Songs;
