import React, { Component } from 'react';
import firebase,{auth} from './firebase'
import classes from './poster.css'
import Poster from './poster'


const db=firebase.firestore();
class MovieData extends Component{
    state={
        click:null, 
        prime:null,
        netflix:null,
        hotstar:null

    }
    componentDidMount(){
        console.log("Mounted");
        db.collection("amazon")
            .get()
            .then(snapshot=>{
                const prime_data=[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    prime_data.push(data)
                    
                });
                this.setState({
                    prime:prime_data
                })
            })
            .catch(err=>console.log(err))
        db.collection("netflix")
            .get()
            .then(snapshot=>{
                const netflix_data=[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    netflix_data.push(data)
                    
                });
                this.setState({
                    netflix:netflix_data
                })
            })
            .catch(err=>console.log(err))
        db.collection("hotstar")
            .get()
            .then(snapshot=>{
                const hotstar_data=[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    hotstar_data.push(data)
                    
                });
                this.setState({
                    hotstar:hotstar_data
                })
            })
            .catch(err=>console.log(err))
    }
    datalist = (name)=>{
       this.setState(
           {click:name}
       )
    }
    render(){
       let movies=null;
       if(this.state.click==="Prime"){
           movies= (
               <div>
                   {this.state.prime.map((data)=>
                      <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                      genre={data.Genre} />
                   )}
               </div>
           )
       }
       if(this.state.click==="Netflix"){
        movies= (
            <div>
                {this.state.netflix.map((data)=>
                    <Poster name={data.moviename} starring={data.starring}
                     image={data.image} language={data.language}
                     genre={data.Genre} />
                )}
            </div>
        )
    }
    if(this.state.click==="Hotstar"){
        movies= (
            <div>
                {this.state.hotstar.map((data)=>
                    <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                     genre={data.Genre} />
                )}
            </div>
        )
    } 

        return(
            <div>
                <h1 className={classes.header}>
                Stream It 
                </h1>
                <hr/>
                <div className={classes.buttonclass}>
                <button className={classes.button} onClick={()=>{this.datalist("Prime")}}>Amazon Prime Movies</button>{' '}
                <button className={classes.button} onClick={()=>{this.datalist("Netflix")}}>Netflix Movies</button>{' '}
                <button className={classes.button} onClick={()=>{this.datalist("Hotstar")}}>Hotstar Movies</button>{' '}
                </div>
                <hr/>
                <h2>
                    <span><img src="https://image.flaticon.com/icons/svg/2919/2919572.svg" width="40px" height="70px" /></span>
                    <span className={classes.header2}> {this.state.click} Movies List  </span>
                   
                </h2>
                <div className={classes.mainPage}>
                   {movies}
                </div>
            </div>
        )
    }
}
export default MovieData;