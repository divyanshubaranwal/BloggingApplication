import React, { Component } from "react";

const Post = () => {
  const blog = {
    id: 1,
    title: "First Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum, erat quis sollicitudin consectetur, lectus magna vestibulum mi, id mattis eros eros a lectus. Sed ut est sit amet mi tristique lobortis. Nunc tempor eros a ullamcorper auctor. Integer varius vehicula mi, quis imperdiet ante aliquam et. Aenean nec sagittis diam. Maecenas finibus mi a egestas pharetra. Nunc id gravida felis, vitae laoreet arcu. Vestibulum porttitor, sem ut vulputate faucibus, sapien risus hendrerit velit, at aliquet eros tortor id enim. Quisque at mattis neque, sed accumsan lorem. Suspendisse vulputate aliquam purus, sed commodo orci suscipit in.",
  };
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <hr />
    </div>
  );
};

export default Post;
