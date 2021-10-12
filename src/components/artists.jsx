import React from "react";
import { getArtists } from "../services/artistService";

import Pagination from "./common/pagination";
import CardsContainer from "./common/cardsContainer";
import Filter from "./common/filter";
import ListPage from "./common/listPage";

class Artists extends ListPage {
  state = {
    currentPage: 1,
    pageSize: 4,
    sort: { path: "name", order: "asc", title: "Name" },
    data: [],
  };

  async componentDidMount() {
    const { data } = await getArtists();
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
        {this.getPageData().total.length === 0 ? (
          <h1 className="title">There is no artists</h1>
        ) : (
          <React.Fragment>
            <CardsContainer data={this.getPageData().page} link={"artists"} />
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
