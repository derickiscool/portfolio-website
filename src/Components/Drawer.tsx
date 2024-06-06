import { ActivateBackdrop, DeactiveBackdrop } from "./Backdrop"
import cross from "../Images/Header/cross-svgrepo-com.svg"
import signature from "../Images/Header/signature.png"
export const OpenDrawer = () => {
    ActivateBackdrop()
    const drawer: HTMLElement | null = document.getElementById("drawer")
    if (drawer) {
        drawer.style.display = "block"

    }
    document.body.style.touchAction = "none"



}
export const CloseDrawer = () => {
    DeactiveBackdrop()
    const drawer: HTMLElement | null = document.getElementById("drawer")
    if (drawer) {
        drawer.style.display = "none"

    }
    document.body.style.touchAction = "unset"

}

const Drawer = () => {
    return (<div className="bg-yellow-100 h-screen w-screen  hidden fixed px-4 pt-4 z-[10]" id="drawer">
        <div className="flex justify-between items-center">
            <img src={signature} alt="home button" className="w-16 invisible" />
            <img src={cross} alt="hamburger menu" className="w-16" onClick={CloseDrawer} />
        </div>
        <div className="font-sen justify-center items-center flex flex-col gap-8 text-xl mt-8">
            <a href="#about" onClick={CloseDrawer}><p>ABOUT</p></a>
            <a href="#skills" onClick={CloseDrawer}><p>SKILLS</p></a>
            <a href="#projects" onClick={CloseDrawer}><p>PROJECTS</p></a>
            <a href="#footer" onClick={CloseDrawer}><p>CONTACT ME</p></a>

        </div>

    </div>)
}
export default Drawer