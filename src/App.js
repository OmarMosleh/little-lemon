import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="container">

      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
