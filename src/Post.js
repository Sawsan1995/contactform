import './App.css';
import { Component } from 'react';
import './Post.css';
import image1 from './imgs/Spain-Plaza-de-Cibeles-Madrid-1.jpg';
import {FaUserAlt } from 'react-icons/fa';
import {IoMdTime } from 'react-icons/io';
import {ImFolderOpen, } from 'react-icons/im';

class Post extends Component{
    render(){
        return <div>
            <div className='postwrapper'>
                <img src={image1}></img>
                <h2 class="entry-title">
                    <a href="">This post has no body – almost</a>
                </h2>
                <p>Cras leo tortor, condimentum id semper eu, 
                    sodales id elit. Maecenas commodo dolor vel massa gravida vehicula. 
                    Morbi tristique sapien ac dui tempus imperdiet.
                </p>
                <div className='postfooter'>
                    <FaUserAlt className='icon'/><h6>Aigars</h6>
                    <IoMdTime className='icon'/><h6>March 5, 2015</h6>
                    <ImFolderOpen className='icon'/><h6>New York, Other Destinations</h6>
                    <h5>This post has no body – almost</h5>
                    <div className='ReamMore btn'>Read More</div>
                </div>

            </div>
        </div>
    }
}

export default Post;
