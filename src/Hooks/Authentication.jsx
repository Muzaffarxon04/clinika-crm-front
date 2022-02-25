import { useContext } from "react";
import { Context } from "../Context/AuthToken";


function useToken(){
    const ctx = useContext(Context);

    return [ctx.state, ctx.setState];
}


export default useToken;