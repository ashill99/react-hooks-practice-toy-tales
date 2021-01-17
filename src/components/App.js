import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(toyData => {
      setToys(toyData)
    })
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newData) {
    setToys([...toys, newData])
  }

  function handleDeleteToy(id) {
  const updatedToys = toys.filter((toy) => toy.id !== id)
  setToys(updatedToys)
  }

  function handleLikeClick(updatedToy) {
    console.log(updatedToy)
    const updatedToys = toys.map((toy) => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onLikeClick={handleLikeClick} onDeleteToy={handleDeleteToy} toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
