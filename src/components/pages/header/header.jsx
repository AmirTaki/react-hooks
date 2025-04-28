import { useContext } from "react";
import { Link } from "react-router-dom"
import App, { AppContext } from "../../../App";
import styled from "./header.module.css"
function Header () {

    const {isLogin, setIsLogin} = useContext(AppContext)

    return(
        
        <header>
            <div>
                {false ? <span>امیر تاکی</span> : <button>نام کاربری</button>}
            </div>

            <div>
                <ul>
                    <li>
                        <Link to = "/">خانه</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to = "/articles">مقاله ها</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span onClick={()=>setIsLogin(false)}>خروج</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;