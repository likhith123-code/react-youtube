import React from 'react';
import classes from './poster.css'

const Poster = (props) =>{
    return(
    <>
        <div className={classes.card}>
           <img src={props.image} width="200px" height="200px" />
           <div className={classes.cardbody}>
            <p className={classes.movienames}>Movie Name : {props.name}</p>
            <p className={classes.texts}>Language : {props.language}</p>
            <p className={classes.texts}>Starring : {props.starring}</p>
            <p className={classes.texts}>Genre : {props.genre}</p>
            <button className={classes.posterbutton}><a href={props.link} target="_blank">Watch Trailer Now</a></button>
           </div>
        </div>
    </>
    )
}

export default Poster;