import React from "react";

function Compose() {
  return (
    <div className="container">
      <h1>Compose Blog</h1>
      <form action="/compose" method="post">
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            required
          />
        </div>

        <div className="form-group">
          <label for="blog">Post</label>
          <textarea
            name="blog"
            className="form-control"
            rows="10"
            cols="80"
            id="blog"
            required
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Compose;
