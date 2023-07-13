import { useEffect } from 'react';


//Imported Destination Images =========>
import paris from '../../assets/Paris.jpg'
import NewYork from '../../assets/ny.jpg'
import RioDeJaneiro from '../../assets/rio.jpg'
import Dubai from '../../assets/Dubai.jpg'

//Imported Traveler Images =========>
import traveler1 from '../../assets/user(1).jpg'
import traveler2 from '../../assets/user(2).jpeg'
import traveler3 from '../../assets/user(3).jpg'
import traveler4 from '../../assets/user(4).jpg'


// Array method called Map to display all the data =========>

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Isra Miller',
    socialLink: '@isramiller8'
  },

  {
    id: 2,
    destinationImage: NewYork,
    travelerImage: traveler2,
    travelerName: 'Taylor Lindsey',
    socialLink: '@taylorlindsey'
  },

  {
    id: 3,
    destinationImage: RioDeJaneiro,
    travelerImage: traveler3,
    travelerName: 'Leonardo Brito',
    socialLink: '@leonardobrito'
  },

  {
    id: 4,
    destinationImage: Dubai,
    travelerImage: traveler4,
    travelerName: 'Suzana Duarte',
    socialLink: '@suzanaduarte'
  }
]

// Import AOS ===========>
import Aos from 'aos';
import 'aos/dist/aos.css'

const Travelers = () => {
//UseEffect to set animation duration ===>
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage,travelerName, socialLink}) => {
              return (
                // {/* Single passanger card */}
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">

                <img src={destinationImage} className="destinationImage" />

              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage} className='travelerImage'/>
                </div>
                <div className="travelerName">
                <span>{travelerName}</span>
                <p>{socialLink}k</p>
              </div>
            </div>

          </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Travelers