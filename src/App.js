import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TakeAction from "./components/TakeAction";

function App() {
  return (
    <div className="bg-[#151515]">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Take Action */}
      <TakeAction />
      {/* Feedback */}
      <Feedback />
      <div className="h-screen"></div>
    </div>
  );
}

export default App;

