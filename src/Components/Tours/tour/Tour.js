import "./Tour.css"

const Tour =(props)=> {
    // const information = props.id;

    return (
        <div className="Tour">
        <h2>{props.name}</h2>
     <img src={props.image} alt={props.name}/>



        </div>
    );
}
export default Tour;