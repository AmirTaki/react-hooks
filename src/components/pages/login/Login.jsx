import { useContext } from "react";
import { AppContext } from "../../../App";

function Login () {


    const {setIsLogin} = useContext(AppContext)

    return (
        <>
          <div>
            <h2>Login</h2>
        </div>

        <div>
            <label htmlFor="">username</label>
            <input type="text" />
        </div>


        <div>
            <label htmlFor="">password</label>
            <input type="text" />
        </div>
        

        <button onClick={()=>setIsLogin(true)}>Login</button>
        </>
      
    )
}

export default Login;