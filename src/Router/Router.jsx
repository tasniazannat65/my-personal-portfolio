import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Skill from "../Page/Skill/Skill";
import Contact from "../Page/Contact/Contact";
import Projects from "../Page/Projects/Projects";
import ProjectsDetails from "../Page/Projects/ProjectsDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/skill',
                Component: Skill
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/projects/:id',
                Component: ProjectsDetails
            },

        ]
    }
])