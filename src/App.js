import './App.css';
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Coffee from "./components/Coffee/Coffee";
import Giftset from "./components/Giftset/Giftset";
import Combo from "./components/Combo/Combo";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";
import BasketModal from "./components/BasketModal";
import InfoModal from "./components/InfoModal";

function App() {
    // const basketShowed = useSelector(state => state.toolkit.isBasketShowed)
    // const infoShowed = useSelector(state => state.toolkit.isInfoShowed)
    //
    // if (basketShowed) {return <BasketModal />}
    //
    // if (infoShowed) {return <InfoModal />}

    return (
    <div className="App">
        <BasketModal/>
        {/*<InfoModal/>*/}
        <Header/>
        <Benefits />

        <Coffee />
        <Giftset />
        <Combo />
        <Footer />

    </div>
  );
}

export default App;
