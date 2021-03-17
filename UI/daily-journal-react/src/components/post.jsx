import React, { Component, useContext } from "react";
import { BlogContext } from "../contexts/blogContext";
import ContentTemplate from "./contentTemplate";

const Post = ({ match }) => {
  const [blogs, addBlog] = useContext(BlogContext);
  console.log(match.params.id);
  const displayBlog = blogs.find((blog) => blog.id == match.params.id);
  console.log(displayBlog);

  return (
    <div>
      <ContentTemplate
        title={displayBlog.title}
        content={displayBlog.content}
      />
      <hr />
    </div>
  );
};

export default Post;
