import React, {useState, ChangeEvent} from 'react';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <form>
            <label htmlFor='name'>Email</label>
            <input name='name' value={email} onChange={({target}) => setEmail(target.value)} className='text-black'></input>
            <label htmlFor='name'>Password</label>
            <input name='name' value={password} onChange={({target}) => setPassword(target.value)} className='text-black'></input>
        </form>
    )
}

export default Login;