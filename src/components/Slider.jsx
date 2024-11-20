import { useState } from "react";
import "../style/slider.css";
import ContentBtn from "./ContentBtn";


function Slider() {
  const [line,setLine] = useState(false);
  const [line2,setLine2] = useState(false);
  const [line3,setLine3] = useState(false);
  const [line4,setLine4] = useState(false);

  const hadlerLine = () => setLine(!line);
  const hadlerLine2 = () => setLine2(!line2);
  const hadlerLine3 = () => setLine3(!line3);
  const hadlerLine4 = () => setLine4(!line4);

  const btnSlider =  line ? 'btn-slider mr-2 bg-white' : 'btn-slider mr-2'
  const btnSlider2 = line2 ? 'btn-slider mr-2 bg-white' : 'btn-slider mr-2'
  const btnSlider3 = line3 ? 'btn-slider mr-2 bg-white' : 'btn-slider mr-2'
  const btnSlider4 = line4 ? 'btn-slider mr-2 bg-white' : 'btn-slider mr-2'
  const bgImagenOne = line ? 'bg-imagen-two' : 'bg-imagen-one';
  
  
  return (
    <section className="slid grid justify-center bg-black w-full">
        <div>
          <div className=' w-full h-full'>
                <a className="video-imagen">
                  <div className={bgImagenOne} />
                  <div className=''/>
                  <div className='bg-imagen-two none'/>
                  <div className='bg-imagen-two none'/>
                </a>
            </div>
        </div>

        <div className=' text-white p-20 flex flex-col justify-between'>
          <ContentBtn /> 
          <div className="bnts-container">
              <button className={btnSlider} onClick={hadlerLine}></button>
              <button className={btnSlider2} onClick={hadlerLine2}></button>
              <button className={btnSlider3} onClick={hadlerLine3}></button>
              <button className={btnSlider4} onClick={hadlerLine4}></button>
          </div>  
        </div> 
    </section>
  )
}

export default Slider








