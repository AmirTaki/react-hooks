import { useEffect, useState } from "react";
import Header from "./header/Header";

const Home = () => {
   

const [name, setName] = useState ("amir");


//    useEffect
useEffect(()=>{
    // Api Call
    console.log("mounting");
    console.log(name)

    // counter
    let count = 0;
    const counter = setInterval(() => {
        // console.log(++count);
    }, 1000);

    return()=>{
        console.log("unMounting")
        clearInterval(counter)
    };

}, [name])
   

console.log("init render")
   
   
    return (
        <>
       <Header />
       <br></br>

        <h1>Home</h1>

        <br></br>
        <button onClick={()=>{
            setName("mani")
        }}>change Name</button>
        </>
    )
}
export default Home;

// useEffect(()=>{

// }, [])
   