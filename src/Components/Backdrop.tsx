

export const ActivateBackdrop = () => {
    const backdrop = document.getElementById("backdrop")
    if (backdrop)
    backdrop.style.display = "block"
    
} 
export const DeactiveBackdrop = () => {
    const backdrop = document.getElementById("backdrop")
    if (backdrop)
    backdrop.style.display ="none"
    
}
const Backdrop = () => {

   
    
    return (
        <div className="w-[100%] h-[100%] bg-black fixed opacity-65 hidden" id="backdrop" onClick={DeactiveBackdrop}>

        </div>
    )

}
export default Backdrop