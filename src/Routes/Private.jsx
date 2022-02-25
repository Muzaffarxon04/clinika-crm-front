import { Redirect, Route } from "react-router-dom";
import useToken from "../Hooks/Authentication";

function Private(props){
    const [token] = useToken();

    if(token){
        return <Route {...props}/>
    }

    return <Redirect to="/login"/>
    

}

export default Private;