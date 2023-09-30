import React from 'react';
import { PointsContext } from '../../routes/root';


const Header = () => {
  const [points] = React.useContext(PointsContext);
  
  return (  
    
    <header className='container relative z-30'>
      <div className="border-4 border-header-outline rounded-xl py-3 px-4 flex justify-between">
        <div className="flex flex-col justify-center">
          <div className="uppercase font-semibold text-white text-2xl leading-5">Rock</div>
          <div className="uppercase font-semibold text-white text-2xl leading-5">Paper</div>
          <div className="uppercase font-semibold text-white text-2xl leading-5">Scissors</div>
        </div> 
        <div className="bg-white rounded-md text-center text-primary flex flex-col justify-center px-8 py-2">
          <div className="uppercase text-xs ">Score</div>
          <div className="uppercase text-4xl">{points}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
