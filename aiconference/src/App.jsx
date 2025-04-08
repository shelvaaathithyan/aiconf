import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comitte from './comitte'
import ThemeSection from './Theme/theme.jsx'
import TopicsSection from './Topics/Topics.jsx'
import CallForPapers from './CallForPaper/CallForPaper.jsx'
import Sponsor from './Sponsor.jsx'
import VenueContactSection from './VenueContactSection.jsx'
import Footer from './Footer.jsx'
import Reg from './reg-about/reg.jsx'
import About from './reg-about/about.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ color: '#FFFFFF' }}>
      <About/>
      <Comitte/>
      <CallForPapers/>
      <ThemeSection />
      <TopicsSection/>
      <Reg/>
      <VenueContactSection/>
      <Sponsor/>
      
      <Footer/>
    </div>
  );
}


export default App;
