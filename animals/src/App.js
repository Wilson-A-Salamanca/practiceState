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
    <div>
      <button onClick={() => {
        setAnimals([...animals, getRamdomAnimal()])
      }
      }>Add Animal</button>
      <dev>{renderedAnimal}</dev>
    </div>
  );
}

export default App;
