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
        hotstar:null,
        recent:null,
        webseries:null,
        other:null,
        applink:null,
        formdata:'',
        suggest:'',
        language:''

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
        db.collection("recent")
            .get()
            .then(snapshot=>{
                const recent_data=[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    recent_data.push(data)
                    
                });
                this.setState({
                    recent:recent_data
                })
            })
            .catch(err=>console.log(err))
        db.collection("webseries")
            .get()
            .then(snapshot=>{
                const webseries_data=[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    webseries_data.push(data)
                    
                });
                this.setState({
                    webseries:webseries_data
                })
            })
            .catch(err=>console.log(err))
        db.collection("other")
            .get()
            .then(snapshot=>{
                const others_data=[]
                snapshot.forEach(doc => {
                    const data=doc.data()
                    others_data.push(data)
                    
                });
                this.setState({
                    other:others_data
                })
            })
            .catch(err=>console.log(err))
    }
    datalist = (name)=>{
       this.setState(
           {click:name}
       )
    }
    movietitle = (event)=>{
        this.setState({
            suggest:event.target.value
        })
    }
    movielanguage=(event)=>{
        this.setState({
            language:event.target.value
        })
    }
    submitdata = () =>{
        
        this.setState({
            formdata:"Movie Will Be Added Soon :)"
        })
        db.collection('suggestions')
        .add({
            moviename:this.state.suggest,
            language:this.state.language
        })
        .catch(er=>console.log(er));
        this.setState({
            language:' ',
            suggest:' '
        })
        
    }
    render(){
      let movies=null;

       if(this.state.click==="Prime Movies"){
           movies= (
               <div>
                   {this.state.prime.map((data)=>
                      <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                      genre={data.Genre}    link={data.link} />
                   )}
               </div>
           )
       }
       if(this.state.click==="Netflix Movies"){
        movies= (
            <div>
                {this.state.netflix.map((data)=>
                    <Poster name={data.moviename} starring={data.starring}
                     image={data.image} language={data.language}
                     genre={data.Genre}
                     link={data.link} />
                )}
            </div>
        )
    }
    if(this.state.click==="Hotstar Movies"){
        movies= (
            <div>
                {this.state.hotstar.map((data)=>
                    <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                     genre={data.Genre}    link={data.link} />
                )}
            </div>
        )
    } 
    if(this.state.click==="Other Movies"){
        movies= (
            <div>
                {this.state.other.map((data)=>
                    <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                     genre={data.Genre}   link={data.link}  />
                )}
            </div>
        )
    } 
    if(this.state.click==="Recently Added Movies"){
        movies= (
            <div>
                {this.state.recent.map((data)=>
                    <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                     genre={data.Genre}    link={data.link} />
                )}
            </div>
        )
    } 
    if(this.state.click==="Web Series"){
        movies= (
            <div>
                {this.state.webseries.map((data)=>
                    <Poster name={data.moviename} starring={data.starring} image={data.image} language={data.language} 
                     genre={data.Genre}   link={data.link}  />
                )}
            </div>
        )
    } 
    

        return(
            <div className={classes.mainPage}>
                <div  className={classes.header}>
                <h1>
                Stream It
                </h1>
                <span>{'         '} <img src="https://img.icons8.com/office/2x/gmail-login.png" width="30px" height="30px" /> Contact Us : streamitfree247@gmail.com</span>
                <hr/>
                <h4>
                See Available Movies By Clicking Below
                </h4>
                </div>
                <hr/>
                <div className={classes.buttonclass}>
                <button className={classes.button} onClick={()=>{this.datalist("Recently Added Movies")}}>Recently Added</button>
                <button className={classes.button} onClick={()=>{this.datalist("Prime Movies")}}>Amazon Prime Movies</button>
                <button className={classes.button} onClick={()=>{this.datalist("Netflix Movies")}}>Netflix Movies</button>
                <button className={classes.button} onClick={()=>{this.datalist("Hotstar Movies")}}>Hotstar Movies</button>
                <button className={classes.button} onClick={()=>{this.datalist("Web Series")}}>Web Series</button>
                <button className={classes.button} onClick={()=>{this.datalist("Other Movies")}}>Others</button>
                </div>
                <hr/>
                <div>
                    <span className={classes.moviehead}>Download our App to stream Movies online. Click Here to Download </span>
                    <br/>
                    <button className={classes.link} ><a href="https://i.diawi.com/eyB2KE" target="_blank "><span><img src="https://image.flaticon.com/icons/svg/892/892634.svg" width="30px" height="40px"/></span>Download Now</a></button>
                  
                </div>
                <div>
                        <label className={classes.label}>Movie Suggestion : </label>
                        <input onChange={this.movietitle} type="text" placeholder="Enter Movie Name" value={this.state.suggest}/>{' '}
                        <label className={classes.label}>Language : </label>
                        <input onChange={this.movielanguage} type="text" placeholder="Enter Langauge" value={this.state.language}/>
                        
                        <button onClick={this.submitdata} className={classes.button}>Submit</button>
                    <div className={classes.message}>{this.state.formdata}</div>
                </div>
                <hr/>
                <div className={classes.mainpage}>
                    {movies}
                </div>
            </div>
        )
    }
}
export default MovieData;