import "./EV.css"


export const  EventHandling =() =>
{

    // function handleButtonClick ()
    // {
    //     alert("hey I am Onclick event");
    // }


    const handleButtonClick = () =>
    {
        alert("hey I am Onclick event");
    }

    const handleWelcomeUser = (user) =>
    {
        console.log(`hello ${user} , welcome `);
    }

    return (
        <>
        <button onClick={handleButtonClick}>Click me</button>
        <br />
        <button onClick={(event ) =>handleButtonClick(event) }>Click me 2</button>
        <br />

        <button onClick ={(event ) => console.log(event) }>Inline Function</button>
        <br/>

        <button onClick = {() => alert("Hey i am Inline fat Arrow function")}>Inline arr fun</button>

        <br />
        <button onClick = {() => handleWelcomeUser("Rahul")}>click me 3</button>
        <br />
        <button onClick = {() => handleWelcomeUser("Sharad")}>click me 4</button>
        </>
    );
   
}