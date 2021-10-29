import React from "react";
import Uploader from "./common/uploader";
import FormablePage from "./common/formablePage";
import { toast } from "react-toastify";
import Form from "./common/form";
import * as yup from "yup";

class SuggestionForm extends FormablePage {
  state = {
    files: [],
  };
  schema = yup
    .object({
      artistName: yup.string().required().min(2).max(255),
      description: yup.string().required().max(2048),
    })
    .required();

  inputs = [
    {
      style: "input",
      type: "text",
      name: "artistName",
      label: "Enter Artist Name",
    },
    {
      style: "textarea",
      type: "text",
      name: "description",
      label: "Enter Description",
    },
  ];

  onSubmit = () => {};

  handleSubmitFiles = (files, allFiles) => {
    this.setState({ files });
    console.log(files);
    allFiles.forEach((f) => f.remove());
  };
  render() {
    return (
      <div id="suggestion-popup" className="suggestion-form">
        <a className="close" href="#">
          &times;
        </a>
        <h2>Send Suggestions</h2>
        <div className="row">
          <div className="col-5">
            <Form
              inputs={this.inputs}
              schema={this.schema}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              btnTitle={"Send suggestion"}
            />
          </div>
          <div className="col-7">
            <Uploader
              text="Drag or drop files that you want to upload for your suggestion"
              submitText={"Done"}
              acceptFiles={
                "image/jpeg,image/png,image/webp,audio/mpeg,video/mp4"
              }
              maxFiles={2}
              maxSizeBytes={1024 * 1024 * 50}
              onSubmit={this.handleSubmitFiles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestionForm;
