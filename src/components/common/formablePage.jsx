import React from "react";

class FormablePage extends React.Component {
  state = {
    inputData: {},
  };

  onChange = (e) => {
    const inputData = { ...this.state.inputData };
    inputData[e.target.name] = e.target.value;
    this.setState({ inputData });
  };

  onSubmit = () => {};
}

export default FormablePage;
