import "./container.css"
const Container = (props) => {

    return(
        <div className="container-main">
                {props.children}
        </div>

    )
}

export default Container;

