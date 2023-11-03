import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Files/Navbar";
import Home from "./Files/Home";
import About from "./Files/About";
import WhatiDo from "./Files/WhatiDo";
import LetsTalk from "./Files/LetsTalk";
import Error from "./Files/Error";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Whatido" element={<WhatiDo/>}></Route>
          <Route path="/Letstalk" element={<LetsTalk/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
