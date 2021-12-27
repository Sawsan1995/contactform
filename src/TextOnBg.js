import './App.css';
import { Component } from 'react';
import './TextOnBg.css';

class TextOnBg extends Component{
    render(){
        return <div>
            <div className='Text-wrapper'>
                <h4>Good Look Guaranteed</h4>
                <h1>Experienced and traditional stylish barber shop</h1>
                <a href="#" className='border-btn'>Book An Appointment</a>
            </div>
        </div>
    }
}

export default TextOnBg;