import React, { Component } from 'react';
import firebase,{auth} from './firebase'
import classes from './poster.css'
import Poster from './poster'
import Default from './default';


const db=firebase.firestore();
class MovieData extends Component{
    state={
        click:null,
        default:null, 
        prime:null,
        netflix:null,
        hotstar:null,
        recent:null,
        webseries:null,
        other:null,
        applink:null,
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
    submitdata = (e) =>{
        
        alert("Movie Will be Added Soon :)");
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
        e.preventDefault();
       
        
    }
    render(){
       let movies=null;
       if(this.state.click==null){
          movies=(
              <div>
                 <Default />
              </div>
          )
       }
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
                <img src="https://image.flaticon.com/icons/svg/860/860539.svg" width="50px" height="50px"/>{'  '}Stream It
                </h1>
                <span className={classes.contactus}>{'         '} <img src="https://img.icons8.com/office/2x/gmail-login.png" width="15px" height="15px" /> Contact Us : streamitfree247@gmail.com</span>
                <hr/>
                </div>
                <div>
                <h5 className={classes.header3}>
                See Available Movies By Clicking Below
                </h5>
               
                </div>
            
                <hr/>
             <div className={classes.buttonclass}>
                <button className={classes.button} onClick={()=>{this.datalist("Netflix Movies")}}>Netflix Movies</button>
                <button className={classes.button} onClick={()=>{this.datalist("Prime Movies")}}>Amazon Prime Movies</button>
                <button className={classes.button} onClick={()=>{this.datalist("Hotstar Movies")}}>Hotstar Movies</button>
                <button className={classes.button} onClick={()=>{this.datalist("Web Series")}}>Web Series</button>
                <button className={classes.button} onClick={()=>{this.datalist("Recently Added Movies")}}>Recently Added</button>
                <button className={classes.button} onClick={()=>{this.datalist("Other Movies")}}>Others</button>
                </div>
                <hr/>
                <div>
                    <span className={classes.moviehead}>Download our App to stream Movies online. Click Here to Download </span>
                    <br/>
                    <button className={classes.link} ><a href="http://www.mediafire.com/file/s8hzk8srmjpnhoc/app-debug.apk/file" target="_blank "><span><img src="https://image.flaticon.com/icons/svg/892/892634.svg" width="30px" height="40px"/></span>Download Now</a></button>
                  
                </div>
                <div>
                     <form onSubmit={this.submitdata}>

                    
                        <label className={classes.label}>Movie Request : </label>
                        <input onChange={this.movietitle} type="text"  placeholder="Enter Movie Name" value={this.state.suggest} required/>{' '}
                        <label className={classes.label}>Language : </label>
                        <input onChange={this.movielanguage} type="text" placeholder="Enter Langauge" value={this.state.language} required />
                        
                        <button type="submit" className={classes.button2}>Submit</button>
                    </form>
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