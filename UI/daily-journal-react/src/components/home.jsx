import React from "react";
import Posts from "./posts";
import Post from "./post";
import { Link } from "react-router-dom";
import ContentTemplate from "./contentTemplate";

function Home() {
  return (
    <div>
      <ContentTemplate
        title={"Home"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum, erat quis sollicitudin consectetur, lectus magna vestibulum mi, id mattis eros eros a lectus. Sed ut est sit amet mi tristique lobortis. Nunc tempor eros a ullamcorper auctor. Integer varius vehicula mi, quis imperdiet ante aliquam et. Aenean nec sagittis diam. Maecenas finibus mi a egestas pharetra. Nunc id gravida felis, vitae laoreet arcu. Vestibulum porttitor, sem ut vulputate faucibus, sapien risus hendrerit velit, at aliquet eros tortor id enim. Quisque at mattis neque, sed accumsan lorem. Suspendisse vulputate aliquam purus, sed commodo orci suscipit in."
        }
      />
      <hr />
      <Link to="/compose" className="btn btn-success">
        Compose
      </Link>
      <hr />
      <Posts />
    </div>
  );
}

export default Home;
