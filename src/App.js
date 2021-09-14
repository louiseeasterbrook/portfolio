import "./App.css";
import Navbar from "./components/Navbar";
import SecondSection from "./screens/SecondSection";
import TopSection from "./screens/TopSection";

function App() {
  return (
    <div>
      <div className="screen">
        <Navbar />
        <TopSection />
        <SecondSection />
      </div>
    </div>
  );
}

export default App;
