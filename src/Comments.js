import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

class Comment extends Component{
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response =>{
            console.log(response.data)
            this.setState({
                comments: response.data
            })

        })
    }

    state = {
        comments : []
    }
    render(){
        return (
            <div>
                
                {this.state.comments.map(x => 
                    <div className="mb-3 commentswrapper">
                        <div>
                        <label for="exampleFormControlInput1" className="form-label">Post ID is "{x.id}"</label><br/>
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder={x.email}></input>
                        <label for="exampleFormControlTextarea1" className="form-label">Comment Body</label>
                        <textarea className="form-control comment" id="exampleFormControlTextarea1" rows="1">{x.body}</textarea>
                        </div>
                    </div>)}
            </div>
        );
    }
}

export default Comment;