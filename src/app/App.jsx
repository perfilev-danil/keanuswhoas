import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./providers/router/router";
import Header from "../widgets/Header/Header";
import NavMovies from "../widgets/NavMovies/NavMovies";
import Footer from "../widgets/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__main">
          <aside className="app__sidebar">
            <NavMovies />
          </aside>
          <section className="app__content">
            <AppRouter />
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
