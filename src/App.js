import './App.css';
import React from "react";

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom'
// import NavBar from './components/NavBar';
import Team from "./pages/Home/Team";
import Contact from "./pages/Home/Contact";
// import Footer from "./../src/components/Footer";
import EventsTimeLine from "./pages/Home/EventsTimeLine";
import Testimonials from './pages/Home/Testimonials';
import PastEvents from './pages/Home/PastEvents';
// import ParticleBackground from './components/particleBackground';
// import TeamArchives from './pages/Home/Archives';
import GalleryPage from './pages/Home/Gallery';
// import { useEffect, useState } from 'react';
// import { ClipLoader, ClimbingBoxLoader, CircleLoader } from "react-spinners";
// import { css } from "@emotion/react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import UserRegistration from './pages/User Panel/User_Registration';
import FeedbackEntry from './pages/User Panel/Feedback_Entry';
import ViewTestimonialStatus from './pages/User Panel/User_Dashboard';
import UserLogin from './pages/User Panel/User_Login';

function App() {  
  // const [loading, setLoading] = useState(false);
  Aos.init();

  // const handlePlay = () => {
  //   setTimeout(1000);
  // }

//   let color = "#ffffff";

//   const override = css`
//   display: block;
//   margin: 50px auto;
//   border-color: white;
//   position: absolute;
//   align-items: center;
//   top: 50px;
//   left: 30%;
//   right: 30%;
// `;

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  
  return (
    <div className="App">
      
      {
        // loading ?
        //   // <video className='loader-video' src={loadervideo} autoPlay/>
        //   // <video autoPlay muted loop id="preloader" src={loadervideo} type="video/mp4" />
        //   // <video onCanPlay={handlePlay} autoPlay className='loader'>
        //   //   <source src={loadervideo} type="video/mp4"/>
        //   // </video>
        //   <>
        //   {/* <ClipLoader color={color} loading={loading} css={override} size={150} /> */}
        //   {/* <CircleLoader color={color} loading={loading} css={override} size={150} /> */}
        //   </>
        //   :
          <span>
            {/* <ParticleBackground /> */}
            {/* <NavBar /> */}
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/team" exact element={<Team />} />
              <Route path="/gallery" exact element={<GalleryPage />} />
              {/* <Route path="/team/archives" exact element={<TeamArchives />} /> */}
              <Route path="/events" exact element={<><EventsTimeLine /> <PastEvents /></>} />
              <Route path="/testimonials" exact element={<Testimonials />} />
              <Route path="/contact-us" exact element={<Contact />} />
              
              <Route path="/register" exact element={<UserRegistration />} />
              <Route path="/login" exact element={<UserLogin />} />
              <Route path="/add-testimonial" exact element={<FeedbackEntry />} />
              <Route path="/view-testimonial-status" exact element={<ViewTestimonialStatus />} />
            </Routes>
            {/* <Footer /> */}
          </span>
      }

    </div>
  );
}

export default App;
