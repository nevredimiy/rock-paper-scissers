import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';

function App() {
  const [isOpenPoup, setIsOpenPopup] = React.useState(false);


  return (
    <div className="bg-gradient-radial from-bg-gradient-from to-bg-gradient-to justify-center items-center h-screen">
      <div className="container md:max-w-3xl pt-14 pb-24 h-full">
        <div className="flex flex-col h-full">
          <Header />
          <Main />
          <div className="flex justify-center md:justify-end">
            <button onClick={() => {setIsOpenPopup(true)}} className="text-white uppercase border-2 border-header-outline px-10 py-2 rounded-lg tracking-widest">Rules</button>
          </div>
          <Popup rules={isOpenPoup} closePopup={() => setIsOpenPopup(false)} />
        </div>
      </div>

    </div>
  )
}

export default App
