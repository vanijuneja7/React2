import React from 'react';
import Card from './assets/Component/Card';
import felix from './assets/Component/felix.jpg';
import unnamed from './assets/Component/unnamed.png';
import cat from './assets/Component/cat.png';
import dog from './assets/Component/dog.jpg';   

function App() {
  return (
    <div className="App">
  
     <div className="card-container">
      <Card
        imgsrc={felix}
        name="Felix"
        number="+1234567890"
        email="vanijuneja7@gmail.com"
      />
      </div>
      <div className="card1-container">
        <Card
        imgsrc={unnamed}
        name="john"
        number="+1234566780"
        email="mannatjuneja7@gmail.com"
      />
      </div>
      <div className="card2-container">
      <Card
        imgsrc={cat}
        name="cat"
        number="+1988636367"
        email="Snehajuneja@gmail.com"
        />
      </div>
      <div className="card3-container">
        <Card
        imgsrc={dog}
        name="dog"
        number="+19886736492"
        email="Sumitjuneja@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;
