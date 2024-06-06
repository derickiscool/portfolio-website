import css from "../../Images/Skills/css-16-svgrepo-com.svg"
import html from "../../Images/Skills/html-svgrepo-com.svg"
import nextjs from "../../Images/Skills/nextjs-svgrepo-com.svg"
import react from "../../Images/Skills/react-16-svgrepo-com.svg"
import sanity from "../../Images/Skills/sanity-svgrepo-com.svg"
import penpot from "../../Images/Skills/penpot-svgrepo-com.svg"
import flutter from "../../Images/Skills/flutter-svgrepo-com.svg"
import swift from "../../Images/Skills/swift-16-svgrepo-com.svg"
import mongo from "../../Images/Skills/mongodb-svgrepo-com.svg"
import cplus from "../../Images/Skills/c-plusplus-16-svgrepo-com.svg"
import csharp from "../../Images/Skills/c-sharp-16-svgrepo-com.svg"
import python from "../../Images/Skills/python-16-svgrepo-com.svg"
import gms from "../../Images/Skills/light-gamemaker2-svgrepo-com.svg"
import unity from "../../Images/Skills/unity-svgrepo-com.svg"
const SkillsComponent = () => {

    return (

        <div className="bg-[#fed766] w-full px-6 py-8" id="skills">
            <h2 className="section-headings text-5xl">SKILLS</h2>
            <p className="font-mada text-center mt-4">Some of the languages and frameworks I use to create projects</p>
            <div className="mt-8 grid grid-cols-2 gap-8 lg:w-[80%] lg:mx-auto lg:px-[10%] lg:grid-cols-7">
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={css} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-robotoMono text-lg">CSS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={html} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">HTML</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={nextjs} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">NEXTJS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={react} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">REACT</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={sanity} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">SANITY</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={penpot} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">PENPOT</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={flutter} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">FLUTTER</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={swift} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">SWIFT</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={mongo} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">MONGO</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={cplus} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">C++</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={csharp} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">C#</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={python} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">PYTHON</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={gms} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">GMS2</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src={unity} alt="" className="w-[80%]lg:w-full" />
                    <p className="font-robotoMono text-lg">UNITY</p>
                </div>
            </div>
        </div>
    )
}
export default SkillsComponent