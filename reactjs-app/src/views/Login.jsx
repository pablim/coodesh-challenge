import React from 'react'
import { GoogleLoginButton } from '../components'
import { useGoogleLogin } from "../hooks/useGoogleLogin";

const Login = () => {

    useGoogleLogin((data) => {
        console.log('data login', data);
    });

    return (
        <div className='d-flex w-100 justify-content-center align-items-center'>
            <GoogleLoginButton clientId={process.env.REACT_APP_GOOGLE_CLIENTE_ID}/>
        </div>
    )
}

export default Login