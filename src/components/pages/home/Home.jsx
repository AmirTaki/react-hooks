import React, { useContext } from "react";
import Layout from "../../pages/login/Login"
import Login from "../../pages/login/Login"
import { AppContext } from "../../../App";
import Header from "../header/header";
import styled from "./Home.module.css"

function Home(){

    const {isLogin} = useContext(AppContext)
    return (
        <div className={styled.wrapperHome}>
            <Header />


            <div className={styled.wrappersHome}>
            <Layout>

                <div className="content-wrapper">
                    
                    {
                        isLogin ? <div> شما وارد شدید </div> :  <Login />
                    }    
                </div>

            </Layout>
            </div>
                
        </div>
      
    )
}

export default Home;