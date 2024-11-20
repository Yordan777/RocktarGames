import "../style/menuC.css";
import { TbExternalLink } from "react-icons/tb";
function MenuCenter() {
  return (
    <div className="menuC-container">
      <nav className=" overflow-x-auto">
        <ul className="flex flex-wrap justify-center p-0 m-0">
            <li><button className="btn-menuC">Games <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg"></img> </button></li>
            <li><a className="link-menuC">Newswire</a></li>
            <li><a className="link-menuC">Videos</a></li>
            <li><a className="link-menuC">Downloads </a></li>
            <li><a className="link-menuC">Store <TbExternalLink/></a></li>
            <li><a className="link-menuC">Support <TbExternalLink/></a> </li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuCenter
