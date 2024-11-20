import "../style/featureGame.css";
import PropTypes from 'prop-types';

function FeatureGame({img}) {
  return (
    <div className="">
      <a className="card-feature ">
        <div className="card-feature-img"><img src={img}></img></div>
      </a>
    </div>
  )
}

FeatureGame.propTypes = {
  img: PropTypes.string,
}
export default FeatureGame
