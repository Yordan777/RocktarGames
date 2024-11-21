import "../style/newswireCard.css";
import PropTypes from 'prop-types';
function NewswireCard({txt, title, img, data }) {
  return (
      <a className="card">
        <div className="card-img"><img src={img}></img></div>
        <div className="card-txt">
            <div className=" flex">
                <h3 className=" text-white pr-3 text-base font-bold">{title}</h3>
                <p className=" text-gray-500 text-base font-bold">{data}</p>
            </div>
            <div className="card-txt-p">
                <h2 className=" text-white">{txt}</h2>
            </div>
        </div>
      </a>
  )
}

NewswireCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  data: PropTypes.string,
  txt: PropTypes.string
}
export default NewswireCard
