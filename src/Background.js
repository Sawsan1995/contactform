import './App.css';
import { Component } from 'react';
import './Background.css'
import bgimage from './imgs/xh1_hero1.png.pagespeed.ic.Eq4bvi0QNi.png';
import image2 from './imgs/hero-shape.png';

class Background extends Component{
    render(){
        return <div>
            <div calssName="bg"  
        style={{
          backgroundImage: 'url('+bgimage+')',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",

            }}
          >
          </div>
          <div className='rightimgbg'>
              <img src={image2}></img>
          </div>
        </div>
    }
    
}

export default Background;