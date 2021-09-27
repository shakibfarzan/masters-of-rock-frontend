import React from "react";
import Form from "./common/form";
import * as yup from "yup";
import FormablePage from "./common/formablePage";

class SignInForm extends FormablePage {
  schema = yup
    .object({
      Username: yup.string().required().min(5).max(30),
      Password: yup.string().required().min(8),
    })
    .required();

  inputs = [
    {
      style: "input",
      type: "text",
      name: "Username",
      label: "Enter Username:",
    },
    {
      style: "input",
      type: "password",
      name: "Password",
      label: "Enter Password",
    },
    {
      style: "link",
      title: "Forget Password?",
      toLink: "/forgetPassword",
    },
  ];

  render() {
    return (
      <div className="component">
        <div className="form-container">
          <h1 className="title">Sign In</h1>
          <Form
            schema={this.schema}
            btnTitle={"Submit"}
            inputs={this.inputs}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default SignInForm;
