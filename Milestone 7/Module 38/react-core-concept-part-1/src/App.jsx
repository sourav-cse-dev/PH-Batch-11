import "./App.css";

function App() {
  return (
    <>
      <h1>React core concept - part 1</h1>
      <Student name="Sourav" dept="CSE"></Student>
      <Student name="Nazmul" dept="CSE"></Student>
      <Person name="Jolil" age="17"></Person>
      <Developer name="Mozumdar" tech="JS"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Shabana" tech="C"></Developer>
      <Device model="A56" company="Samsung"></Device>
      <Device model="i16" company="Apple"></Device>
      <Device model="Note 14" company="Xiomi"></Device>
      <Player></Player>
    </>
  );
}

function Player() {
  return (
    <div className="player">
      <h3>Name: </h3>
      <p>Runs: </p>
    </div>
  );
}



function Device(props) {
  return (
    <div>
      <h2>Model: {props.model}</h2>
      <p>Company: {props.company}</p>
    </div>
  );
}

function Developer(props) {
  console.log(props);

  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person(props) {
  // const name = "Jolil";
  // const age = 20;

  const personStyle = {
    color: "red",
    fontSize: "20px",
  };
  return (
    <p style={personStyle}>
      I am a person, name: {props.name} , age: {props.age}
    </p>
  );
}

function Student(props) {
  return (
    <>
      <div className="student">
        <p>Name: {props.name}</p>
        <p>Department: {props.dept}</p>
      </div>
    </>
  );
}

export default App;
