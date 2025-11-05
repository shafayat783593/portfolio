import React from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Rocket, Users, Zap, Shield, Globe, TrendingUp } from "lucide-react";

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
        ]
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
        description: `VibePass is a modern, web-based movie and event ticketing platform designed to bring entertainment and convenience together under one digital roof. It enables users to seamlessly explore trending movies and live events, view showtimes, select preferred seats in real time, and purchase tickets securely online — all from a single, intuitive interface.

The platform not only enhances the user experience but also empowers cinemas, event organizers, and admins with a powerful dashboard to manage event schedules, seating arrangements, ticket availability, and sales analytics in real time.

Whether it’s catching the latest blockbuster, attending a music concert, or joining a local event, VibePass ensures a smooth, secure, and engaging ticketing experience for both audiences and organizers.`,

        goal: `To create a smart, user-friendly, and secure digital ticketing ecosystem that simplifies how people discover, book, and manage movie and event experiences online. Eliminate long queues, manual booking, and paper tickets with real-time seat selection, instant payment, and personalized event discovery.`,

        problemsSolved: [
            "No reliable platform to discover and book movies/events transparently.",
            "Long queues and manual booking processes.",
            "No real-time seat visibility → double booking conflicts.",
            "Disconnected payment systems causing delays.",
            "Admins lack unified analytics and management tools.",
            "Paper tickets → fraud, loss, and environmental waste.",
            "No centralized booking history or refund system."
        ],

        howItSolves: `VibePass provides a centralized, real-time, paperless solution with:
• Interactive seat maps with live locking (Socket.io)
• Secure payments via Stripe & SSLCommerz
• Instant QR e-tickets with email delivery
• Role-based admin dashboard for full control
• Real-time chat, notifications, and analytics
• Location-based event discovery with maps`,

        impact: [
            "Builds trust with transparent, real-time booking",
            "Reduces fraud with digital QR tickets",
            "Boosts organizer efficiency with analytics",
            "Promotes digital transformation in entertainment",
            "Delivers seamless mobile-first experience"
        ],

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
            description: `Users browse events, select seats, and complete secure payments. On confirmation, a digital QR e-ticket is generated and stored in the user profile. Booking status (Pending → Confirmed → Completed) updates live on both user and admin dashboards. Instant email and in-app notifications are sent on status change, payment success, or cancellation.`
        },

        seatMapping: `Real-time seat locking using Socket.io prevents double bookings. Seats are instantly reserved on selection and auto-released on timeout or failed payment. Optimized React seat map ensures smooth performance on all devices.`,

        challenges: [
            "Implementing real-time seat booking with Socket.io to prevent double bookings.",
            "Designing a scalable, responsive seat-selection UI with live updates.",
            "Integrating secure payment gateways (Stripe, SSLCommerz) with fallback handling.",
            "Building a role-based admin dashboard with real-time analytics.",
            "Ensuring cross-device compatibility and performance under high traffic."
        ],

        nonTechChallenges: [
            "Team coordination across frontend, backend, and design modules → Solved with Jira & weekly sprints.",
            "Maintaining UI consistency → Solved with Tailwind CSS design system.",
            "Meeting tight deadlines → Solved with modular development and parallel deployment."
        ],

        technologies: {
            frontend: "Next.js (v15.5.3), React (v19.1), Tailwind CSS (v4.1), Framer Motion, React Hook Form, TanStack Query, Swiper, Recharts",
            backend: "Node.js, Express.js (v5), MongoDB (v6), Mongoose (v8), Socket.io",
            auth: "NextAuth (v5), JWT, Google/GitHub OAuth, Nodemailer, bcrypt",
            payments: "Stripe, SSLCommerz",
            maps: "Leaflet, React-Leaflet",
            utils: "date-fns, uuid, qrcode.react, jspdf, node-cron, puppeteer"
        },

        usp: [
            "All-in-one: Discovery → Booking → Payment → Management",
            "Real-time everything: Seats, Chat, Notifications",
            "Secure & Paperless: QR + Digital Wallet",
            "Mobile-First + SSR for SEO & Speed",
            "Admin Analytics & Sales Insights",
            "Multi-gateway Payments + Local Support",
            "Loyalty & Referral System"
        ],

        improvements: [
            "Add AI-powered event recommendations",
            "Launch mobile app (React Native)",
            "Support multi-language & currency",
            "Integrate AR seat preview",
            "Add blockchain-based ticket verification",
            "Enable event live streaming"
        ]
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
        stack: "React, Tailwind CSS, Next.js",
        description: "Tour Management is a comprehensive web application designed to streamline the planning, booking, and management of travel tours. It offers users an intuitive interface to browse available tours, view detailed itineraries, and book trips with ease. For tour operators, the platform provides tools to add, update, and manage tour packages efficiently.",
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
        ]
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#171d32] flex items-center justify-center p-8">
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                    <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors duration-300"
                    >
                        <ArrowLeft size={20} />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#171d32] text-white">
            {/* Header */}
            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-8 transition-colors duration-300 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Projects
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Project Image */}
                    <div className="space-y-6">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 bg-white text-[#465697] rounded-xl font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                            >
                                <ExternalLink size={20} />
                                Live Demo
                            </a>
                            <a
                                href={project.sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 flex-1 justify-center"
                            >
                                <Github size={20} />
                                Client Code
                            </a>
                            {project.serverLink && (
                                <a
                                    href={project.serverLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 flex-1 justify-center"
                                >
                                    <Github size={20} />
                                    Server Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-200 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                                <Code className="text-blue-300" size={24} />
                                Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.stack.split(', ').map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/20 text-white rounded-full border border-white/30 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                                <Rocket className="text-green-300" size={24} />
                                Key Features
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {project.features?.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/20"
                                    >
                                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                                        <span className="text-gray-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Sections */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Project Overview */}
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                                <Users className="text-cyan-300" size={24} />
                                Project Overview
                            </h3>
                            <div className="space-y-4 text-gray-200 leading-relaxed">
                                {Array.isArray(project.main)
                                    ? project.main.map((paragraph, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="text-cyan-300 mt-1">•</span>
                                            {paragraph}
                                        </p>
                                    ))
                                    : project.main.split('.').filter(Boolean).map((paragraph, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="text-cyan-300 mt-1">•</span>
                                            {paragraph.trim()}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <h3 className="text-2xl font-semibold text-white mb-4">Challenges Faced</h3>
                            <div className="space-y-3 text-gray-200">
                                {Array.isArray(project.challenges)
                                    ? project.challenges.map((challenge, index) => (
                                        <p key={index} className="leading-relaxed flex items-start gap-2">
                                            <span className="text-red-400 mt-1">→</span>
                                            {challenge}
                                        </p>
                                    ))
                                    : project.challenges.split('.').filter(Boolean).map((challenge, index) => (
                                        <p key={index} className="leading-relaxed">
                                            {challenge.trim()}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        {/* VibePass Only: My Feature */}
                        {project.id === "vibe-pass" && project.myFeature && (
                            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-500/30">
                                <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                                    <Zap className="text-yellow-300" size={24} />
                                    My Contribution: {project.myFeature.title}
                                </h3>
                                <p className="text-gray-200 leading-relaxed">
                                    {project.myFeature.description}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Future Improvements */}
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                                <Calendar className="text-yellow-300" size={24} />
                                Future Plans & Improvements
                            </h3>
                            <div className="space-y-4">
                                {Array.isArray(project.improvements)
                                    ? project.improvements.map((improvement, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 bg-yellow-400/20 rounded-xl border border-yellow-400/30"
                                        >
                                            <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                                            <span className="text-gray-200 leading-relaxed">
                                                {improvement}
                                            </span>
                                        </div>
                                    ))
                                    : project.improvements.split('.').filter(Boolean).map((improvement, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 bg-yellow-400/20 rounded-xl border border-yellow-400/30"
                                        >
                                            <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                                            <span className="text-gray-200 leading-relaxed">
                                                {improvement.trim()}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* VibePass Only: USP */}
                        {project.id === "vibe-pass" && project.usp && (
                            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-2xl p-6 border border-green-500/30">
                                <h3 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                                    <TrendingUp className="text-green-300" size={24} />
                                    Why VibePass Stands Out (USP)
                                </h3>
                                <ul className="space-y-2 text-gray-200">
                                    {project.usp.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-400 mt-1">✔</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Project Links */}
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <h3 className="text-2xl font-semibold text-white mb-4">Project Links</h3>
                            <div className="space-y-4">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 group border border-white/20"
                                >
                                    <ExternalLink className="text-blue-300" size={20} />
                                    <div>
                                        <p className="text-white font-semibold">Live Demo</p>
                                        <p className="text-gray-300 text-sm truncate">{project.demoLink}</p>
                                    </div>
                                </a>
                                <a
                                    href={project.sourceLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 group border border-white/20"
                                >
                                    <Github className="text-gray-300" size={20} />
                                    <div>
                                        <p className="text-white font-semibold">Client Code</p>
                                        <p className="text-gray-300 text-sm truncate">{project.sourceLink}</p>
                                    </div>
                                </a>
                                {project.serverLink && (
                                    <a
                                        href={project.serverLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 group border border-white/20"
                                    >
                                        <Github className="text-gray-300" size={20} />
                                        <div>
                                            <p className="text-white font-semibold">Server Code</p>
                                            <p className="text-gray-300 text-sm truncate">{project.serverLink}</p>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;