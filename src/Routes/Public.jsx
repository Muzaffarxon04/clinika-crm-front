import { Redirect, Route, useLocation } from "react-router";
import useToken from "../Hooks/Authentication";

function Public(props){
    const [token] = useToken();

    const {pathname} = useLocation();

    if(token && pathname === '/registratsiya'){
        return <Redirect to="/"/>
    }else if(token && pathname === '/login'){
        return <Redirect to="/"/>
    }
    else if(!token && pathname === '/'){
        return <Redirect to="/login"/>
    }
    else{
        <Redirect to="/registratsiya"/>
    }
    return <Route {...props}/>

}

export default Public;