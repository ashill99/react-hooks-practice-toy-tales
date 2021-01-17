import React, { useState } from "react";

function ToyForm({onNewToy}) {

  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")


  function handleSubmit(event) {
    event.preventDefault()
    console.log('submit')
    const newToy = {
      name: name, 
      image: imageUrl,
    }
    console.log(newToy)
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
    ,
    body: JSON.stringify(newToy)
  })
    .then(res => res.json())
    .then(newData => {onNewToy(newData)})
  }


  return (
    <div className="container">
      <form className="add-toy-form" onClick={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
