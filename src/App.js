import React from 'react';
import './App.css';
import FormControl from './FormControl';
import CardAnimal from './CardAnimal';

function App() {
  const signes = [
    { name: 'Singe', description: 'Poilu', img: './src/singe.jpg' },
    { name: 'Coq', description: 'Bruyant', img: './src/coq.jpg' },
    { name: 'Cochon', description: 'Gourmand', img: './src/cochon.jpg' },
    { name: 'Chien', description: 'Fidèle', img: './src/chien.jpg' },
    { name: 'Chèvre', description: 'Sauteuse', img: './src/chevre.jpg' },
    { name: 'Cheval', description: 'Rapide', img: './src/cheval.jpg' },
    { name: 'Serpent', description: 'Froid', img: './src/serpent.jpg' },
    { name: 'Dragon', description: 'Piquant', img: './src/dragon.jpg' },
    { name: 'Lapin', description: 'Mignon', img: './src/lapin.jpg' },
    { name: 'Tigre', description: 'Chasseur', img: './src/tigre.jpg' },
    { name: 'Buffle', description: 'Impossant', img: './src/buffle.jpg' },
    { name: 'Rat', description: 'Voleur', img: './src/rat.jpg' },
  ];

  return (
    <div className="App" className="container">
      <h3>Astrologie chinoise</h3>
{signes.map((sign)) => <CardAnimal/>}

      <FormControl label="Quelle est -vôtre année de naissance ?" />
      <button type="submit" className="btn btn-primary">Valider</button>
      <CardAnimal />
    </div>
  );
}

export default App;
