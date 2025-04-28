import React from "react";
import Layout from "../../pages/login/Login"
import Login from "../../pages/login/Login"

function Home(){
    return (
        <Layout>

            <div className="content-wrapper">
                
                {
                    false ? <div> شما وارد شدید </div> :  <Login />
                }    
            </div>

        </Layout>
    )
}

export default Home;