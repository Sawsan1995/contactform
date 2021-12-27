import './App.css';
import { Component } from 'react';
import './Form.css';
import {Field, Formik}  from 'formik';
import {FiSend} from 'react-icons/fi';


class Form extends Component{
    fomy=(props)=>{
      return<form onSubmit={props.handleSubmit}>
        <div className="wrapper">
            <h2>CONTACT US</h2>
            <div className="form-group">
            <label for="name">Full Name</label>
            <Field type="text" name="name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
        </div>
        <div className="form-group">
            <label for="email">Email Address</label>
            <Field type="email" name="email" id="email" placeholder="email@domain.tld" required />
        </div>
        <div className="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="Type your message here...."></textarea>
        </div>
        <div className="form-group">
            <button type="submit" className="submit"><FiSend/>Send</button>
        </div>
        </div>
      </form>



    }
    render (){
      return <div>
        <Formik
          initialValues={{
  
            name:"",
            email:"",
            message:"",
          }
          }
          render={this.fomy}
  
        />
  
  
      </div>
    }
  }
  
  
  export default Form;