import './App.css';
import { Component } from 'react';
import './HomePageSectionOne.css';
import image1 from './img/icon-supervisor.svg';
import image2 from './img/icon-team-builder.svg';
import image3 from './img/icon-karma.svg';
import image4 from './img/icon-calculator.svg';

class HomePageSectionOne extends Component{
    render()
    {
       return <div>
            <div className="section2-fourcards">
                <div className="section2-header">
                  <h1>Reliable, efficient delivery</h1>
                  <h2>Powered by Technology</h2>
                  <p>Our Artificial Intelligence powered tools use millions of project data points<br/>
                    to ensure that your project is successful
                  </p>
                </div>
            
                <div className="wrap">
            
                  <div className="col">
                    <div className="box cyan">
                      <h1>Supervisor</h1>
                      <p>Monitors activity to identify project roadblocks</p>
                      <img src={image1}/>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="box red">
                      <h1>Team Builder</h1>
                      <p>Scans our talent network to create the optimal team for your project</p>
                      <img src={image2}/>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="box blue">
                      <h1>Karma</h1>
                      <p>Regularly evaluates our talent to ensure quality</p>
                      <img src={image3}/>
                    </div>
                  </div>  
            
                  <div className="col">
                    <div className="box orange">
                      <h1>Calculator</h1>
                      <p>Uses data from past projects to provide better delivery estimates</p>
                      <img src={image4}/>
                    </div>
                  </div> 
            
                </div>
              </div>

        </div>
    }

} 
export default HomePageSectionOne;