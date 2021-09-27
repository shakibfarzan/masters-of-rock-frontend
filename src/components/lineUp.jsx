import React from "react";

const LineUp = ({ lineUp }) => {
  return (
    <div className="d-flex">
      {lineUp.map((musician) => (
        <div className="p-2 flex-fill">
          <p>
            <strong>
              {musician.name.firstname + " " + musician.name.lastname}
            </strong>
            {musician.instruments.map((i) => (
              <React.Fragment>
                <br />
                {i.name}
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LineUp;
