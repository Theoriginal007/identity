import React from 'react';

// Import images
import project1 from "../assets/projects_1.jpg";
import project2 from "../assets/projects_2.jpg";
import project3 from "../assets/projects_3.jpg";
import project4 from "../assets/projects_4.jpg";
import project5 from "../assets/projects_5.jpg";
import project6 from "../assets/projects_6.jpg";
import project7 from "../assets/projects_7.jpg";
import project8 from "../assets/projects_8.jpg";
import project9 from "../assets/projects_9.jpg";
import project10 from "../assets/projects_10.jpg";
import project11 from "../assets/projects_11.jpg";
import project12 from "../assets/projects_12.jpg";
import project13 from "../assets/projects_13.jpg";
import project14 from "../assets/projects_14.jpg";
import project15 from "../assets/projects_15.jpg";
import project18 from "../assets/projects_18.jpg";

const Project = () => {
  const projects = [
    { image: project1 },
    { image: project2 },
    { image: project3 },
    { image: project4 },
    { image: project5 },
    { image: project6 },
    { image: project7 },
    { image: project8 },
    { image: project9 },
    { image: project10 },
    { image: project11 },
    { image: project12 },
    { image: project13 },
    { image: project14 },
    { image: project15 },
    { image: project18 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Project Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={project.image} 
              alt={`Project ${index + 1}`} 
              className="w-full h-64 object-cover rounded-lg mb-4" 
              loading="lazy"  
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
