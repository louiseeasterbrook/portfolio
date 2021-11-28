import "./App.css";

import SecondSection from "./screens/SecondSection";
import TopSection from "./screens/TopSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { useRef } from "react";

function App() {
  const projectsRef = useRef(null);
  return (
    <div>
      <div className="screen">
        <Loading />
        <Header />
        <TopSection projectsRef={projectsRef} />
        <SecondSection projectsRef={projectsRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
