// import { useEffect } from 'react';

// // Import Images =========>
// import gridImage from '../../assets/image-grid.jpg'
// import image1 from '../../assets/image-grid1.jpg';


// // Import AOS ===========>
// import Aos from 'aos';
// import 'aos/dist/aos.css'


// const Support = () => {
//   //UseEffect to set animation duration ===>
//   useEffect(() => {
//     Aos.init({duration: 2000})
//   }, [])

//   return (
//     <div className="support container section">
//       <div className="sectionContainer">

//         <div className="titlesDiv">
//           <small>travel support</small>
//           <h2>Plan you travel with confidence</h2>
//           <p>Find help with booking and travel plans, see what to expect along the journey!</p>
//         </div>

//         <div className="infoDiv grid">

//           <div className="textDiv grid">

//             <div  data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
//               <span className="number">01</span>
//               <h4>Travel requirements for Dubai</h4>
//               <p>
//                 Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
//               </p>
//             </div>

//             <div  data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
//               <span className="number colorOne">02</span>
//               <h4>Chauffer services at your arrival</h4>
//               <p>
//                 Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
//               </p>
//             </div>

//             <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
//               <span className="number colorTwo">03</span>
//               <h4>Multi-risk travel insurance</h4>
//               <p>
//                 Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
//               </p>
//             </div>

//           </div>

//           <div  data-aos='fade-up' data-aos-duration='2500' className="imgDiv maxSizeImage">
//             <img src={gridImage} className="roundedImage" />
//           </div>

//           <div data-aos='fade-up' data-aos-duration='2500' className="imgDiv maxSizeImage">
//             <img src={image1}  className="roundedImage" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Support






import { useEffect } from 'react';
import gridImage from '../../assets/image-grid.jpg'
import image1 from '../../assets/image-grid1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffer services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
            </div>
          </div>
          <div className="imgDiv">
            <img src={gridImage} className="roundedImage" data-aos="fade-left" data-aos-duration="2000" />
            <img src={image1} className="roundedImage" data-aos="fade-left" data-aos-duration="2000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
