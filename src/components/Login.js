import React, {useState} from 'react'
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const onCredentialsChange = event => {
        const value = event.target.value;
        setCredentials({
            ...credentials,
            [event.target.name]: value
        })
    }

    const loginHandler = (e) => {
        
        e.preventDefault()
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user)
            navigate('/loggedIn')
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            navigate('/login-error')
        });
    }

    return (
        
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='mb-4 text-3xl'>Login</h1>
            <form onSubmit={loginHandler} className='flex flex-col text-gray-900'>
                <input name="email" value={credentials.email} onChange={onCredentialsChange} placeholder='Email' className='my-2' type="text" />
                <input name="password" value={credentials.password} onChange={onCredentialsChange} placeholder='Password' className='my-2' type="password" />
                <input className='my-2 bg-yellow-500 rounded-md' type="submit" />
            </form>
        </div>
        
    )
}

export default Login