import './Home.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tours from "../Tours/Tours";
//info={tourelement.info}

function Home(props) {
   
    const data = props.data;
    return (
        <>

            <Header />
            <div class="container">
                {
                    data.map(tourelement => {
                        return (
                            <>
                                <Tours tour_name={tourelement.name} image_url={tourelement.image} id={tourelement.id} info={tourelement.info} />
                              
                            </>
                            
                        )
                    })
                }
            </div>
            <Footer />

          

        </>
    )
}
export default Home;