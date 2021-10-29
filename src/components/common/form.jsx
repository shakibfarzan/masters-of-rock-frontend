import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const Form = ({ inputs, schema, onSubmit, onChange, btnTitle, btnIcon }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const renderInputs = () => {
    const elements = [];
    inputs.forEach((i) => {
      switch (i.style) {
        case "textarea":
          elements.push(
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                id={i.name}
                name={i.name}
                type={i.type}
                placeholder={`${i.name}...`}
                {...register(i.name)}
              ></textarea>
              <p className="error">{errors[i.name]?.message}</p>
            </div>
          );
          break;
        case "input":
          elements.push(
            <div className="form-group">
              <label htmlFor={i.name}>{i.label}</label>
              <input
                name={i.name}
                id={i.name}
                type={i.type}
                className="form-control"
                placeholder={i.name}
                {...register(i.name)}
              />
              <p className="error">{errors[i.name]?.message}</p>
            </div>
          );
          break;
        case "select":
          elements.push(
            <div className="form-group">
              <label htmlFor={i.name}>{i.label}</label>
              <select
                className="form-control"
                id={i.name}
                {...register(i.name)}
              >
                {i.options.map((o) => (
                  <option value={o}>{o}</option>
                ))}
              </select>
              <p className="error">{errors[i.name]?.message}</p>
            </div>
          );
          break;
        case "link":
          elements.push(
            <Link to={i.toLink} className="nav-link">
              {i.title}
            </Link>
          );
          break;
        default:
          break;
      }
    });
    return elements;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
      {renderInputs()}
      {btnTitle && (
        <button type="submit" className="btn btn-outline">
          {btnTitle} {btnIcon}
        </button>
      )}
    </form>
  );
};

export default Form;
