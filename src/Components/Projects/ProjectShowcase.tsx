import ProjectCard from "./ProjectCard"

import { ProjectProps } from "./project"
const ProjectShowcase = ({props} : any) => {
    const {projects, setCurrentProject} = props;
    console.log(projects);
   
    return (
        <div className="bg-[#6EEB83] px-6  py-8" id="projects">

            <h2 className="section-headings text-5xl">PROJECTS</h2>
            <p className="font-mada text-center mt-4">Projects I am currently doing or have done in the past </p>
            <div className="mt-8 flex flex-col gap-12 lg:w-[80%] lg:mx-auto">
                {projects.map((project: ProjectProps, index :number) => {
                    return (
                        <ProjectCard {...project} setCurrentProject={setCurrentProject}/>
                    )
                })}
            </div>
        </div>

    )
}

export default ProjectShowcase