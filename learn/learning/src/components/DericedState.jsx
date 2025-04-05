import { useState } from "react"

// const user =[
    
// ]

export const DericedState =() =>
{

    const [user , setUser] = useState([
    { name: "Rahul" , age :21 },
    { name: "Rohan" , age :27 },
    { name: "Vivek" , age :19 },
    { name: "Harman" , age :20 },
    ])
    
    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                 {user.map((curEle , index) =>{
                 return(
                    <li key ={index}>
                        {curEle.name} - {curEle.age} year old
                    </li>
                 );
                 })}
            </ul>
        </div>
    )
}