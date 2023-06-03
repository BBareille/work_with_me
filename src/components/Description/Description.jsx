export const Description = (props) => {

    let {currentDescription} = props;
    console.log(currentDescription)
    return (
        <div>
            <p>{currentDescription?currentDescription.textDescription:"No desc"}</p>
            <img src={currentDescription.image}/>
        </div>
    )
}