import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div id="page-container" style={{ margin: "0px 16px" }}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
