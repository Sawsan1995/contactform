import './App.css';
import { Component } from 'react';
import image1 from './img/logo.png';
import './NewNavBar.css';

class NewNavBar extends Component{
  render ()
  {
    return <div>
    <div className="header">
        <div className="logo">
            <img src={image1} alt="logo"/>
        </div>

        <div className="links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Our Customers</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
            <div className="loginbtn">
                <a href="#">Login</a>
            </div>    
        </div>
    </div>
</div>

  }
  
}
export default NewNavBar;