//Imported Destination Images =========>
import paris from '../../assets/Paris.jpg'

//Imported Traveler Images =========>
import traveler1 from '../../assets/user(1).jpg'


// Array method called Map to display all the data =========>

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'IsraMiller',
    socialLink: '@isramiller8'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage,travelerName, socialLink}) => {
              return (
                // {/* Single passanger card */}
              <div key={id} className="singleTraveler">

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