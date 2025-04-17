/* eslint-disable no-unused-vars */
import React, { Suspense, use } from "react";

const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const New = () => {
  return (
    <div>
      <Suspense fallBack={<p>Loading....</p>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense>
    </div>
  );
};

const Posts = ({ fetchPosts }) => {
  const posts = use(fetchPosts);
  console.log(posts);
  
  return (
    <div>
      <h2>Posts</h2>
    </div>
  );
};

export default New;
