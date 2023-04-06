import './Tours.css';
import Tour from "../Tours/tour/Tour";
import { Link } from "react-router-dom";

function Tours(props) {
    return (
        <div className='Tours'>
            {
                
                props.data.map(tour => {
                    return (
                        <div className='key' key={tour.id}>
                            <Link to={`/city/${tour.id}`}>
                                <Tour name={tour.name} image={tour.image} />
                            </Link>



                        </div>


                    )
                })
                
            }

        </div>


    );
}
export default Tours;




