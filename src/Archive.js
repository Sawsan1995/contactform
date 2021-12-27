import './App.css';
import { Component } from 'react';
import './Archive.css';
import image1 from './imgs/arrow-right.png';

class Archive extends Component{
    render(){
        return <div>
            <div className='archivewapper'>
                <h3 class="archive-title">Archives</h3>
                <ul>
                    <li><img src={image1}></img><a href="">May 2020</a></li>
                    <li><img src={image1}></img><a href="">July 2017</a></li>
                    <li><img src={image1}></img><a href="">September 2015</a></li>
                    <li><img src={image1}></img><a href="">July 2015</a></li>
                    <li><img src={image1}></img><a href="">June 2015</a></li>
                    <li><img src={image1}></img><a href="">March 2015</a></li>
                    <li><img src={image1}></img><a href="">June 2013</a></li>
                    <li><img src={image1}></img><a href="">May 2013</a></li>
                    <li><img src={image1}></img><a href="">April 2013</a></li>
                    <li><img src={image1}></img><a href="">March 2013</a></li>
                </ul>
            </div>

        </div>
    }
    
}

export default Archive;