import React, { Component } from 'react';

class FormComp extends Component{
    state={
        username:'',
        comments:'',
        course:'react'
    }
    nameHandler = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    commentHandler=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    courseHandler = (event)=>{
        this.setState({
            course:event.target.value
        })
    }
    submitHandler=(event)=>{
        alert(`${this.state.username} with course ${this.state.course}`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <div>
                    <h1>Form Submission</h1> 
{/* each one should have name and value is must : for select only 1 value needed */}

     {/* twosteps => value = state value : onChange = set state value  */}

     {/* name is for submitting data and display in the url */}
                    <hr/>
               <label>Username : </label>
               <input type="text" name="username" value={this.state.username}       onChange={this.nameHandler} />
                </div>
                <hr/>
                <div>
                    <label>Comments : </label>
                    <textarea value={this.state.comments} onChange={this.commentHandler}></textarea>
                </div>
                <hr/>
                <div>
                    <label>Course : </label>
                    <select name="course" value={this.state.course} 
                    onChange={this.courseHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                    <hr/>
                    <button type="submit">Submit Details</button>
                </div>
            </form>
        )
    }
}

export default FormComp;