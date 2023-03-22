import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Hoa';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Hoa Dong'
  };
  const colorList = ['red', 'green', 'blue']
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJS with Hoa Dong
        </a>
        <p> Hello {name}, age {age}</p>
        <p> Student {student.name}</p>
        <p> Gender {isMale ? 'Male' : 'Female'}</p>

        {isMale ? <p>'Male'</p> : <p>'Female'</p>}

        
        {isMale && (
          <div>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </div>
        )}

        <ul>
          {
            colorList.map(function(color) {
              return <li style={{color}}>{color}</li>
            })}
    
        </ul>
    
      </header>
    </div>
  );
}

export default App;
