import './App.css';
import { Component } from 'react';
import SwiperSlider from './SwiperSlider';
import Navigation from './Navigation';
import BodyBackground from './BodyBackground';
import Comment from './Comments';
import {Field, Formik}  from 'formik';
import Form from './Form';
import * as yup from 'yup';


class App extends Component{

  valo=()=>{
    console.log('hello');
  }
  fomy=(props)=>{
    // return<form onSubmit={props.handleSubmit}>
    //   <Field type='email' name='name' required></Field>
    //   <Field type='password' name='pass' required></Field>

    //   <button type='submit'>Submit</button>

    // </form>
  }
  render (){
    return <div>
      {/* <Formik
        initialValues={{

          name:"",
          pass:"",
        }
        }
        onSubmit={this.valo}
        render={this.fomy}

      /> */}
     <Navigation/> 
    <Form/>
      


    </div>
  }
}


export default App;
