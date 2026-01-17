import React from 'react'
import Nav from './assets/Component/Nav.jsx'
import Dest from './assets/Component/Dest.jsx'
import london from './assets/Component/london.jpg';
import aris from './assets/Component/aris.webp';
import italy from './assets/Component/italy.jpg';
import Switzerland from './assets/Component/Switzerland.webp';

function App() {
  return (
    
      <div className="App">
        <Nav />
        <div className='destinations'>
          <Dest
            imgsrc={london}
            name="London"
             map="https://maps.app.goo.gl/RVkESLKsnUUhJMiy8"
            date="22-30 June 2026"
            about="London, the capital of England and the United Kingdom..."
          />
        </div>
      
        <div className='destinations1'>
          <Dest
            imgsrc={aris}
            name="Paris"
              map="https://maps.app.goo.gl/1XoJ5gk3Ykz6v3bA9"
            date="22-30 December 2026"
            about="Paris, the capital of France ..."
          />
        </div>
    
        <div className='destinations2'>
          <Dest
            imgsrc={italy}
            name="Italy"
            map="https://maps.app.goo.gl/3z1vY6vYhQ8Jqv3F9"
            date="22-30 September 2026"
            about="Italy, a country in Europe ..."
          />
        </div>
      
        <div className='destinations3'>
          <Dest
            imgsrc={Switzerland}
            name="Switzerland"
             map="https://maps.app.goo.gl/5y2Xz6vYhQ8Jqv3F9"
            date="22-30 July 2026"
            about="Switzerland, a country in Europe ..."
          />
        </div>
  
        
      </div>
      
      )
}

      export default App
