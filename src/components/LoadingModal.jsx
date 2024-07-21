
import loadingIcon from "../assets/icons/loadingIcon.svg"
const LoadingModal = ({ open }) => {
    if(!open) return null
    return (
        <div className="w-full h-full fixed z-30 bg-black/50">
            <div className="w-full flex justify-center ">
                <img src={loadingIcon} className="w-64 " />

            </div>
        </div>
    )
}


export default LoadingModal