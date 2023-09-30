import ImageRules from '../../inc/images/image-rules.svg';
import IconClose from '../../inc/images/icon-close.svg'
import PropTypes from 'prop-types';

const Popup = ({rules, closePopup}) => {

  if (!rules) return null;

  const handleCover = (e) => {
    if (e.target.id === "cover") closePopup();
  }

  return (
    <>
      <div id="cover" onClick={handleCover} className="fixed inset-0 z-30 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
        <div className="relative text-center bg-white h-full w-full sm:h-max sm:w-max grid justify-items-center py-16 sm:px-10 sm:py-10 sm:grid-cols-2 sm:rounded-lg">
          <h1 className="uppercase text-3xl pb-10 sm:justify-self-start">Rules</h1>
          <div className="flex-auto pb-16 sm:col-span-2 sm:pb-0">
            <img src={ImageRules} alt="Rules" />
          </div>
          <div className="sm:row-start-1 sm:col-start-2 sm:pt-2 sm:justify-self-end">
            <button onClick={() => closePopup()}>
              <img src={IconClose} alt="Close" />
            </button>
          </div>
        </div>
      </div>
    </>  
  )
}

Popup.propTypes = {
  rules: PropTypes.bool,
  closePopup: PropTypes.func
}

export default Popup
