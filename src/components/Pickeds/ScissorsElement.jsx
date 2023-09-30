import IconScissors from '../../inc/images/icon-scissors.svg';

const ScissorsElement = () => {
  return (
      
          <div className="bg-gradient-to-b from-scissors-to to-scissors-from w-full h-full rounded-full flex justify-center items-center relative z-20">
              <div className="w-3/4 h-3/4 bg-white flex justify-center items-center rounded-full">
                  <img className="w-2/4" src={IconScissors} alt="Scissors" />  
              </div>
          </div>    
      
  )
}

export default ScissorsElement
