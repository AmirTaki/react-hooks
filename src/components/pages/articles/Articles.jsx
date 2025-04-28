import { useContext } from "react";
import Layout from "../layout/Layout"
import { AppContext } from "../../../App";
function Articles () {
     
    const {isLogin} = useContext(AppContext)
   
    return (
    
        <Layout>
            {isLogin ? (
                <div>
                    <input type="text" />
                    <label htmlFor="">test</label>
                </div>
            ) : (<p> شما وارد شوید </p>)}
        </Layout>
        
    )
}

export default Articles;