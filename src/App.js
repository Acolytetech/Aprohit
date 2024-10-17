import React, { useEffect, useState } from 'react';
import './App.css';
import Preloader from './component/preloader/Preloader';
import Navbar from './component/navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Team from './component/teams/Teams';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/footer/Footer';
import Testimonialslider from './component/Testimonialslider/Testimonialslider';
import Portfolio from './component/portfolio/Prortfolio';
// import Demo from/ './component/Demo/Demo';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      {/* <Demo/> */}
      <Team />
      <Testimonialslider />
      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
