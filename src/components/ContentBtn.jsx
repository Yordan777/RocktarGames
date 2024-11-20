import PropTypes from 'prop-types';

function ContentBtn({title , txt , btnName}) {
  return (
         <div className="p-20 Content-Btn">
            <a>
              <div className=" grid gap-9">
                <div className="txt-slid grid gap-4">
                    <p className="font-bold">{title}</p>
                    <h2 className="font-bold">{txt}</h2>
                </div>
                <button className="btn-slid">{btnName}</button>
              </div>
            </a>    
        </div>
  )
}
ContentBtn.propTypes = {
  title : PropTypes.string,
  txt: PropTypes.string,
  btnName : PropTypes.string
}

export default ContentBtn
