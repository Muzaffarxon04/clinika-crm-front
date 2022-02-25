import React, {useEffect, useState } from "react";
import './user.css'




function Queue() {
    
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [phone_number, setPhonenumber] = useState("")
    const [direction_name, setDirectionname] = useState("")
    
        const [directions, setDirections] = useState([])
    
    useEffect(() => {
        fetch('https://clinica-crm-bankend.herokuapp.com/directions')
        .then(data => data.json())
    .then(res => setDirections(res))
    },[])
    
    
    const onSubmitForm = async(e)=> {
        e.preventDefault()
        try {
            const body = { first_name, last_name, phone_number, direction_name}
           await fetch("https://clinica-crm-bankend.herokuapp.com/queue", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
 alert('Malumotingiz qabul qilindi')
        } catch (error) {
            console.error(error.message);
        }
}
    return (<>
           
        <form onSubmit={onSubmitForm} className="form top">
            <h1>GET QUEUE</h1>
        <input type="text" placeholder='first name' className="login__input" value={first_name} onChange={e => setFirstname(e.target.value)}/>
        <input type="text" placeholder='last name'className="login__input" value={last_name} onChange={e => setLastname(e.target.value)}/>
        <input type="text" placeholder='phone number' className="login__input" value={phone_number} onChange={e => setPhonenumber(e.target.value)}/>
          <select name="select" id="select" className="login__input" value={direction_name} onChange={(e) => {
              setDirectionname(e.target.value)
          }}>
{
    directions && directions.map((e, i) => (
        <option key={e.direction_id} value={e.direction_name}>{e.direction_name}</option>
    ))
}
          </select>
            <button className="loginbtn" type="submit">Get queue</button>
        </form>
   
    </>)
}



export default Queue;