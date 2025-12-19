import React from "react";
import Project1 from "./Image/Project1.png"
import Project2 from "./Image/Project2.png"
import Pizza1 from "./Image/Pizza1.png"

const ViewProjects = () => {

 const projects = [
  {id: 1,title: "AI Powered Clothing Platform",description: "A platform that recommends outfits using AI, allowing users to try virtual styling.",screenshots:[Project1 , Project2] ,link: "https://your-clothing-app-link.com"},
  {id: 2,title: "Pizza Management System",description: "A system to manage pizza orders, inventory, and delivery tracking efficiently.",screenshots: [ Pizza1],link: "https://your-pizza-app-link.com"}
];
  return (
    <div className="p-6 md:p-12 min-h-screen bg-gradient-to-br from-white to-pink-200">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex w-150 h-100 gap-10 overflow-x-auto mb-4 mx-20 ">
              {project.screenshots.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-60 h-60 object-cover rounded-md"
                />
              ))}
            </div>
            {/* {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Project
              </a>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProjects;
