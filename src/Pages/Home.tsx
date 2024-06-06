import { useEffect, useState } from "react"
import AboutComponent from "../Components/About/AboutComponent"
import HomeComponent from "../Components/Home/HomeComponent"
import ProjectDetailsCard from "../Components/Projects/ProjectDetailsCard"
import ProjectShowcase from "../Components/Projects/ProjectShowcase"
import SkillsComponent from "../Components/Skills/SkillsComponent"
import { getProjects } from "./client"
import { ProjectProps } from "../Components/Projects/project"





const Home = () => {
    const [currentProject, setCurrentProject] = useState<any>();
    const [projects, setProjects] = useState<Array<ProjectProps>>([]);
    useEffect(() => {
        async function fetchProjects() {
            const projects = await getProjects()
            setProjects(projects)
        }
        fetchProjects()



    }, []);

    return (
        <>
            
            <ProjectDetailsCard caseStudy={currentProject} />
            <HomeComponent />
            <AboutComponent />
            <SkillsComponent />
            <ProjectShowcase props = {{projects, setCurrentProject}}/>

        </>





    )
}

export default Home