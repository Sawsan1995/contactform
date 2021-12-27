import './App.css';
import { Component } from 'react';
import './PostFormat2.css';
import image1 from './imgs/photo-1437915015400-137312b61975-330x220.jpg';

class PostFormats extends Component{
    render(){
        return <div>
            <div className='Posts-Formats'>
                <h5><a href="#">TEMPLATE</a></h5>
                <hr></hr>
                <h2>Template: Featured Image (No Sidebar Layout)</h2>
                <h6>Posted on October 5, 2016  by Aigars</h6>
                <div className='wrapimage'>
                    <img src={image1} className='image'></img>
                    <div className='img-description'></div>
                </div>
                <p>This post should display a featured image, if the theme supports it. 
                    Non-square images can provide some unique styling issues. 
                    This post tests a vertical featured image.
                </p>
            </div>
        </div>
    }
    
}

export default PostFormats;