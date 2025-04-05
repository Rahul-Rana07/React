import { useState } from "react"

// const user =[
    
// ]

export const DerivedState =() =>
{

    const [users , setUsers] = useState([
    { name: "Rahul" , age :21 },
    { name: "Rohan" , age :27 },
    { name: "Vivek" , age :19 },
    { name: "Harman" , age :20 },
    ])

    const userCount= users.length;

    const averageAge = users.reduce((accum ,curEle) => accum +curEle.age , 0)/ userCount
    
    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                 {users.map((curEle , index) =>{
                 return(
                    <li key ={index}>
                        {curEle.name} - {curEle.age} year old
                    </li>
                 );
                 })}
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average Age : {averageAge}</p>
        </div>
    )
}