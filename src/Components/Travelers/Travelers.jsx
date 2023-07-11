//Imported Destination Images =========>
import paris from '../../assets/Paris.jpg'

//Imported Traveler Images =========>
import traveler1 from '../../assets/user(1).jpg'


const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {/* Single passanger card */}
          <div className="singleTraveler">

            <img src={paris} className="destinationImage" />

            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={traveler1} className='travelerImage'/>
              </div>
              <div className="travelerName">
                <span>IsraMiller</span>
                @isramiller8
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Travelers