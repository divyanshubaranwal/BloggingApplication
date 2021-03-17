import React, { createRef, useContext } from "react";
import BlogProvider, { BlogContext } from "../contexts/blogContext";

function Compose() {
  const [blogs, addBlog] = useContext(BlogContext);

  const titleRef = createRef();
  const bodyRef = createRef();

  const submitHandler = (e) => {
    let id = blogs.length + 1;
    let blogObject = new Object();
    blogObject.title = titleRef.current.value;
    blogObject.content = bodyRef.current.value;
    blogObject.id = id;
    titleRef.current.value = null;
    bodyRef.current.value = null;

    addBlog((prevValues) => {
      return [...prevValues, blogObject];
    });
  };

  return (
    <div className="container">
      <h1>Compose Blog</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            ref={titleRef}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="blog">Post</label>
          <textarea
            name="blog"
            className="form-control"
            rows="10"
            cols="80"
            id="blog"
            ref={bodyRef}
            required
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={submitHandler}>
          Publish
        </button>
      </div>
    </div>
  );
}

export default Compose;
