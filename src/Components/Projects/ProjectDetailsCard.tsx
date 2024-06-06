import { ActivateBackdrop, DeactiveBackdrop } from "../Backdrop"
import cross from "../../Images/Header/cross-svgrepo-com.svg"
import signature from "../../Images/Header/signature.png"
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../Pages/client"
export const ShowProjectDetailsCard = () => {
    ActivateBackdrop()

    const projectDetails = document.getElementById("project-details")
    if (projectDetails) {
        projectDetails.style.display = "block"

    }
    document.body.style.overflow = "hidden"

}

export const HideProjectDetailsCard = () => {
    DeactiveBackdrop()
    const projectDetails = document.getElementById("project-details")
    if (projectDetails) {
        projectDetails.style.display = "none"

    }
    document.body.style.overflow = "unset"

}

export type ProjectDetailsProps = {
    caseStudy: any,

}

const ProjectDetailsCard = (props: ProjectDetailsProps) => {

    return (
        <div className="bg-[#FFFFE4] h-screen w-screen  hidden fixed px-4 pt-4 z-[20] lg:overflow-y-scroll  " id="project-details">
            <div className="flex justify-between items-center">
                <img src={signature} alt="home button" className="w-16 invisible" />
                <img src={cross} alt="hamburger menu" className="w-16 fixed left-[80%]" onClick={HideProjectDetailsCard} />
            </div>
            <div  className="prose prose-lg mb-24 lg:mx-auto "> 
                <PortableText
                    value={props.caseStudy}
                    components={{
                        types : {
                            image: ({value}) => {
                                console.log(value);
                                return (<img src={urlFor(value).url()} alt="" className="mx-auto"/>)
                            },
                        }
                    }}

                />
            </div>


        </div>
    )
}
export default ProjectDetailsCard