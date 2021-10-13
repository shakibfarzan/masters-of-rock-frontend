import React from "react";
import Comment from "./comment";
import Form from "./form";
import * as yup from "yup";
import icons from "./icons";
const schema = yup
  .object({
    Comment: yup.string().required().max(4000),
  })
  .required();

const inputs = [{ style: "textarea", type: "text", name: "Comment" }];

const CommentContainer = ({ comments, onChange, onSubmit }) => {
  return (
    <div className="card card-song-page comment-container">
      <div className="media-container">
        {comments.length === 0 ? (
          <h4>
            Doesn't have comments <br />
            Send your comment
          </h4>
        ) : (
          comments.map((comment) => (
            <Comment
              key={comment._id}
              user={comment.user}
              body={comment.body}
              dateSent={new Date(comment.dateSent).toDateString()}
            />
          ))
        )}
      </div>
      <Form
        schema={schema}
        inputs={inputs}
        onChange={onChange}
        onSubmit={onSubmit}
        btnTitle={"Send"}
        btnIcon={icons().send}
      />
    </div>
  );
};

export default CommentContainer;
