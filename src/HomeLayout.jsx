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





// import { Outlet } from "react-router";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

// function HomeLayout() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Global Background */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

//         {/* Animated Grid */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//         </div>
//       </div>

//       {/* Page Content */}
//       <Navbar />
//       <Outlet /> {/* All pages (Home, About, etc.) will render here */}
//       <Footer />
//     </div>
//   );
// }

// export default HomeLayout;









