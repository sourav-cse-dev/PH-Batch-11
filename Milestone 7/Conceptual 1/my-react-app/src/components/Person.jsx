import React from "react";
import Age from "./Age";

const Person = ({ name, age }) => {
  // console.log(props);
  return (
    <>
      <div className="border p-3 m-3 flex flex-col justify-center items-center">
        I am {name},<Age age={age}></Age>
        <Age age={age}></Age>
        <Age age={age}></Age>
        <Age age={age}></Age>
      </div>
    </>
  );
};

export default Person;
