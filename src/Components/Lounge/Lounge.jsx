// Imported Images ====>
import imageGrid2 from '../../assets/image-grid2.jpg';
import imageGrid3 from '../../assets/image-grid3.jpg';

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid2} className="roundedImage" />
        </div>

        <div className="imgDiv">
          <img src={imageGrid3} className="roundedImage" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        <div className="grids grid">

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airport
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Priority Boardin
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Care on the flight
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Chauffeur-drive service
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Lounge