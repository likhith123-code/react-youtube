import React, { Component } from 'react';
import firebase,{auth} from './firebase'
import classes from './poster.css'
import Poster from './poster';
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
       if(this.state.click==="prime"){
           movies= (
               <div>
                   {this.state.prime.map((data)=>
                      <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                      genre={data.Genre} />
                   )}
               </div>
           )
       }
       if(this.state.click==="netflix"){
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
    if(this.state.click==="hotstar"){
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
                <h1>Stream It - Best Page for streaming online movies</h1>
                <hr/>
                <div>
                <button onClick={()=>{this.datalist("prime")}}>Amazon Prime Movies</button>
                <button onClick={()=>{this.datalist("netflix")}}>Netlfix Movies</button>
                <button onClick={()=>{this.datalist("hotstar")}}>Hotstar Movies</button>
                </div>
                <hr/>
                <h2>{this.state.click} Movies List</h2>
                <div className={classes.mainPage}>
                   {movies}
                </div>
            </div>
        )
    }
}
export default MovieData;