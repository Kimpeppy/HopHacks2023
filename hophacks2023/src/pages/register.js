
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

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form>
      <label htmlFor='name'>Email</label>
      <input name='name' value={name} onChange={({target}) => setName(target.value)} className='text-black'></input>
    </form>
  )
  
}
    
export default Register;