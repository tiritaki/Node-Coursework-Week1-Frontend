import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/quotes/random")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : JSON.stringify(data)}</p>
      </header>
    </div>
  );

}

export default App;
