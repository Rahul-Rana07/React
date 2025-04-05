import { useState } from "react"


export const LiftStateUp = () => {

    const [inputValue , setInputValue] = useState("");

  return (
    <div className="main-div">
      <InputComponent  inputValue ={ inputValue} setInputValue ={setInputValue}/>
      <DisplayComponent inputValue ={ inputValue} />
    </ div>
  )
}

const InputComponent=( {inputValue , setInputValue}) =>
{
   

    return(
        <>
        <input type="text" placeholder="enter your name" value ={inputValue}  onChange={(e) =>setInputValue(e.target.value)}></input>
        </>
    )
}


const DisplayComponent =({inputValue}) =>
{
    return(
        <>
        <p>The current inputValue is : {inputValue}</p>
        </>
    )
}

