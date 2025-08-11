import React from "react";
import { useParams, Link } from "react-router";

const projects = [
    // same array as above (or move to a separate file and import)
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="text-white p-10">
                <h2 className="text-3xl font-bold mb-4">Project not found</h2>
                <Link to="/projects" className="text-blue-500 underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="text-white p-10 max-w-4xl mx-auto bg-[#111423] rounded-xl shadow-xl">
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
                to="/projects"
                className="inline-block px-6 py-2 bg-[#3b82f6] rounded-full font-semibold hover:bg-[#2563eb] transition"
            >
                Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetail;
