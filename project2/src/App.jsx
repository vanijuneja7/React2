import React from "react";
import Nave from './Component/Nave.jsx';
import Side from './Component/Side.jsx';
import Mainc from './Component/Mainc.jsx';
import Footer from './Component/Footer.jsx';

function App() {
  return (
    <div>
      <Nave/>
      <div className="layout">
        <Side/>
        <Mainc/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;