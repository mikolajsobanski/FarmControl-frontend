import video from  '../assets/video.mp4'
import './css/videoSection.css'

function VideoSection(){

    return (
        <div className='mainDiv-videoSection'>
            <video src={video} autoPlay loop muted></video>
        </div>
    )
}

export default VideoSection