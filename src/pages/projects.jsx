
import {projectsData} from '../data/projects-data.js';

import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
    return (
       <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {projectsData.map(project => (
                <ProjectCard 
                   id={project.id}
                   category={project.category}
                   name={project.name}
                   type={project.type}
                   desc={project.desc}
                   stack={project.stack}
                   repo={project.repo}
                   url={project.url}
                   img={project.img}
                />
             ))}
          </div>
       </div>
    )
 }

