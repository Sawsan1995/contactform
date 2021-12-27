import './App.css';
import { Component } from 'react';
import './NavBar.css';
import logo from './imgs/imageedit_2_5885553030.png';

class NavBar extends Component{
    render(){
        return <div>
            <div className='navbar'>
                <div className='log'>
                    <img src={logo}/>
                </div>
                <div className='links'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a>
                        <ul class="submenu">
                        <li className="lisub"><a href="#">Blog</a></li>
                        <li className="lisub"><a href="#">Blog Details</a></li>
                        <li className="lisub"><a href="#">Element</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='navbtn'>
                    <ul>
                        <li className="button-header">
                        <a href="#" class="header-btn">Book An Appointment</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    }
    
}

export default NavBar;