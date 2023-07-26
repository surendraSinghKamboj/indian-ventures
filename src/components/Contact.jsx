import React, { useState } from "react";
import '../index.css';


const Contact = () => {
    const [input,setInput] = useState({
        email:"",
        password:"",
        message:""
    });
    const inputChange= (event)=>{
        setInput({...input,[event.target.name]:event.target.value});
    }
    const HandleData = () =>{
        console.log(input);
    }
    
  return (
    <div class="form-main">
    <div class="main-wrapper">
      <h2 class="form-head">Contact From</h2>
      <form class="form-wrapper">
        <div class="form-card">
          <input
            class="form-input"
            type="text"
            name="full_name"
            required="required"
          />
          <label class="form-label" for="full_name">Full Name</label>
        </div>

        <div class="form-card">
          <input
            class="form-input"
            type="email"
            name="email"
            required="required"
          />
          <label class="form-label" for="email">Email</label>
        </div>

        <div class="form-card">
          <input
            class="form-input"
            type="number"
            name="phone_number"
            required="required"
          />
          <label class="form-label" for="phone_number">Phone number</label>
        </div>

        <div class="form-card">
          <textarea
            class="form-textarea"
            maxlength="420"
            rows="3"
            name="phone_number"
            required="required"
          ></textarea>
          <label class="form-textarea-label" for="phone_number"
            >Address</label
          >
        </div>
        <div class="btn-wrap">
          <button> Submit </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Contact;



