import { useState } from "react"

export const State =() =>
{
    // let value =0;
    // const handleButtonClick =() =>
    // {
    //     value++;
    //     console.log(value);
    // }
    const [count , setCount] = useState(0);
    console.log("Parent  Component Rendering");
    const handleButtonClick =() =>
    {
        setCount(()=> count+1)
    }

    return(
        <>
        <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </section>
        <ChildCom count = {count}/>
        </>
    )
}


function ChildCom ({count}) 
{
    console.log("Child Component Rendering");
    return(
        <div className="main-div">
           <h1> child component -{count}</h1>
        </div>
    )
}