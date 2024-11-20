import { TbExternalLink } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { IoLogoTwitch } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../style/footer.css";


function Footer() {
  return (
    <footer className="footer bg-black text-white gap-28 flex flex-col p-24">
      <div className="flex justify-between">
        <div className="gap-5 flex">
          <a className="txt-footer flex gap-2">Contact</a>
          <a className="txt-footer flex gap-2">Careers <i><TbExternalLink /></i></a>
          <a className="txt-footer flex gap-2">Subscribe<i> <TbExternalLink /></i></a>
        </div>
        <button className="flex items-center gap-3">
          <i className="icon-globe"><CiGlobe/></i>
          <span className="txt-lenguage flecha ">Select a Language</span>
        </button>
      </div>


      <div className="flex justify-between">
        <div className=" flex gap-3">
          <a className="txt-link">Corporate</a>
          <a className="txt-link">Privacy</a>
          <a className="txt-link">Cookie Settings</a>
          <a className="txt-link">Cookie Policy</a>
          <a className="txt-link">Legal</a>
          <a className="txt-link">Do Not Sell My Personal Information</a>
        </div>
        <div className="flex gap-10">
          <i className="icon-globe"><IoLogoTwitch/></i>
          <i className="icon-globe"><FaInstagram/></i>
          <i className="icon-globe"><FaTwitter/></i>
          <i className="icon-globe"><FaYoutube/></i>
          <i className="icon-globe"><FaFacebook/></i>
        </div>
      </div>


      <div className="flex justify-between">
        <p>Rockstar Games</p>
        <div className="flex justify-between gap-5">
          <p>New York</p>
          <p>London</p>
          <p>Paris</p>
          <p>Bogotá</p>
        </div>
        <p>MCMXCVIII</p>
      </div>
    </footer>
  )
}

export default Footer
