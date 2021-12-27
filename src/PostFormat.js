import './App.css';
import { Component } from 'react';
import './PostFormat.css';
import image1 from './imgs/photo-1438109491414-7198515b166b-710x335.jpg';

class PostFormat extends Component{
    render(){
        return <div>
            <div className='Posts-Format'>
                <h5><a href="#">Post Format</a></h5>
                <hr></hr>
                <h2>Posts Format: Standard</h2>
                <h6>Posted on October 5, 2016  by Aigars</h6>
                <div className='wrapimage'>
                    <img src={image1} className='image'></img>
                    <div className='img-description'></div>
                </div>
                <p>All children, except one, grow up. They soon know that they 
                    will grow up, and the way Wendy knew was this. 
                </p>
              <div className='Readmore'>
                    <div className='v1'></div>
                    <h5><a href="">Read More</a></h5>
                    <div className='v1'></div>
                </div>
            </div>
        </div>
    }
    
}

export default PostFormat;