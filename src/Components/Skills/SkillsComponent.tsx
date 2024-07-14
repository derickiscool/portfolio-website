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

        <div className="bg-[#fed766] w-full px-6 py-8 relative " id="skills">
            <div className="divider fill-[#ff9fb2]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[60px] [transform:rotateY(180deg)]">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="h-[60px]">

            </div>
            <h2 className="section-headings text-5xl">SOFTWARE</h2>
            <div className="mt-8 grid grid-cols-2 gap-8  lg:w-[80%] lg:mx-auto lg:px-[10%] lg:grid-cols-7 font-medium">
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={nextjs} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">NEXTJS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={react} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">REACT</p>
                </div>


                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={flutter} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">FLUTTER</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={swift} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">SWIFT</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={mongo} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">MONGO</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={cplus} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">C++</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={csharp} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">C#</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={python} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">PYTHON</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={gms} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksand text-lg">GMS2</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <img src={unity} alt="" className="w-[80%] lg:w-full" />
                    <p className="font-quicksandtext-lg">UNITY</p>
                </div>
            </div>
        </div>
    )
}
export default SkillsComponent