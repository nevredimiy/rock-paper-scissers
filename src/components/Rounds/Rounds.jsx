import { useParams, Link } from 'react-router-dom';
import React from 'react';

import PaperElement from '../Pickeds/PaperElement';
import RockElement from '../Pickeds/RockElement';
import ScissorsElement from '../Pickeds/ScissorsElement';

import { PointsContext } from '../../routes/root';
import {CountPickedContext} from '../../routes/root'

const Rounds = () => {
  const [points, setPoints] = React.useContext(PointsContext);
  const pickeds = React.useContext(CountPickedContext);

  const { round } = useParams();
               
  const [myPicked, setMyPicked] = React.useState('');
  const [pickedHomeElement, setPickedHomeElement] = React.useState('')

  const pickedHome = React.useRef('');
  // const pickedsArr = React.useRef(['rock', 'scissors', 'paper']);
  const result = React.useRef(0);

  const searchRandomPicked = () => {
    const filterPickedArr = pickeds.filter(picked => !(picked === round))
    pickedHome.current = filterPickedArr[Math.floor(Math.random() * 2)]

    setTimeout(() => {
      switch (pickedHome.current) {
      case 'rock':
        setPickedHomeElement(<RockElement />);        
        break;
      case 'paper':
        setPickedHomeElement(<PaperElement />);
        break;
      case 'scissors':
        setPickedHomeElement(<ScissorsElement />);
        break;
      default:
        setPickedHomeElement('')
        break;
      }

      if (round === 'rock') {

        if (pickedHome.current === 'scissors') {
          result.current = 1;
          setPoints(points + 1);
        } else {
          result.current = 0;
          setPoints(points - 1);
        } 

      }      

      if (round === 'paper') {
        if (pickedHome.current === 'rock') {
          result.current = 1;
           setPoints(points + 1);
        }
        else {
          result.current = 0;
          setPoints(points - 1);
        }
      }

      if (round === 'scissors') {
        if (pickedHome.current === 'paper') {
          result.current = 1;
          setPoints(points + 1);
        } else {
          result.current = 0;
          setPoints(points - 1);
        }
      }
      
    }, 2000);
  }

  //render my picked
  React.useEffect(() => {
        switch (round) {
          case 'rock':
            setMyPicked(<RockElement />);
            searchRandomPicked();
            break;
          
          case 'paper':
            setMyPicked(<PaperElement />);
            searchRandomPicked();
            break;
          
          case 'scissors':
            setMyPicked(<ScissorsElement />);
            searchRandomPicked();
            break;
        
          default:
            setMyPicked('');
            break;
      }      

  }, [])
  
    
  return (
    <main className={`${pickedHomeElement === '' && 'container'} grid grid-cols-2 md:grid-cols-3 md:grid-rows-[100px_1fr] pb-20`}>
      <div className="relative z-30">
        <div className="text-lg md:text-2xl tracking-widest py-10 uppercase text-white text-center">You picked</div>
      </div>
      <div className="hidden md:block" />
      <div className="relative z-30">
        <div className="text-lg md:text-2xl tracking-widest py-10 uppercase text-white text-center">The house picked</div>
      </div>
      
      <div className="relative z-20 w-56 h-56 mx-auto m-10 flex justify-center items-center">
        {myPicked}
        
        { result.current === 1 && !(pickedHomeElement === '') &&
          
            <div className="absolute z-0 bg-gradient-radial from-header-outline via-bg-gradient-from to-bg-gradient-to w-[36rem] h-[36rem] rounded-full" />
          
        }

      </div>
      
      <div className="relative w-56 h-56 mx-auto m-10 flex justify-center items-center">
        {pickedHomeElement ?
            pickedHomeElement
            :
            <div className="rounded-full bg-bg-gradient-to w-3/4 h-3/4"></div>
        }
        
         
        { result.current === 0 && !(pickedHomeElement === '') &&
          
            <div className="absolute z-0 bg-gradient-radial from-header-outline via-bg-gradient-from to-bg-gradient-to w-[36rem] h-[36rem] rounded-full" />
          
        }

      </div>

      <div className="relative z-30 col-span-2 md:col-span-1 md:col-start-2 md:row-start-2 flex flex-col justify-center items-center">

        {!(pickedHomeElement === '') &&
          <>
          <div className="text-white uppercase text-2xl pb-5">{result.current ? 'You Win' : 'You Lose'}</div>
          <Link to="/" className='cursor-pointer hover:opacity-80 transition-opacity py-2 px-8 bg-white text-red-500 uppercase rounded-lg tracking-widest text-xl'>Play again</Link>
          </>
        } 
        
      </div>
    
    </main>
  )
}

export default Rounds
