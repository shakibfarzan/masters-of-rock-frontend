/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import icons from "./icons";

const Filter = ({
  searchName,
  searchValue,
  onChange,
  hasSorting,
  hasFiltering,
  sortsAttr,
  filtersAttr,
  sortObj,
}) => {
  const renderFiltered = () => {
    return filtersAttr.map((attr) => (
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-secondary-m dropdown-toggle"
          data-toggle="dropdown"
        >
          Filter By {attr.title}
        </button>
        <div className="dropdown-menu">
          {attr.links.map((a) => (
            <a className="dropdown-item" onClick={a.func}>
              {a.name}
            </a>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <form className="form-inline">
      <div className="filter">
        <input
          type="text"
          name="query"
          class="form-control mr-sm-2"
          value={searchValue}
          placeholder={`Searching on ${searchName}`}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
        {hasSorting && (
          <div className="dropdown mr-sm-2">
            <button
              type="button"
              className="btn btn-secondary-m dropdown-toggle"
              data-toggle="dropdown"
            >
              {sortObj.order === "asc" ? icons().asc : icons().desc} Sort By{" "}
              {sortObj.title}
            </button>
            <div className="dropdown-menu">
              {sortsAttr.map((a) => (
                <a className="dropdown-item" onClick={a.func}>
                  {a.name}
                </a>
              ))}
            </div>
          </div>
        )}
        {hasFiltering && renderFiltered()}
      </div>
    </form>
  );
};

export default Filter;
