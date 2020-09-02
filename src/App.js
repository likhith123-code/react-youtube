import React from 'react';
import classes from './Components/DataDisplay.css'
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Parent from './Components/ParentComp';
import FormComp from './Components/Forms';
import MovieData from './Aadesh/moviedata';

function App() {
  return ( 
    <div className={classes.mainpage}>
      <p>Welcome to React Session</p>
      <br/>
      <div>
      <Parent/>
      </div>
      <br/>
      <div>
        <FormComp/>
      </div>
      <div>
      <MovieData/>
      </div>
    </div>
  );
}

export default App;
