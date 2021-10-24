import "./App.css";
import Navbar from "./components/Navbar";
import SecondSection from "./screens/SecondSection";

function App() {
  return (
    <div>
      <div className="screen">
        <Navbar />
        <SecondSection />
      </div>
    </div>
  );
}

export default App;
