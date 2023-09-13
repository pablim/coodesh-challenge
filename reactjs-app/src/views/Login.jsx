import React from 'react'
import { GoogleLoginButton } from '../components'
import { useGoogleLogin } from "../hooks/useGoogleLogin";

const Login = () => {

    useGoogleLogin();

    return (
        <div className='d-flex w-100 justify-content-center align-items-center'>
            <GoogleLoginButton 
                clientId={process.env.REACT_APP_GOOGLE_CLIENTE_ID} 
                callback={data => console.log(data)}
            />
        </div>
    )
}

export default Login