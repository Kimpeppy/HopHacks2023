
import React, { useState, ChangeEvent } from 'react';


const FormInput = ({ type, id, name, placeholder, value }) => {
    return (
        <div className="form-group">
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}


export default function registerForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    });


    const { name, email, password, password2 } = formData;

    const onChange = () => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    return(
        <section className='form'>
          <div className='form-group'>
          <FormInput type='text' id='name' name='name' placeholder='Enter your name' value = {name} onChange = {onChange} />
          <FormInput type='email' id='email' name='email' placeholder='Enter your email' value = {email} onChange = {onChange}/>
          <FormInput type='password' id='password' name='password' placeholder='Enter password' value = {password} onChange = {onChange}/>
          <FormInput
            type='password'
            id='password2'
            name='password2'
            placeholder='Confirm password'
            value = {password2} 
            onChange = {onChange}
          />
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
      </section>
    )
    
}