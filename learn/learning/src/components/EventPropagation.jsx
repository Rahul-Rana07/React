import "./EV.css"


export const EventPropagation =() =>
{

    const handleGrandParent=() =>
    {
        console.log("GrandParent Clicked")
    }

    const handleParentClick =() =>
    {
        console.log("Parent Clicked")
    }

    const handleChildrenClick =(event) =>
    {
        console.log(event);
        event.stopPropagation();
        console.log("Children clicked")
    }

    return(
        <section>
            <div className="main-div">
                <div className="g-div"  onClickCapture={handleGrandParent}>
                    <div className="p-div" onClickCapture={handleParentClick}>
                        <div className="c-div" onClickCapture={handleChildrenClick}>
                            child Div
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}