import React, { Component } from 'react';
import firebase,{auth} from './firebase'
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
    }
    datalist = (name)=>{
       this.setState(
           {click:name}
       )
    }
    render(){
        let primemovies=null;
       if(this.state.click==="prime"){
           primemovies= (
               <div>
                   {this.state.prime.map((data)=>
                       <div> 
                           <p>Movie Name : {data.moviename}</p>
                           <p>Language : {data.language}</p>
                           <p>Starring : {data.starring}</p>
                           <p>Genre : {data.Genre}</p>
                           <hr/>
                         </div>
                   )}
               </div>
           )
       }
        return(
            <div>
                <h1>Stream It - Best Page for streaming online movies</h1>
                <hr/>
                <h2>Amazon Movies List</h2>
                <div>
                   {primemovies}
                </div>
                <br/>
                <button onClick={()=>{this.datalist("prime")}}>Amazon Prime Movies</button>
            </div>
        )
    }
}
export default MovieData;