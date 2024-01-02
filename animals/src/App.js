import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRamdomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
};

function App() {
  /*const handleClick = () => {
  };*/
  const [animals, setAnimals ] = useState([]);

  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })
  
  return (
    <div className='app'>
      <button onClick={() => {
        setAnimals([...animals, getRamdomAnimal()])
      }
      }>Add Animal</button>
      <div className='animal-list'>{renderedAnimal}</div>
    </div>
  );
}

export default App;
