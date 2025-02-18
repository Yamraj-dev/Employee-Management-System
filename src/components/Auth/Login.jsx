import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }


    return (

        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='absolute top-10 text-center'>
                <p>if you wnat to check out as an Employee<br/>email: employee1@example.com password: 123<br/>there are 5 employee id's jsut increase the number<br/>example employee2@example.com the password is same to all employee</p>
                <p>and if want to log in as a admin<br/>email: admin@me.com password: 123</p>
            </div>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        className='border-2 font-medium border-emerald-600 py-3 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email
                '/>
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        className='border-2 font-medium border-emerald-600 py-3 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button className='bg-emerald-600 font-semibold py-2 px-8 rounded-full text-xl outline-none mt-7 w-full hover:bg-emerald-700'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
