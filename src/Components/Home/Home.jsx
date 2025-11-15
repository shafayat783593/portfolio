import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Experience from '../Experience/Experience';
import ProjectCardPage from '../Projects/ProjectCard';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0f172a] overflow-hidden">
      {/* Global Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Page Content */}
      <Banner />
      <About />
      <Experience />
      <ProjectCardPage />
      <Contact />
    </div>
  );
}

export default Home;
