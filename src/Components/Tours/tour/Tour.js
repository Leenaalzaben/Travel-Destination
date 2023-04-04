import "./Tour.css"
import { Link } from "react-router-dom";

function Tour(props) {
    // const information = props.id;

    return (
        <>

{/* <link to={`/city/${props.id}`}> */}
<div className='cardI'>
                <h2 className="cardName" > {props.tour_name}</h2>
                <div className="card" id="image" >
                    <img src={props.image_url} alt={props.tour_name} /></div>
                <div className="Info" id="paragraph" > {props.info}</div>


            </div>
            {/* </link> */}



        </>
    );
}
export default Tour;