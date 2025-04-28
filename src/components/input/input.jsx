import React,{useId} from 'react';
const Input = () =>{

    // const uniqId = Math.random()
    // return (
    //     <>
    //         <label htmlFor={uniqId}>email</label>
    //         <input type="text" id = {uniqId} />
    //     </>
    // )

   
    const UniqId = useId();
    // const UniqId2 = useId();
   
   
    return (
        <>
        <div>
            <label htmlFor={UniqId}>email</label>
            <input type="text" id = {UniqId} />
        </div>
        
        <div>
            <label htmlFor={`${UniqId}-username`}>usrename</label>
            <input type="text" id = {`${UniqId}-username`} />
        </div>
        
    
        


    
        </>

    )
}

export default Input