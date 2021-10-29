import React from "react";

import ListPage from "./common/listPage";
import SuggestionForm from "./suggestionForm";

class SuggestionPage extends ListPage {
  render() {
    return (
      <div className="component">
        <SuggestionForm />
        <a className={"btn btn-secondary-m"} href="#suggestion-popup">
          Create your suggestions
        </a>
      </div>
    );
  }
}

export default SuggestionPage;
