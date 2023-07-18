import { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Aos from 'aos';
import 'aos/dist/aos.css';
import video from '../../assets/video.mp4';
import aeroplane from '../../assets/takeOff.png';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const videoRef = useRef(null);
  const mirrorVideo = true;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  const planeSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500, velocity:30 },
  });

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With Us
        </h1>
      </div>

      <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">
        <div className="videoDiv">
          <video ref={videoRef} src={video} autoPlay muted loop className="video"></video>
        </div>

        <animated.img
          src={aeroplane}
          className={`plane ${mirrorVideo ? 'mirror' : ''}`}
          style={planeSpring}
        />
      </div>
    </div>
  );
};

export default Home;

