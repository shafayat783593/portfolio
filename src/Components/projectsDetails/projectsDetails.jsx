import React from "react";
import { useParams, Link } from "react-router";
import incurancePolice from "../../assets/about/lifeincurance.png";
import tourmanagement from "../../assets/about/tour management.png";
import frellancer from "../../assets/about/frellancer.png";
const projects = [
    {
        id: "life-insurance",
        title: "Life Insurance Management Platform",
        main: "Policy Management:Users can view detailed descriptions of available life insurance policies, compare benefits, and select plans that suit their needs. Application Process: A user- friendly application form collects personal and health information securely, streamlining the approval process. Payment Integration:  Users can pay premiums online through secure payment gateways and track payment history. Claim Filing:  Customers can file claims, upload required documents, and monitor claim status via their dashboard. Admin Panel: Admins manage policies, approve applications, and process claims efficiently through a dedicated backend interface. Responsive Design: The platform is fully responsive, providing an optimal experience on desktops, tablets, and smartphones.",
        imgSrc: incurancePolice,
        demoLink: "https://insurance-management-8aa90.web.app/",
        sourceLink: "https://github.com/shafayat783593/Life-Insurance-Management-Platform",
        stack: "React, Firebase, Tailwind CSS nodejs express monodb",
        description: "This platform is a comprehensive web application designed to simplify the process of managing life insurance policies. It allows users to browse insurance plans, apply for policies, make payments, and track their coverage status all in one place. The system also includes administrative features for managing policies, customer data, and claims.",
        challenges: "Designing a secure, role-based system to handle sensitive user data and policy information Implementing complex workflows for application approvals and claim processing Ensuring seamless integration of payment gateways with transaction reliability",
        improvements: "Add AI-powered policy recommendation based on user profile and history Implement push notifications for payment reminders and policy updatesm Expand the platform to support other types of insurance like health and vehicle insurance Enhance data analytics for admin to track performance and user behavior",
    },
    {
        id: "tour-management",
        title: "Tour Management",
        main: " Tour Listings:Users can explore a wide range of tours categorized by destination, duration, and type(e.g., adventure, cultural, leisure).Each listing includes detailed information such as itinerary, price, and customer reviews Booking System:A seamless booking process allows users to reserve their spots on tours, select dates, and manage bookings through their account dashboard.Admin Dashboard: Tour operators can add new tours, update existing ones, and monitor bookings and user interactions from a secure admin panel.Responsive Design:The platform is optimized for both desktop and mobile devices, ensuring a smooth user experience across all screen sizes. ",
        imgSrc: tourmanagement,
        demoLink: "https://tour-management-c1ca2.web.app/",
        sourceLink: "https://github.com/shafayat783593/Tout-management-clint",
        stack: " React, Tailwind CSS",
        description: "Tour Management is a comprehensive web application designed to streamline the planning, booking, and management of travel tours. It offers users an intuitive interface to browse available tours, view detailed itineraries, and book trips with ease. For tour operators, the platform provides tools to add, update, and manage tour packages efficiently.",
        challenges: "Implementing dynamic data fetching with react  to optimize performance and SEO Managing complex booking workflows and ensuring data consistency across users and tours Designing a flexible admin interface that can easily accommodate tour updates and user management",
        improvements: "Add payment integration for booking confirmation Incorporate user- generated content like reviews and ratings Enable multi - language support for a global audience Enhance the admin dashboard with analytics and reporting tools",
    },
    {
        id: "freelance-task",
        title: "Freelance Task",
        main: "My Posted Tasks:Clients can post their freelance tasks and view all tasks they have created.This dashboard helps clients track the progress and status of each task.Browse Tasks: Freelancers can browse through a curated list of available tasks based on categories, skills, and deadlines.Filters and search functionalities make it easy to find relevant projects.Add Task:Clients can create new freelance tasks with detailed descriptions, requirements, budget, and deadlines.This feature supports rich input forms with validation to ensure clarity and completeness.",
        imgSrc: frellancer,
        demoLink: "https://freelance-task-8606e.web.app/",
        sourceLink: "https://github.com/yourusername/netflix-clone",
        stack: "React, Styled Components, Firebase",
        description: "Freelance Task is a web platform designed to connect freelancers and clients seamlessly. It enables freelancers to find and apply for relevant projects while allowing clients to post tasks and manage them efficiently. The platform emphasizes usability, real-time updates, and smooth interactions between users.",
        challenges: "Designing a flexible yet simple UI to accommodate different user roles and task workflowsManaging asynchronous data fetching and updates efficiently to prevent stale information",
        improvements: "Add chat or messaging functionality between freelancers and clients  Implement advanced recommendation algorithms to match freelancers with suitable tasksEnhance mobile responsiveness and build a dedicated mobile app",
    },
];

const ProjectDetail = () => {

    const { id } = useParams();
    console.log(id)
    const project = projects.find((p) => p.id === id);
    // console.log(project)
    if (!project) {
        return (
            <div className="text-white p-10">
                <h2 className="text-3xl font-bold mb-4">Project not found</h2>
                <Link to="/" className="text-blue-500 underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="text-white p-10 max-w-7xl mx-auto mt-20 bg-[#111423] rounded-xl shadow-xl">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full rounded-lg mb-6 object-cover max-h-96"
            />

            <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
            <p className="mb-4">{project.stack}</p>

            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="mb-4">{project.description}</p>

            <h2 className="text-2xl font-semibold mb-2">Live Project</h2>
            <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mb-4 block"
            >
                {project.demoLink}
            </a>

            <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
            <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mb-4 block"
            >
                {project.sourceLink}
            </a>

            <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
            <p className="mb-4">{project.challenges}</p>

            <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
            <p className="mb-6">{project.improvements}</p>

            <Link
                to="/"
                className="inline-block px-6 py-2 bg-[#3b82f6] rounded-full font-semibold hover:bg-[#2563eb] transition"
            >
                Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetail;
