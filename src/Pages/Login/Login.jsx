import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import useToken from "../../Hooks/Authentication";


import './login.css'


function Login() {


    
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [token, setToken] = useToken()



    
    const onSubmitForm = async(e)=> {
        e.preventDefault()
        try {
            const body = {
                user_name: username,
                user_password: password,
             
            }

       
            await fetch("https://clinica-crm-bankend.herokuapp.com/login", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then(res => res.json())
                    .then((token) => setToken(token))
                   
            token ? <Redirect to="/ocherd" /> : <Redirect to="/registratsiya" />
        } catch (error) {
            console.error(error.message);
        }
}



    return (<>

        <div className="wrapper">
            <form onSubmit={onSubmitForm} className="form">

                <h1 className="login__title">Log in</h1>

                <input placeholder="email" name="username" className="login__input" type="text" onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="password" className="login__input" type="password" onChange={(e) => setPassword(e.target.value)} />

                <button className="loginbtn" type="submit">Log In</button>


<p className="sigup">Not a member?<Link to ="/registratsiya" className="sigup">Sign up now</Link></p>
            </form>
        </div>


    </>)
}


export default Login;



