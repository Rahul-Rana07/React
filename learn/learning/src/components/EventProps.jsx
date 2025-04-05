export const EventProps =() =>
{
    const handleWelcomeUser =(user) =>
    {
        alert(`hey ${user}`)
    }

    const handleHover=() =>
    {
        alert(`Thanks for hovering me `)
    }

    return(
        <>
        <WelcomeUser  onClick ={() => handleWelcomeUser("Rahul")}
        onMouseEnter={ () => handleHover() }
        />
        </>
    )
}


const WelcomeUser =(props) =>
{
    const {onClick , onMouseEnter}= props;

    const handleGreeting =() =>
    {
        console.log(`hey users, Welcome`);
        props.onClick();
    }
    return(
        <>
        <button onClick={onClick}>Click me</button>
        <button  onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greetings</button>
        </>
    )
}