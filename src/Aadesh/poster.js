import React from 'react';
import classes from './poster.css'

const Poster = (props) =>{
    return(
    <>
        <div className={classes.card}>
           <div>
            <img src={props.image} width="300px" height="300px" />
           </div>
           <div>
            <h4>Movie Name : {props.name}</h4>
            <p>Language : {props.language}</p>
            <p>Starring : {props.starring}</p>
            <p>Genre : {props.genre}</p>
           </div>
        </div>
    </>
    )
}

export default Poster;