import React from "react";
import Uploader from "./common/uploader";
import FormablePage from "./common/formablePage";
import { toast } from "react-toastify";
import Form from "./common/form";
import * as yup from "yup";

class SuggestionPage extends FormablePage {
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

  onSubmit = ()=>{
    
  }

  render() {
    return (
      <div className="component">
        <h1>Create your suggestions</h1>
        <Uploader
          text="Drag or drop files that you want to upload for your suggestion"
          submitText={"Done"}
          acceptFiles={"image/jpeg,image/png,image/webp,audio/mpeg,video/mp4"}
          maxFiles={2}
          maxSizeBytes={1024 * 1024 * 50}
        />
      </div>
    );
  }
}

export default SuggestionPage;
