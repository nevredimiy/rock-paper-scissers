import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Popup from '../components/Popup/Popup';

export const PointsContext = React.createContext();
export const CountPickedContext = React.createContext();

const Root = () => {
    const [isOpenPoup, setIsOpenPopup] = React.useState(false);
    const [points, setPoints] = React.useState(0);
    
    return (
        <PointsContext.Provider value={[points, setPoints]}>
        <div className="bg-gradient-radial from-bg-gradient-from to-bg-gradient-to justify-center items-center min-h-max h-screen">
            
            <div className="md:max-w-3xl pt-14 pb-24 h-full mx-auto">
                
                <div className="flex flex-col h-full">                        
                    
                    <Header />
                    <CountPickedContext.Provider value={['rock', 'paper', 'scissors']}>
                            <Outlet /> 
                    </CountPickedContext.Provider>
                    
                    <div className="relative z-30 md:mt-20 flex justify-center md:justify-end">
                        
                        <button onClick={() => { setIsOpenPopup(true) }} className="text-white uppercase border-2 border-header-outline px-10 py-2 rounded-lg tracking-widest">Rules</button>
                        
                    </div>
                    
                    <Popup rules={isOpenPoup} closePopup={() => setIsOpenPopup(false)} />  
                    
                </div>
                
            </div>
                    
        </div>
        </PointsContext.Provider>
                    
        )
}

export default Root