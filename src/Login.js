import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const history = useHistory()//it allows us to programmaticaly change the url.

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault()//prevent the page from refreshing because we dont like refreshing in react

        //some fancy firebase login things....
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')//we are forcing the program to redirect to the home page if the registration went fine
                }
            })//then it will come back if everything were fine (it successfully created a new user with email and password)
            .catch(e => alert(e.message))
    }
    const register = e => {
        e.preventDefault()//prevent the page from refreshing because we dont like refreshing in react

        //some fancy firebase register things....
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history.push('/')//we are forcing the program to redirect to the home page if the registration went fine
                }
            })//then it will come back if everything were fine (it successfully created a new user with email and password)
            .catch(e => alert(e.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button 
                        className='login__signInButton'
                        type='submit'
                        onClick={signIn}
                        >Sign In</button>
                </form>
                <p>
                        By signing-in you agree to the Amazon Fake Clone
                        Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice
                        and our Interest-Based Ads
                        Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
