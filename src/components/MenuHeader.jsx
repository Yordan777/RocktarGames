import Seach from '../img/buscar.svg';

function MenuHeader() {
  return (
    <div className="navigation p-6">
      <div className="q"> 
          <div className="seach px-20">
              <form role="seach" className="buscar flex">
                <button type="submit" className="submit">
                      <img src={Seach} alt='seach'/>
                </button>
                <input type="text" placeholder="Search Rockstar Games" className='input_seach'/>
              </form>
          </div>
          <div className="links text-white grid justify-center px-20 text-4xl  font-bold">
                <a>Newswire</a>
                <a>Games</a>
                <a>Videos</a>
                <a>Downloads</a>
                <a>Support</a>
                <a>Support</a>
                <a>Support</a>
                <a>Support</a>
          </div>
      </div>
    </div>
  )
}

export default MenuHeader
