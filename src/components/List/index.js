import React, { Component } from "react";

import Item from "../Item";

class List extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await fetch(
      "https://my-json-server.typicode.com/MatheusKindrazki/gostack-desafio04"
    );

    console.log(response);
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <Item key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default List;
