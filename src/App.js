import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Skills from "./component/Skills";
import "boxicons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "boxicons/css/boxicons.min.css";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Projects from "./component/Project";
import Stats from "./component/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
