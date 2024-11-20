import { Carousel } from 'flowbite-react';
import "../style/slider.css";
import ContentBtn from "./ContentBtn";

function CarouselBanner() {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96 altu">
      <Carousel className='carous' slide={false} leftControl="." rightControl=".">
        <div className='flex w-full carousel-cnt'>
          <img className=' w-full' src='https://videos-rockstargames-com.akamaized.net/screencaps/666666/_global/1920.jpg?im=Resize=1280' alt="..." />
          <ContentBtn title="Grand Theft Auto VI" txt="Trailer 1" btnName="watch now"/> 
        </div>

        <div className='flex w-full carousel-cnt'>
          <img className=' w-full' src='https://videos-rockstargames-com.akamaized.net/screencaps/12413/en_us/1920.jpg' alt="..." />
          <ContentBtn title="Red Dead Redemption" txt="Now on Nintendo Swicth and PS4" btnName="watch now"/> 
        </div>

        <div className='flex w-full carousel-cnt'>
          <img className=' w-full' src='https://videos-rockstargames-com.akamaized.net/screencaps/12426/_global/1920.jpg?im=Resize=1280' alt="..." />
          <ContentBtn title="Grand Theft Auto Online" txt="The Chop Shop" btnName="watch now"/> 
        </div>

        <div className='flex w-full carousel-cnt'>
          <img className=' w-full' src='https://videos-rockstargames-com.akamaized.net/screencaps/12290/_global/1920.jpg?im=Resize=1280' alt="..." />
          <ContentBtn title="Grand Theft Auto Online" txt="San Andreas Mercenaries Out Now" btnName="watch now"/> 
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
