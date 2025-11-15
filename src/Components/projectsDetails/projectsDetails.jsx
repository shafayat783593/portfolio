import React from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Rocket, Users, Zap, TrendingUp, Target, Cpu, Database } from "lucide-react";

import insurancePolicy from "../../assets/about/lifeincurance.png";
import vibePassImg from "../../assets/about/vibepass.png";
import tourManagement from "../../assets/about/tour management.png";

const projects = [
    {
        id: "life-insurance",
        title: "Life Insurance Management Platform",
        main: [
            "Policy Management: Users can view detailed descriptions of available life insurance policies, compare benefits, and select plans that suit their needs.",
            "Application Process: A user-friendly application form collects personal and health information securely, streamlining the approval process.",
            "Payment Integration: Users can pay premiums online through secure payment gateways and track payment history.",
            "Claim Filing: Customers can file claims, upload required documents, and monitor claim status via their dashboard.",
            "Admin Panel: Admins manage policies, approve applications, and process claims efficiently through a dedicated backend interface.",
            "Responsive Design: The platform is fully responsive, providing an optimal experience on desktops, tablets, and smartphones."
        ],
        imgSrc: insurancePolicy,
        demoLink: "https://insurance-management-8aa90.web.app/",
        sourceLink: "https://github.com/shafayat783593/Life-Insurance-Management-Platform",
        stack: "React, Firebase, Tailwind CSS, Node.js, Express, MongoDB",
        description: "This platform is a comprehensive web application designed to simplify the process of managing life insurance policies. It allows users to browse insurance plans, apply for policies, make payments, and track their coverage status all in one place. The system also includes administrative features for managing policies, customer data, and claims.",
        challenges: [
            "Designing a secure, role-based system to handle sensitive user data and policy information.",
            "Implementing complex workflows for application approvals and claim processing.",
            "Ensuring seamless integration of payment gateways with transaction reliability."
        ],
        improvements: [
            "Add AI-powered policy recommendation based on user profile and history.",
            "Implement push notifications for payment reminders and policy updates.",
            "Expand the platform to support other types of insurance like health and vehicle insurance.",
            "Enhance data analytics for admin to track performance and user behavior."
        ],
        features: [
            "Policy Management & Comparison",
            "Secure Application Process",
            "Payment Integration",
            "Claim Filing System",
            "Admin Dashboard",
            "Role-based Access Control"
        ],
        technologies: {
            frontend: "React, Tailwind CSS, Context API",
            backend: "Node.js, Express.js",
            database: "Firebase, MongoDB",
            authentication: "Firebase Auth",
            deployment: "Firebase Hosting"
        },
        role: "Full Stack Developer",
        duration: "3 months",
        status: "Completed"
    },
    {
        id: "vibe-pass",
        title: "Vibe Pass – Online Movie & Event Ticket Booking Platform",
        main: "Real-time seat selection, secure payments, QR e-tickets, live chat support, interactive maps, and a powerful admin dashboard. Users can discover movies & events, book seats instantly, get digital passes, and manage bookings from any device.",
        imgSrc: vibePassImg,
        demoLink: "https://vibe-pass.vercel.app/",
        sourceLink: "https://github.com/niloyahmadramjan/Vibe-Pass",
        serverLink: "https://github.com/niloyahmadramjan/vibe-pass-server",
        stack: "Next.js, React, Node.js, Express, MongoDB, Socket.io, Tailwind CSS, Stripe, SSLCommerz, Leaflet, NextAuth, JWT",
        description: `VibePass is a modern, web-based movie and event ticketing platform designed to bring entertainment and convenience together under one digital roof. It enables users to seamlessly explore trending movies and live events, view showtimes, select preferred seats in real time, and purchase tickets securely online — all from a single, intuitive interface.`,
        features: [
            "Interactive Real-Time Seat Selection",
            "Live Chat Support with Organizers",
            "Smart Search & Nearby Events (Map)",
            "Dynamic Pricing & Promo Codes",
            "Multiple Payment Gateways (Stripe, SSLCommerz)",
            "QR E-Ticket with Email & PDF Download",
            "Secure Login (Google, GitHub, OTP)",
            "Admin Dashboard (Movies, Events, Users, Analytics)",
            "Automated Email & Push Notifications",
            "Loyalty Points & Referral System"
        ],
        myFeature: {
            title: "Real-Time Ticket Booking & Notification System",
            description: `Users browse events, select seats, and complete secure payments. On confirmation, a digital QR e-ticket is generated and stored in the user profile. Booking status updates live on both user and admin dashboards with instant email and in-app notifications.`
        },
        challenges: [
            "Implementing real-time seat booking with Socket.io to prevent double bookings.",
            "Designing a scalable, responsive seat-selection UI with live updates.",
            "Integrating secure payment gateways (Stripe, SSLCommerz) with fallback handling.",
            "Building a role-based admin dashboard with real-time analytics."
        ],
        technologies: {
            frontend: "Next.js (v15.5.3), React (v19.1), Tailwind CSS (v4.1), Framer Motion",
            backend: "Node.js, Express.js (v5), MongoDB (v6), Mongoose (v8), Socket.io",
            auth: "NextAuth (v5), JWT, Google/GitHub OAuth, Nodemailer",
            payments: "Stripe, SSLCommerz",
            maps: "Leaflet, React-Leaflet",
            utils: "date-fns, uuid, qrcode.react, jspdf"
        },
        usp: [
            "All-in-one: Discovery → Booking → Payment → Management",
            "Real-time everything: Seats, Chat, Notifications",
            "Secure & Paperless: QR + Digital Wallet",
            "Mobile-First + SSR for SEO & Speed",
            "Admin Analytics & Sales Insights"
        ],
        improvements: [
            "Add AI-powered event recommendations",
            "Launch mobile app (React Native)",
            "Support multi-language & currency",
            "Integrate AR seat preview"
        ],
        role: "Full Stack Developer",
        duration: "4 months",
        status: "Completed"
    },
    {
        id: "tour-management",
        title: "Tour Management System",
        main: [
            "Tour Listings: Users can explore a wide range of tours categorized by destination, duration, and type (adventure, cultural, leisure).",
            "Each listing includes detailed information such as itinerary, price, and customer reviews.",
            "Booking System: A seamless booking process allows users to reserve their spots on tours, select dates, and manage bookings through their account dashboard.",
            "Admin Dashboard: Tour operators can add new tours, update existing ones, and monitor bookings and user interactions from a secure admin panel.",
            "Responsive Design: The platform is optimized for both desktop and mobile devices, ensuring a smooth user experience across all screen sizes.",
            "Payment integration for booking confirmation."
        ],
        imgSrc: tourManagement,
        demoLink: "https://tour-management-c1ca2.web.app/",
        sourceLink: "https://github.com/shafayat783593/Tout-management-clint",
        stack: "React, Tailwind , Mongodb ,Express ",
        description: "Tour Management is a comprehensive web application designed to streamline the planning, booking, and management of travel tours. It offers users an intuitive interface to browse available tours, view detailed itineraries, and book trips with ease.",
        challenges: [
            "Implementing dynamic data fetching with React to optimize performance and SEO.",
            "Managing complex booking workflows and ensuring data consistency across users and tours.",
            "Designing a flexible admin interface that can easily accommodate tour updates and user management."
        ],
        improvements: [
            "Incorporate user-generated content like reviews and ratings.",
            "Enable multi-language support for a global audience.",
            "Enhance the admin dashboard with analytics and reporting tools."
        ],
        features: [
            "Tour Listings & Categories",
            "Seamless Booking System",
            "Admin Dashboard",
            "Customer Reviews",
            "Mobile Responsive",
            "Search & Filtering"
        ],
        technologies: {
            frontend: "React, Tailwind CSS, Express, Mongodb",
            backend: "Firebase",
            database: "Firebase Firestore",
            authentication: "Firebase Auth",
            deployment: "Firebase Hosting"
        },
        role: "Frontend Developer",
        duration: "3 days",
        status: "Completed"
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen  flex items-center justify-center p-8">
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                    <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-semibold transition-colors duration-300"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen  text-white mt-20">
            {/* Header */}
            <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/60 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/10 mb-6"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-medium">Back to Projects</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    {/* Project Image */}
                    <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700/50">
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full h-60 object-cover"
                            />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-3 py-8">
                            <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                <Target className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                                <p className="text-xs text-gray-300">Role</p>
                                <p className="text-sm font-semibold text-white">{project.role}</p>
                            </div>
                            <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                <Calendar className="w-5 h-5 text-green-400 mx-auto mb-1" />
                                <p className="text-xs text-gray-300">Duration</p>
                                <p className="text-sm font-semibold text-white">{project.duration}</p>
                            </div>
                            <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                <Cpu className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                                <p className="text-xs text-gray-300">Status</p>
                                <p className="text-sm font-semibold text-white">{project.status}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex py-8 gap-2">
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 justify-center text-sm"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                            <a
                                href={project.sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300 justify-center text-sm"
                            >
                                <Github size={18} />
                                Client Code
                            </a>
                            {project.serverLink && (
                                <a
                                    href={project.serverLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 justify-center text-sm"
                                >
                                    <Database size={18} />
                                    Server Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                <Code className="text-cyan-400" size={18} />
                                Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-1">
                                {project.stack.split(', ').map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded border border-cyan-700/30 text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                <Rocket className="text-green-400" size={18} />
                                Key Features
                            </h3>
                            <div className="grid gap-1">
                                {project.features?.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 p-1 text-gray-300"
                                    >
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                                        <span className="text-xs">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Sections */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
                <div className="grid lg:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {/* Project Overview */}
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                <Users className="text-blue-400" size={18} />
                                Project Overview
                            </h3>
                            <div className="space-y-2 text-gray-300 text-xs leading-relaxed">
                                {Array.isArray(project.main)
                                    ? project.main.map((paragraph, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1 text-xs">▪</span>
                                            {paragraph}
                                        </p>
                                    ))
                                    : project.main.split('.').filter(Boolean).map((paragraph, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1 text-xs">▪</span>
                                            {paragraph.trim()}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                            <h3 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h3>
                            <div className="space-y-2 text-gray-300 text-xs">
                                {project.challenges.map((challenge, index) => (
                                    <div key={index} className="flex items-start gap-2 p-2 bg-red-400/10 rounded border border-red-400/20">
                                        <span className="text-red-400 mt-0.5 text-xs">→</span>
                                        <span>{challenge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {/* Future Improvements */}
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                <Calendar className="text-yellow-400" size={18} />
                                Future Enhancements
                            </h3>
                            <div className="space-y-1">
                                {project.improvements.map((improvement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2 p-1 text-gray-300 text-xs"
                                    >
                                        <span className="text-yellow-400 mt-0.5 text-xs">★</span>
                                        <span>{improvement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technology Breakdown */}
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                <Cpu className="text-purple-400" size={18} />
                                Technology Details
                            </h3>
                            <div className="space-y-2 text-xs">
                                {Object.entries(project.technologies || {}).map(([category, tech]) => (
                                    <div key={category} className="flex items-start gap-2">
                                        <span className="text-purple-300 font-medium capitalize min-w-16 text-xs">
                                            {category}:
                                        </span>
                                        <span className="text-gray-300 text-xs">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* VibePass Special Sections */}
                        {project.id === "vibe-pass" && (
                            <>
                                {/* USP */}
                                <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-lg p-4 border border-green-500/30">
                                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                        <TrendingUp className="text-green-400" size={18} />
                                        Unique Selling Points
                                    </h3>
                                    <div className="space-y-1 text-xs">
                                        {project.usp.map((point, i) => (
                                            <div key={i} className="flex items-start gap-2 text-gray-300">
                                                <span className="text-green-400 mt-0.5 text-xs">✔</span>
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* My Contribution */}
                                {project.myFeature && (
                                    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/30">
                                        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                                            <Zap className="text-yellow-400" size={18} />
                                            My Key Contribution
                                        </h3>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-yellow-300 text-xs">
                                                {project.myFeature.title}
                                            </h4>
                                            <p className="text-gray-300 text-xs leading-relaxed">
                                                {project.myFeature.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;