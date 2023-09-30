import IconPaper from '../../inc/images/icon-paper.svg';

const PaperElement = () => {
  return (

          <div className="bg-gradient-to-b from-paper-to to-paper-from w-full h-full rounded-full flex justify-center items-center realative z-20">
            <div className="w-3/4 h-3/4 bg-white flex justify-center items-center rounded-full">
              <img className="w-2/4" src={IconPaper} alt="Paper" />        
            </div>
          </div>
        
  )
}

export default PaperElement
