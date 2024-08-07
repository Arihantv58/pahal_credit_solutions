import './App.css';
import Navbar from './navbar';
import Header from './Header';
import Features from './Features';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import MFAQs from './MFAQs';

function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Features/>
      <Services/>
      <Aboutus/>
      <MFAQs/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
