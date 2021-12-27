import './App.css';
import { Component } from 'react';
import './HomePageSection1.css';
import image1 from './img/Happy_smiling_man_riding_kick_scooter_on_sidewalk-removebg-preview.png';

class HomePageSection1 extends Component{
    render()
    {
        return <div>

<div class="section1">
                <div className="section1txt">

                    <h1>
                      A simple and Smart tool to help you grow your business
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea cum aut iure nihil, 
                        facere omnis doloremque reiciendis molestias similique sunt sed quam accusantium repellendus quo illum, 
                        neque, tenetur doloribus!
                    </p>
                    <div className="section1btn">
                        Learn More
                    </div>
                </div>
                <div className="section1img">
                    <img src={image1}/>
                </div>    
            </div>



        </div>
    }
}
export default HomePageSection1;