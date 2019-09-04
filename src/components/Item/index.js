import React from "react";

function Header({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function Item({ author, date, content, comments }) {
  return (
    <div className="post">
      <Header author={author} date={date} />
      <p className="post-content">{content}</p>
      <Comments comments={comments} />
    </div>
  );
}

export default Item;
