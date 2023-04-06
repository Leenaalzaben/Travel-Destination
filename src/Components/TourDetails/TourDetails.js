import { useParams } from "react-router-dom";
import { useState } from "react";
const data = require('../../data/db.json');
const TourDetails = () => {
    let { id } = useParams()
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            {
                data.map(element => {
                    if (element.id === id) {
                        return (
                            <div className="TourDetails">
                                <h2>{element.name}</h2>
                                <img src={element.image} alt={element.name} />
                                <p className="price">{element.price}</p>
                                <div>
                                    {
                                        readMore ?
                                            <>
                                                <p>{element.info}</p>
                                                <button onClick={() => setReadMore(false)}>Show Less</button>
                                            </>
                                            :
                                            <>
                                                <p>{(element.info).substring(0, 200)}</p>
                                                <button onClick={() => setReadMore(true)}>Show More</button>
                                            </>

                                    }
                                </div>
                            </div>
                        )
                    }








                })









            }
        </>
    )




}
export default TourDetails;