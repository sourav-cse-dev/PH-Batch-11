/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const fetchUserFunction = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const New = () => {
  const fetchUsers = fetchUserFunction();
  return (
    <div>
      <ErrorBoundary
        fallback={<p className="bg-red-500">Something went wrong...</p>}
      >
        <Suspense fallBack={<p>Loading....</p>}>
          <Posts fetchPosts={fetchPosts}></Posts>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallback={<p className="bg-red-500">Something went wrong...</p>}
      >
        <Suspense fallBack={<p>Loading....</p>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const Posts = ({ fetchPosts }) => {
  const posts = use(fetchPosts);
  console.log(posts);

  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      {posts.map((post) => {
        return (
          <div className="border p-3 m-3">
            <div key={post.id}></div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  console.log(users);

  return (
    <div>
      <h2>Users: {users.length}</h2>
      {users.map((post) => {
        return (
          <div className="border p-3 m-3">
            <div key={users.id}></div>
            <h3>{users.name}</h3>
            <p>{users.email}</p>
            <p>{users.username}</p>
            <p>{users.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default New;
