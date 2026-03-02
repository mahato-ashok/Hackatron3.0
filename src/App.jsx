import './App.css'
import React, { useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import CustomScrollbar from './components/CustomScrollbar/CustomScrollbar';
import FallingLeaves from './components/FallingLeaves';
import Preloader from './components/Preloader/Preloader'
import Reveal from './components/Reveal'

// Lazy loaded components
const LandingPage = lazy(() => import('./pages/LandingPage'));
const About = lazy(() => import('./components/AboutUs/About'));
const Wihts = lazy(() => import('./components/Wihts/Wihts'));
const Schedule = lazy(() => import('./components/Schedule/Schedule'));
const Hackatron2 = lazy(() => import('./components/Hackatron2/Hackatron2'));
const Venue = lazy(() => import('./components/Venue/Venue'));
const Prizes = lazy(() => import('./components/Prizes/Prizes'));
const Tracks = lazy(() => import('./components/Tracks/Tracks'));
const Sponsors = lazy(() => import('./components/Sponsors/Sponsors'));
const PastSponsors = lazy(() => import('./components/Sponsors/PastSponsors'));
const Faq = lazy(() => import('./components/Faq/Faq'));
const Discord = lazy(() => import('./components/Discord/Discord'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="fixed-bg" />
      <div className={`transition-all duration-1000 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomScrollbar />
        <FallingLeaves />
        <Navbar />
        <Suspense fallback={<div className="h-screen bg-[#080c0a]" />}>
          <LandingPage />
          <Reveal><About /></Reveal>
          <Reveal><Wihts /></Reveal>
          <Reveal><Schedule /></Reveal>
          <Reveal><Hackatron2 /></Reveal>
          <Reveal><Venue /></Reveal>
          <Reveal><Prizes /></Reveal>
          <Reveal><Tracks /></Reveal>
          <Reveal><Sponsors /></Reveal>
          <Reveal><PastSponsors /></Reveal>
          <Reveal><Faq /></Reveal>
          <Reveal><Discord /></Reveal>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default App
