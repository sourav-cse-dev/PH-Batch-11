import React, { useRef, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  // const handleClick = () => {
  //   setCounter(counter + 1);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };

  const buttonRef = useRef(null);
  const handleClick = () => {
    alert("I got clicked!");
  };

  const buttonRef2 = useRef(null);
  const handleClick2 = () => {
    console.log(buttonRef2);
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <p>Total Clicked {counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Click Me
      </button>

      <form onSubmit={handleSubmit}>
        <input
          className="input input-primary"
          type="text"
          // name="name"
          ref={buttonRef2}
          placeholder="Your Name"
        />
        <button
          onClick={handleClick2}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <button ref={buttonRef} onClick={handleClick} className="btn btn-primary">
        Click me
      </button>
    </div>
  );
};

export default App;
