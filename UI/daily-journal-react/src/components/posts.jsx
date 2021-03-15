import React, { useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const blogs = [
    {
      id: 1,
      title: "First Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum, erat quis sollicitudin consectetur, lectus magna vestibulum mi, id mattis eros eros a lectus. Sed ut est sit amet mi tristique lobortis. Nunc tempor eros a ullamcorper auctor. Integer varius vehicula mi, quis imperdiet ante aliquam et. Aenean nec sagittis diam. Maecenas finibus mi a egestas pharetra. Nunc id gravida felis, vitae laoreet arcu. Vestibulum porttitor, sem ut vulputate faucibus, sapien risus hendrerit velit, at aliquet eros tortor id enim. Quisque at mattis neque, sed accumsan lorem. Suspendisse vulputate aliquam purus, sed commodo orci suscipit in.",
    },
    { id: 2, title: "First Title", content: "First Content" },
  ];

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
