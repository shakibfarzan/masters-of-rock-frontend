import React from "react";
import { getArtists } from "../services/fakeArtists";

import Pagination from "./common/pagination";
import CardsContainer from "./common/cardsContainer";
import Filter from "./common/filter";
import ListPage from "./common/listPage";

class Artists extends ListPage {
  state = {
    currentPage: 1,
    pageSize: 4,
    sort: { path: "name", order: "asc", title: "Name" },
  };

  componentDidMount() {
    const data = getArtists();
    this.setState({ data });
  }

  searchQueryFunction = (array) => {
    return array.filter((a) =>
      a.biography.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
  };

  sortsAttr = () => {
    return [{ name: "Name", func: () => this.handleSort("name") }];
  };

  render() {
    const sortsAttr = this.sortsAttr();
    return (
      <div className="component">
        <Filter
          searchName={"artists"}
          searchValue={this.state.searchQuery}
          onChange={this.handleSearch}
          hasSorting={true}
          hasFiltering={false}
          sortsAttr={sortsAttr}
          sortObj={this.state.sort}
        />
        {this.getPageData().length === 0 ? (
          <h1 className="title">There is no artists</h1>
        ) : (
          <React.Fragment>
            <CardsContainer data={this.getPageData()} link={"artists"} />
            <Pagination
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              itemsCount={this.state.data.length}
              onPageChange={this.handlePageChange}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Artists;
