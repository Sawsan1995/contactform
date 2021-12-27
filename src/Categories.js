import './App.css';
import { Component } from 'react';
import './Categories.css';
import image1 from './imgs/arrow-right.png';

class Categories extends Component{
    render(){
        return <div>
            <div className='categoriesewapper'>
                <h3 class="category-title">Categories</h3>
                <ul>
                    <li><img src={image1}></img><a href="">France</a></li>
                    <li><img src={image1}></img><a href="">Italy</a></li>
                    <li><img src={image1}></img><a href="">Miami</a></li>
                    <li><img src={image1}></img><a href="">New York</a></li>
                    <li><img src={image1}></img><a href="">Other</a></li>
                    <li><img src={image1}></img><a href="">Other Destinations</a></li>
                    <li><img src={image1}></img><a href="">Spain</a></li>
                </ul>
            </div>

        </div>
    }
    
}

export default Categories;