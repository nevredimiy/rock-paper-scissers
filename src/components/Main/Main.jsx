import React from 'react';

import PaperElement from '../Pickeds/PaperElement';
import ScissorsElement from '../Pickeds/ScissorsElement';
import RockElement from '../Pickeds/RockElement';
import { Link } from 'react-router-dom';
import { CountPickedContext } from '../../routes/root';

const Main = () => {
  const [deg, setDeg] = React.useState([]);
  const itemElements = React.useContext(CountPickedContext);

  const refs = React.useRef([]);

  React.useEffect(() => {
    let sector = 360 / itemElements.length;
    let arr = [];
    itemElements.forEach((el, index) => {
      arr.push(index*sector + 30)
    })
    setDeg(arr);
  }, [itemElements]);


  return (
    <main className="flex-auto">
      <div className="flex justify-center items-center mt-10 bg-triangle bg-center bg-no-repeat">
        <ul className="relative -translate-y-10 mx-auto w-96 h-96 md:w-[32rem] md:h-[32rem] flex justify-center items-center">
          {itemElements.map((item, index) => {
            return (
              <li key={index} ref={el => (refs.current[index] = el)} className={`absolute left-0 origin-[12rem] rotate-[${deg[index]}deg] md:origin-[16rem] w-32 h-32 md:w-44 md:h-44`}>
                <Link to={`/${item}`} className={`block w-full h-full -rotate-[${deg[index]}deg] cursor-pointer hover:opacity-80 transition-opacity`}>
                  <ItemElem picked={item} />
                </Link>
              </li>
              );
          })}
        </ul>
        <div className="rotate-[30deg]"></div>
          <div className="rotate-[150deg]" ></div>
          <div className="rotate-[270deg]"></div>
          <div className="-rotate-[30deg]"></div>
        <div className="-rotate-[150deg]"></div>
        <div className="-rotate-[270deg]"></div>
        </div>
    </main>
  )
}

const ItemElem = ({picked}) => {
  const [pick, setPick] = React.useState('');
  React.useEffect(() => {
    switch (picked) {
      case 'rock':
        setPick(<RockElement />)
        break;
      case 'paper':
        setPick(<PaperElement />)
        break;
      case 'scissors':
        setPick(<ScissorsElement />)
        break;

      default:
        break;
    }
  }, [picked])

  return pick;
}

export default Main
