import React from 'react';
import classes from './Components/DataDisplay.css'
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Parent from './Components/ParentComp';

function App() {
  return (
    <div className={classes.mainpage}>
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
