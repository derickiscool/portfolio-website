import letterD from "../../Images/Home/letter-D.png"
import letterE from "../../Images/Home/letter-E.png"
import letterR from "../../Images/Home/letter-R.png"
import letterI from "../../Images/Home/letter-I.png"
import letterC from "../../Images/Home/letter-C.png"
import letterK from "../../Images/Home/letter-K.png"
import smiley from "../../Images/Home/smiley.png"
import arrowDown from "../../Images/Home/arrow-down-svgrepo-com.svg"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";

const HomeComponent = () => {
    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger);



    useGSAP(
        () => {
            gsap.from("#hi-text", { x: -200, duration: 0.8 })
            const waveTl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 0.8 })
            waveTl.to('#letter-D', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#letter-D", { y: 0, duration: 0.75 }) } });
            waveTl.to('#letter-E', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#letter-E", { y: 0, duration: 0.75 }) } }, "<25%");
            waveTl.to('#letter-R', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#letter-R", { y: 0, duration: 0.75 }) } }, "<25%");
            waveTl.to('#letter-I', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#letter-I", { y: 0, duration: 0.75 }) } }, "<25%");
            waveTl.to('#letter-C', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#letter-C", { y: 0, duration: 0.75 }) } }, "<25%");
            waveTl.to('#letter-K', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#letter-K", { y: 0, duration: 0.75 }) } }, "<25%");
            waveTl.to('#smiley', { y: -20, duration: 0.75, onComplete: () => { gsap.to("#smiley", { y: 0, duration: 0.75 }) } }, "<25%");
            gsap.from("#eng-text", { x: -100, opacity: 0, duration: 1 })
            gsap.from("#full-text", { x: -100, opacity: 0, duration: 1 })
            gsap.from("#dev-text", { x: -100, opacity: 0, duration: 1 })
            gsap.fromTo("#arrow-down", { y: 0, translateX: "-50%", left: "50%" }, { y: -10, translateX: "-50%", left: "50%", duration: 1, repeat: -1, yoyo: true })

        },
    )

    return (
        <div className="h-[100svh] w-full bg-[#badefc] flex items-center px-6 ">
               
            <div className="text-xl min-[425px]:text-2xl ">
                <div className="flex items-center ">
                    <p className="text-3xl min-[425px]:text-4xl mr-4 font-quicksand" id="hi-text">Hi I'm</p>

                    <img src={letterD} alt="" className="w-5 min-[425px]:w-8" id="letter-D" />
                    <img src={letterE} alt="" className="w-5 min-[425px]:w-8" id="letter-E" />
                    <img src={letterR} alt="" className="w-5 min-[425px]:w-8" id="letter-R" />
                    <img src={letterI} alt="" className="w-5 min-[425px]:w-8" id="letter-I" />
                    <img src={letterC} alt="" className="w-5 min-[425px]:w-8" id="letter-C" />
                    <img src={letterK} alt="" className="w-5 min-[425px]:w-8" id="letter-K" />
                    <img src={smiley} alt="" className="w-5 min-[425px]:w-8" id="smiley" />




                </div>
                <div className="font-quicksand">
                    <p id="eng-text">Software Engineer</p>
                    <p id="full-text">Full-Stack Dev</p>
                    <p id="dev-text">Game Dev</p>
                </div>



            </div>
            <img src={arrowDown} alt="" className="absolute w-16 top-[80%] " id="arrow-down" />
          

        </div>

    )
}

export default HomeComponent