import './Tours.css';


import Tour from "../Tours/tour/Tour";
function Tours(props) {
    //info={props.info}
    return (
        <>
            {/* <div className='cardI'>
            <h2 className="cardName" >{props.tour_name}</h2>
            <div className="card" id="image" >
                <img src={props.image_url} alt={props.tour_name} />
            </div>
        </div> */}
            <section className="tour section">
                <Tour tour_name={props.tour_name} image_url={props.image_url} id={props.id} info={props.info} />
            </section>
        </>


    );
}
export default Tours;