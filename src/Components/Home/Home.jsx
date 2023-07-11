import {useRef, useEffect} from 'react';

// Imported Assets =========>
import video from '../../assets/video.mp4';
import aeroplane from '../../assets/takeOff.png';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="home flex container">

      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video ref={videoRef} src={video} autoPlay muted loop className='video'></video>

        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}

export default Home