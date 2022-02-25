
import './Home.scss'
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useToken from '../../Hooks/Authentication';

function handleToken() {
    window.location.reload()
    window.localStorage.removeItem('token')
}


function Home() {



    const [directions, setDirections] = useState([])
    const [token] = useToken()

useEffect(() => {
    fetch('https://clinica-crm-bankend.herokuapp.com/directions')
    .then(data => data.json())
.then(res => setDirections(res))
},[])

    return (<>
        <section className={`home`}>
            <div className="container">

<div className="navbars">
<h1>Welcome to Online Clinc</h1>
{!token && <Link to="/login" className="siginbtn">Login in</Link>}
{token && <Link to="/ocherd" className="siginbtn">GET QUEUE</Link>}
{!token && <Link to="/registratsiya" className="siginbtn">Sig in</Link>}
{token && <button  onClick={handleToken} className="siginbtn">LOG OUT</button>}

</div>
<h2 className="servistitle">Bizning hizmatlar</h2>
    <div className="cards">
    {directions && directions.map((e) => (
        <div className="div" key={e.direction_id}>{e.direction_name}</div>
    ))
    }

    </div>        
            </div>
        </section>
    </>)
}


export default Home;