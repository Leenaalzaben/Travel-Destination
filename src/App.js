
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Tours from "./Components/Tours/Tours";

const ToursData = require("./data/db.json");
function App() {
  return (
    <div>
      <Header />
      {
        ToursData.map(tourelement => {
          return (
            <Tours tour_name={tourelement.name} image_url={tourelement.image} />
          )
        })
      }
      <Footer />
    </div>


  );
}

export default App;
