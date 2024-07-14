import ProjectCard from "./ProjectCard"

import { ProjectProps } from "./project"
const ProjectShowcase = ({ props }: any) => {
    const { projects, setCurrentProject } = props;
    console.log(projects);

    return (
        <div className="bg-[#6EEB83] px-6  py-8 relative" id="projects">
            <div className="divider fill-[#fed766]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[60px] ">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="h-[60px]">

</div>
            <h2 className="section-headings text-5xl">PROJECTS</h2>
            <div className="mt-8 flex flex-col gap-12 lg:w-[80%] lg:mx-auto">
                {projects.map((project: ProjectProps, index: number) => {
                    return (
                        <ProjectCard {...project} setCurrentProject={setCurrentProject} />
                    )
                })}
            </div>
        </div>

    )
}

export default ProjectShowcase