import React from "react";

const Footer = ({ title, paragraph1, paragraph2, footer, link }) => {
  return (
    <div className="container homepageText">
      <h1>{title}</h1>
      <h5>{paragraph1}</h5>
      <h5>{paragraph2}</h5>
      <p className="footer-paragraph">{footer}</p>
      <p>
        You can download it{" "}
        <a className="footer-link" href={link}>
          here
        </a>
      </p>
    </div>
  );
};

export default Footer;
