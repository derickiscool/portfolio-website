import linkedIn from "../../Images/About/linkedin-svgrepo-com.svg"
import github from "../../Images/About/github-svgrepo-com.svg"
import mail from "../../Images/About/mail.svg"
import profile from "../../Images/About/profile-pic.jpg"
import { Link } from "react-router-dom"

const AboutComponent = () => {

    return (
        <div className=" w-full bg-[#ff9fb2]  px-6 py-8 relative " id="about">
            <div className="divider fill-[#BADEFC]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[60px] ">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="h-[60px]">

            </div>
            <h3 className="section-headings text-5xl mb-8 lg:mb-14">ABOUT</h3>

            <div className="w-full flex flex-col gap-8 lg:flex-row lg:w-[60%] lg:mx-auto">
                <img src={profile} alt="" className="w-full lg:w-1/3" />
                <div className="text-md  text-center flex flex-col gap-4 font-quicksand grow lg:px-[10%] lg:text-left font-medium">
                    <p>Hello! I'm Derick, a creative and dedicated software engineer based in Singapore. I love blending creativity and logic to develop engaging, user-friendly digital experiences.</p>
                    <p>                    Currently pursuing my Bachelor's in Software Engineering at SIT, I'm passionate about promoting inclusivity and diversity in tech. My latest project, Dreamfellas, merges my technical skills with my love for the arts, creating a platform that celebrates dance, music, and style.
                    </p>
                    <p>
                        Outside of coding, I enjoy volunteering, dancing, and exploring new ways to make a difference. While I'm not available for freelance work at the moment, I’m always open to new connections and conversations. Feel free to reach out with your idea or share your favorite spots to eat at.

                    </p>
                    <div className="flex items-center justify-center gap-4 grow h-full mb-4">
                        <Link to={"https://www.linkedin.com/in/derick-lee-cheng-zhang/"} target="_blank">
                            <img src={linkedIn} alt="" className="w-8" />

                        </Link>
                        <Link to={"https://github.com/derickiscool"} target="_blank">
                            <img src={github} alt="" className="w-8" />

                        </Link>
                        <Link to={"mailto:derickwithoner@gmail.com"} target="_blank">
                            <img src={mail} alt="" className="w-8" />

                        </Link>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default AboutComponent