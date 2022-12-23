import './App.css';
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Slider from "./components/Slider";
import Giftset from "./components/Giftset";

function App() {
  return (
    <div className="App">
        <Header />
        <Benefits />
        <Slider />
        <Giftset />
    </div>
  );
}

export default App;
