import { Outlet } from "react-router";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import EducationSection from "./Components/Educated/Educated";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ProjectCardPage from "./Components/Projects/ProjectCard";


function HomeLayout() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Outlet/>
      
   
      {/* <EducationSection/> */}
     
      <Footer />
    </div>
  );
}

export default HomeLayout;
