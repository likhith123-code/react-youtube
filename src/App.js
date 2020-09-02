import React from 'react';
import classes from './Components/DataDisplay.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieData from './Aadesh/moviedata';

function App() {
  return ( 
    <div className={classes.mainpage}>
      <MovieData/>
    </div>
  );
}

export default App;
