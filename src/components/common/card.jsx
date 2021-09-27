/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  srcImage,
  altImage,
  heading,
  paragraphText,
  buttonText,
  is100,
  id,
  linkTo,
}) => {
  let className = is100 ? "card card-100" : "card";
  let btn = is100 ? "primary" : "secondary";
  return (
    <div id={id} className={className}>
      <img className="card-img-top" src={srcImage} alt={altImage} />
      <div className="card-body">
        <h4 className="card-title">{heading}</h4>
        <p className="card-text">{paragraphText}</p>
        <Link to={linkTo} className={`btn btn-${btn}-m stretched-link`}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
