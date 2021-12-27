import './App.css';
import { Component } from 'react';
import './Navigation.css';
import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa';

class Naviagation extends Component{
    render(){




        return <div>
            <div className='Navigation'>
                <div className='WebsiteLogo'>
                    <div className='Logo'>
                        <h1>Travelify</h1>
                        <h5>The best FREE travel blog WordPress theme</h5>
                    </div>
                    <div className='Socialicons'>
                        <FaFacebook className='fa Facebook'></FaFacebook>
                        <FaTwitter className='fa Twitter'></FaTwitter>
                        <FaLinkedinIn className='fa Linkedin'></FaLinkedinIn>
                        <FaGithub className='fa Github'></FaGithub>
                    </div>
                </div>
                <div className='links'>
                    <ul>
                        <li className='menu-item firstchild'><a>Home</a></li>
                        <li className='menu-item'><a>Download NOW!</a></li>
                        <li className='menu-item sub'><a>Blog</a></li>
                            <ul className='submenuBlog'>
                                <li><a>Blog Meduim Images</a></li>
                                <li><a>Blog Large Images</a></li>
                                <li><a>Blog Small Images</a></li>
                            </ul>
                        <li><a>New York</a></li>
                        <li><a>New York</a></li>
                        <li><a>Other</a></li>
                            {/* <ul className='submenuOther'>
                                <li><a>New York</a></li>
                                <li><a>France</a></li>
                                <li><a>Spain</a></li>
                                <li><a>Miamia</a></li>
                                <li><a>Italy</a></li>
                            </ul> */}
                        <li><a>Other</a></li>
                        {/* <ul className='submenuOther'>
                                <li><a>New York</a></li>
                                <li><a>France</a></li>
                                <li><a>Spain</a></li>
                                <li><a>Miamia</a></li>
                                <li><a>Italy</a></li>
                            </ul> */}
                        <li><a>WooCommerce</a></li>
                        <li><a>Contact us</a></li>       
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Naviagation;