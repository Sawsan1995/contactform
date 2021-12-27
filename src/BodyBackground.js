import './App.css'
import { Component  } from 'react';
import './Bcontainer.css';
import Post from './Post'
import Archive from './Archive';
import Categories from './Categories';
import backgroundimage1 from './imgs/background.png'

class BodyBackground extends Component{
    render(){
        return <div className='Bcontainer' style={{
            backgroundImage: 'url('+backgroundimage1+')',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

              }}>
        <Post/>
        <Archive/><Post/> <Categories/>    
        

        </div>
    }
}

export default BodyBackground;