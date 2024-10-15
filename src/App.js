// import logo from './logo.svg';
import './App.css';
// import Preloader from './component/preloader/Preloader';
import Navbar from './component/navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Team from './component/teams/Teams';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/footer/Footer';
import Testimonialslider from './component/Testimonialslider/Testimonialslider';
// import Portfolio from './component/portfolio/Prortfolio';
// import TeamMembers from './component/teams/TeamMembers';

function App() {
  return (
    <div className="App">
  {/* <Preloader/> */}
  <Navbar/>
  <Home/>
  <About/>
  <Services/>
  {/* <Portfolio/> */}
  {/* <TeamMembers/> */}
  <Team/>
  <Testimonialslider/>
  <ContactUs/>
  <Footer/>
    </div>
  );
}

export default App;
