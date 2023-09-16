
import React, { useState, ChangeEvent } from 'react';


const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")


  const onSubmit = () => {
    if (!name || !email || !password || !password2) {
      console.log("Please fill out all forms");
      return;
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='name'>Email</label>
      <input name='name' value={name} onChange={({target}) => setName(target.value)} className='text-black'></input>
      <label htmlFor='name'>Name</label>
      <input name='name' value={email} onChange={({target}) => setEmail(target.value)} className='text-black'></input>
      <label htmlFor='name'>Password</label>
      <input name='name' value={password} onChange={({target}) => setPassword(target.value)} className='text-black'></input>
      <label htmlFor='name'>Retype Password</label>
      <input name='name' value={password2} onChange={({target}) => setPassword2(target.value)} className='text-black'></input>
      <button type='submit' className='btn btn-block'>
              Submit
      </button>
    </form>
  )
  
}
    
export default Register;