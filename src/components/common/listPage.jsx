import React from "react";
import _ from "lodash";

import paginate from "../../utils/paginate";
import sort from "../../utils/sort";
import filter from "../../utils/filter";
class ListPage extends React.Component {
  state = {
    data: [],
    currentPage: Number,
    pageSize: Number,
    searchQuery: "",
    sort: {},
    current: [],
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  searchQueryFunction = (array) => {};

  getPageData = () => {
    const { data, currentPage, pageSize, searchQuery, sort, current } =
      this.state;
    let filtered = data;
    if (current) {
      current.forEach((c) => {
        if (c.title !== "All") {
          filtered = filtered.filter((i) => i[c.name] === c.title);
        }
      });
    }
    if (searchQuery) {
      filtered = this.searchQueryFunction(data);
    }
    const sorted = _.orderBy(filtered, [sort.path], [sort.order]);
    return { page: paginate(sorted, currentPage, pageSize), total: sorted };
  };

  handleSort = (path, title) => {
    this.setState({ sort: sort(path, this.state.sort.order, title) });
  };

  handleFilter = (filterObj, currentArr) => {
    this.setState({ current: filter(filterObj, currentArr) });
  };

  sortsAttr = () => {};
  filtersAttr = () => {};
}

export default ListPage;
