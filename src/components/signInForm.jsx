import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "./common/form";
import * as yup from "yup";
import FormablePage from "./common/formablePage";
import auth from "../services/authService";

class SignInForm extends FormablePage {
  schema = yup
    .object({
      username: yup.string().required().min(5).max(30),
      password: yup.string().required().min(8),
    })
    .required();

  inputs = [
    {
      style: "input",
      type: "text",
      name: "username",
      label: "Enter Username",
    },
    {
      style: "input",
      type: "password",
      name: "password",
      label: "Enter Password",
    },
    {
      style: "link",
      title: "Forget Password?",
      toLink: "/forgetPassword",
    },
  ];

  onSubmit = async () => {
    try {
      const { inputData } = this.state;
      await auth.signIn(inputData.username, inputData.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
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
