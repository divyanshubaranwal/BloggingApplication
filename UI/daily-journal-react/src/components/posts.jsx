import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlogProvider, { BlogContext } from "../contexts/blogContext";

function Posts() {
  const [blogs] = useContext(BlogContext);

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <React.Fragment key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content.substr(0, 100)}</p>
            {blog.content.length > 100 ? (
              <Link to={"/posts/" + blog.id}>...READ MORE</Link>
            ) : null}
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Posts;
