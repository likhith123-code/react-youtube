import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import Parent from './Components/ParentComp';

function App() {
  return (
    <div className="App">
      <p>Welcome to React Session</p>
      <Greet name="Likhith" place="Kamareddy">
        <h2>This is First Name</h2>
      </Greet>
      <Welcome/>
      <br/>
      <div>
      <Parent/>
      </div>
    </div>
  );
}

export default App;
