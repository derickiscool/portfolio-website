
import { urlFor } from "../../Pages/client"
import { Link } from "react-router-dom"
import { ShowProjectDetailsCard } from "./ProjectDetailsCard"

export type ProjectCardProps = {
    title: string,
    featureImage: any,
    description: string,
    tag?: Array<any>,
    siteLink?: string,
    caseStudy?: any,
    setCurrentProject?: (project: any) => void

}

type ProjectTagProps = {
    tags?: Array<any>
}
type ButtonsProps = {
    siteLink?: string,
    caseStudy?: any,
    setCurrentProject?: (project: any) => void
}
const ProjectTags = (props: ProjectTagProps) => {
    const { tags } = props
    return (
        <div className="flex gap-2 items-center justify-center">
            {tags && tags.map((tag: any, index) => {
                return (
                    <img src={urlFor(tag).url()} alt="" className="w-12" key={index} />

                )
            })}
        </div>

    )
}
const ProjectButtons = (props: ButtonsProps) => {
    const { siteLink, caseStudy, setCurrentProject } = props
    const caseStudyClick = (caseStudy: any) => {
        setCurrentProject!(caseStudy)
        ShowProjectDetailsCard()
    }
    return (
        <div className="flex gap-4">
            {
                siteLink && <Link to={siteLink} target="_blank"><div className="bg-[#8ca1e3] px-4 py-2 rounded-full lg:text-2xl "><p className="font-staatliches">VIEW SITE</p></div></Link>
            }
            {
                caseStudy && <div className="bg-[#8ca1e3] px-4 py-2 rounded-full lg:text-2xl" onClick={() => { caseStudyClick(caseStudy) }}><p className="font-staatliches">CASE STUDY</p></div>
            }
            {
                !siteLink && !caseStudy && <Link to={"mailto:derickwithoner@gmail.com"} target="_blank"><div className="bg-[#8ca1e3] px-4 py-2 rounded-full lg:text-2xl"><p className="font-staatliches">Contact Me</p></div></Link>
            }
        </div>
    )
}



const ProjectCard = (props: ProjectCardProps) => {
    const { featureImage, title, description, tag, caseStudy, setCurrentProject, siteLink } = props;
    return (
        <div className="flex flex-col justify-center items-center gap-4 lg:grid lg:grid-cols-2 lg:gap-[5%]">
            <div className="bg-[#8ca1e3] w-full  rounded-lg flex justify-center items-center">
                <img src={urlFor(featureImage).url()} alt="" className=" rounded-lg p-8" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 lg:items-start lg:pr-[30%] lg:gap-8">
                <h3 className="font-staatliches text-3xl">{title}</h3>
                <p className="font-robotoMono text-center lg:text-left">{description}</p>
                <ProjectTags tags={tag} />
                <ProjectButtons caseStudy={caseStudy} siteLink={siteLink} setCurrentProject={setCurrentProject} />
            </div>


        </div>
    )
}

export default ProjectCard