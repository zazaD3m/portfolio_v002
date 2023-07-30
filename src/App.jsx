import { About, Footer, Header, Skills, Services, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
