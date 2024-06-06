import linkedIn from "../Images/About/linkedin-svgrepo-com.svg"
import github from "../Images/About/github-svgrepo-com.svg"
import { Link } from "react-router-dom"
const Footer = () => {

    return (

        <div className="font-staatliches flex flex-col justify-center items-center gap-4 pt-4" id="footer">
            <div className="flex flex-col justify-center items-center">
                <p>Get in touch with me:<br></br></p>
                <p>derickwithoner@gmail.com</p>
            </div>

            <div className="flex gap-4">

                <Link to={"https://www.linkedin.com/in/derick-lee-cheng-zhang/"} target="_blank">
                    <img src={linkedIn} alt="" className="w-8" />

                </Link>
                <Link to={"https://github.com/derickiscool"} target="_blank">
                    <img src={github} alt="" className="w-8" />

                </Link>

            </div>
            <p>© 2024 | Derick lee | all icons taken from svgrepo</p>
        </div>
    )

}

export default Footer