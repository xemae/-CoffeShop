import './App.css';
import Header from "./components/Header/Header";
import Benefits from "./components/Benefits/Benefits";
import Coffee from "./components/Coffee/Coffee";
import Giftset from "./components/Giftset/Giftset";
import Combo from "./components/Combo/Combo";
import Footer from "./components/Footer/Footer";
import BasketModal from "./components/BasketModal/BasketModal";
import InfoModal from "./components/InfoModal/InfoModal";

function App() {

    return (
        <div
            className="App"
        >
            <BasketModal/>
            <InfoModal/>
            <Header/>
            <Benefits/>
            <Coffee/>
            <Giftset/>
            <Combo/>
            <Footer/>

        </div>
    );
}

export default App;
