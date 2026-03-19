import { motion, useScroll, useSpring } from 'framer-motion';

import CustomCursor   from './components/ui/CustomCursor';
import Navbar         from './components/layout/Navbar';
import Footer         from './components/layout/Footer';
import Hero           from './components/sections/Hero';
import SocialHub      from './components/sections/SocialHub';
import MediaGallery   from './components/sections/MediaGallery';
import About          from './components/sections/About';
import Projects       from './components/sections/Projects';
import FutureSections from './components/sections/FutureSections';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen" style={{ background: '#0B1D3A' }}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #D4AF37, #b8941e)' }}
      />

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <div className="section-divider max-w-4xl mx-auto" />
        <SocialHub />
        <div className="section-divider max-w-4xl mx-auto" />
        <MediaGallery />
        <div className="section-divider max-w-4xl mx-auto" />
        <About />
        <div className="section-divider max-w-4xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-4xl mx-auto" />
        <FutureSections />
      </main>

      <Footer />
    </div>
  );
}
