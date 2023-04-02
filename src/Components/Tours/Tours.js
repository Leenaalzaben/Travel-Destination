import './Tours.css';
function Tours(props) {
    return (
        <>
            <h2 >{props.tour_name}</h2>
            <div id="image">
                <img src={props.image_url} alt={props.tour_name} />
            </div>
        </>
    )
}
export default Tours;