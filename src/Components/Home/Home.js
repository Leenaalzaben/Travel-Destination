import './Home.css';
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tours from "../Tours/Tours";

function Home(props) {

    // const data = props.data;
    return (
        <>

            {/* <Header /> */}
            <Tours data={props.data} />
            <Footer />



        </>
    )
}
export default Home;