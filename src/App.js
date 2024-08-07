import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import FAQs from "./Pages/FAQs";
import Error from './Pages/Error';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/FAQs" element={<FAQs/>}></Route>
        <Route path="/error" element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default App;
