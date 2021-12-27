import './App.css';
import {Component} from 'react';
import image1 from './img/logo.png';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

class Footer extends Component{
    render()
{  
return<div>
    <div class="footer">
                <img src={image1}/>
                <div className="footer-pages">
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <hr/>
                <div className="Footer-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Our Customers</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>    
                </div>
                <div className="social-media-icons">
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                </div>
                <h6>© 2020 - Brew7 Coffee. All rights reserved</h6>
            </div>
</div> 
}
}
export default Footer;
