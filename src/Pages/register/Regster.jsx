import { useState } from "react";
import { Redirect } from "react-router-dom";
import useToken from "../../Hooks/Authentication";





function Register() {

    const [token, setToken] = useToken()

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onSubmitForm = async(e)=> {
        e.preventDefault()
        try {
            const body = {
                user_name: username,
                user_email: email,
                user_password: password,
        
            }
          fetch("https://clinica-crm-bankend.herokuapp.com/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then((res) => res.json())
                    .then((data) => setToken(data))
            token ? <Redirect to="/ocherd" /> : <Redirect to="/login" />
        } catch (error) {
            console.error(error.message);
        }
       
<Redirect to="/" />
}

    
  



    return (<>

        <div className="wrapper">
            <form onSubmit={onSubmitForm} className="form">
           
                <h1 className="login__title">Registratsiya</h1>

                <input placeholder="Username" name="username" className="login__input" type="text" onChange={(e) => setUsername(e.target.value)} required/>
                <input placeholder="Email" name="email" className="login__input" type="text" onChange={(e) => setEmail(e.target.value)} required/>
    
                <input placeholder="password" className="login__input" type="password" onChange={(e) => setPassword(e.target.value)} required/>

                <button className="loginbtn" type="submit">Submit</button>

            </form>
        </div>


    </>)
}

export default Register;



