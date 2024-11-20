import NewswireCard from "./NewswireCard"
import "../style/NewswireCard.css";
import FeatureGame from "./FeatureGame";
import GtaVI from '../img/GtaVI.jpg';
import gtaChopShop from '../img/gtaOnline.jpg';
import gtaPlus from '../img/gtaOnline1.jpg';
import Trailer1 from '../img/trailer1.jpg';
import GtaVehicule from '../img/gtaVehicule.jpg';
import GtaProjectOver from '../img/gtaProjectOver.jpg';
import GtaV from '../img/gtaV.jpg';
import GTAOnline2 from '../img/GTAOnline2.jpg';
import Reddeadredemption2 from '../img/reddeadredemption2.jpg';
import Reddeadonline from '../img/reddeadonline.jpg';
export default function Newswire() {
  return (
    <>
      <section className="section-cards p-24">
          <h3 className=" text-white text-5xl font-bold mt-1 mb-14">Newswire</h3>
          <div className="card-content">
          <NewswireCard title='GTA Online' data='December 12, 2023' txt='GTA Online: The Chop Shop Now Available' img={gtaChopShop}/>
          <NewswireCard title='GTA Online' data='December 12, 2023' txt='GTA+ Members Get Access to the New Vinewood Club Garage, a Free Declasse Impaler LX, and Much More ' img={gtaPlus}/>
          <NewswireCard title='Grand Theft Auto VI' data='December 5, 2023' txt='Grand Theft Auto VI - Watch Trailer 1 Now' img={GtaVI}/>
          <NewswireCard title='Rockstar Games' data='December 1, 2023' txt='TRAILER 1. TUESDAY, DECEMBER 5. 9AM ET.' img={Trailer1}/>
          <NewswireCard title='GTA Online' data='November 30, 2023' txt='New GTA Online Update Coming this December' img={GtaVehicule}/>
          <NewswireCard title='GTA Online' data='November 30, 2023' txt='2X GTA$ and RP on Project Overthrow Missions' img={GtaProjectOver}/>
          </div>
          <a className="view">View More</a>
      </section>
      <section className="section-cards p-24">
            <h3 className=" text-white text-5xl font-bold mt-1 mb-14">Featured Games</h3>
            <div className="feature">
            <FeatureGame img={GtaV}/>
            <FeatureGame img={GTAOnline2}/>
            <FeatureGame img={Reddeadredemption2}/>
            <FeatureGame img={Reddeadonline}/>
            </div>
            <a className="view ">View More</a>
            
      </section>

    </>
  )
}
