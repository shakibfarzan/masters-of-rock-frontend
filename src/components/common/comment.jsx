import React from "react";

const Comment = ({ user, body, dateSent }) => {
  const avatar = user.avatar ? user.avatar : "images/avatars/User_Avatar_2.png";
  return (
    <div className="media mb-1">
      <img
        src={`${process.env.PUBLIC_URL}/${avatar}`}
        alt={`${user.name.firstname} ${user.name.lastname} avatar`}
        className="align-self-start mr-3"
      />
      <div className="media-body">
        <h5>
          {user.name.firstname + " " + user.name.lastname}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <small>@{user.username}</small>
        </h5>
        <p>{body}</p>
        <p>
          <small>{dateSent}</small>
        </p>
      </div>
    </div>
  );
};

export default Comment;
