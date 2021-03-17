import React, { createContext, useState } from "react";

export const BlogContext = createContext();

function BlogProvider(props) {
  const [blogs, addBlog] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, addBlog]}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
