import './index.scss'
import profPic from "../../../assets/images/prof-pic.jpg"
import { useRef } from 'react'


const Photo = () => {
    const profPicRef = useRef();


    return (
        <>
        <div className='image-container'>

        </div>
        {/* <img className="image-container" src={profPic} /> */}
        </>
    )
}

export default Photo