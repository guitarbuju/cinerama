import { Routes, Route} from "react-router-dom";
import "./App.css";
import MainLayout from "./Mainlayout";
import Pagina from "./pages/Pagina";
import Pagina2 from "./pages/Pagina2";
import { MovieProvider } from "../Context";
import Pagina3 from "./pages/Pagina3";
import Welcome from "./pages/Welcome";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutNew from "./pages/AboutNew";

function App() {



  return (
    <div>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Welcome />} />
            <Route path="pag2" element={<Pagina2 />} />
            <Route path="pag3" element={<Pagina3 />} />
            <Route path="pag" element={<Pagina />} />
            <Route path="about" element={<AboutNew/>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
