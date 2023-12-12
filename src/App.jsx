import { BrowserRouter, Route, Router,Routes , useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import {About,Contact,Experience,Feedbacks,Hero,Navbar,StarsCanvas,Tech,Works,Resume} from './components';
const FixedButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/resume");
    onClick();
  };

  return (
    <div 
      onClick={handleClick} 
      className="fixed z-50 bottom-4 right-4 sm:bottom-2 sm:right-2 sm:w-12 sm:h-12 w-16 h-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-2xl flex items-center justify-center text-white text-xl sm:text-lg cursor-pointer hover:from-blue-700 hover:via-blue-800 hover:to-blue-900"
    >
      CV
    </div>
  );
};
const Popup = ({ onClose }) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-5 rounded-md">
        <p className="text-black">If you are a recruiter, please go through the CV:</p>
        <a href="/resume" onClick={onClose} className="text-black">Open CV</a>
      </div>
    </div>
  );
};
const HomePage = ({ togglePopup }) => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <FixedButton onClick={togglePopup} />
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <div className="relative z-0">
      <Tech/>
    </div>
    <Works/>
    <Feedbacks/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
  </div>
);

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <BrowserRouter>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
      <Routes>
        <Route path="/" element={<HomePage togglePopup={togglePopup} />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
