import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Surname: {props.surname}</h2>
      <p>Age: {props.age}</p>
      <br />
    </>
  );
}

const App = () => {
  const name = "world!"
  const bool = true
  return (
    <div className="App">
      <Person name='John' surname='Doe' age={30} />
      <Person name='Jane' surname='C' age={43} />
      <Person name='X' surname='Y' age={12} />
    </div>
  );
}

export default App;
