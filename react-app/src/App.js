import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home";
import Pictures from "./components/pics";
import Contact from "./components/contact";
import About from "./components/about";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          
          <Route index element={<Header />} />
          
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;