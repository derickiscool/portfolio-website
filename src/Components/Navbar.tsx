import { Link } from "react-router-dom"
import hamburger from "../Images/Header/hamburger.svg"
import signature from "../Images/Header/signature.png"
import { OpenDrawer } from "./Drawer"
const Navbar = () => {


    return (
        <nav className="px-4 pt-4 mb-8 fixed w-full">
            <div className="flex justify-between items-center">
                <Link to={"/"}>
                    <img src={signature} alt="home button" className="w-16" />

                </Link>
                <img src={hamburger} alt="hamburger menu" className="w-16 lg:hidden" onClick={OpenDrawer} />
                <div className="hidden lg:flex grow justify-around text-3xl font-sens">
                    <a href="#about" ><p>ABOUT</p></a>
                    <a href="#skills" ><p>SKILLS</p></a>
                    <a href="#projects"> <p>PROJECTS</p></a>
                    <a href="#footer"><p>CONTACT ME</p></a>
                </div>

            </div>

        </nav>
    )
}
export default Navbar