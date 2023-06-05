import "./description.css"
export const Description = (props) => {

    let {currentDescription} = props;

    if(currentDescription){
        return (
            <div className="description-container">
                <p className="description-text">{currentDescription.textDescription?currentDescription.textDescription:"No desc"}</p>
                {currentDescription.image?
                    currentDescription.image.map(item => <img className="description-image" src={item}/>): ""}
            </div>
        )
    }

}