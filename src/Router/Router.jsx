import { createBrowserRouter } from "react-router";  // use react-router-dom here
import Home from "../Components/Home/Home";
import App from "../HomeLayout";
import ProjectCardPage from "../Components/Projects/ProjectCard";
import ProjectDetail from "../Components/projectsDetails/projectsDetails";
import HomeLayout from "../HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home,  // set default child page
            }, 
            {
                path: "projects",
                Component: ProjectCardPage,
            },
            {
                path: "projects/:id",  // no leading slash here
                Component: ProjectDetail,
            },
        ],
    },
]);
