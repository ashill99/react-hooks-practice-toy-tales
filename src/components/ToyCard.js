import React from "react";

function ToyCard({toy, onDeleteToy, onLikeClick}) {

  const { id, name, image, likes } = toy;

  function handleDeleteClick(event) {
fetch(`http://localhost:3001/toys/${id}`, 
    {method: 'DELETE'})
    .then((r) => r.json())
    .then(() => {
    onDeleteToy(id)
    })
  }

  function handleLikeClick() {
    const updatedLikes = {
      likes: toy.likes + 1
    }
    fetch(`http://localhost:3001/toys/${id}`, 
    {method: 'PATCH', 
  headers: {"Content-Type": "application/json"}, 
body: JSON.stringify(updatedLikes)
})
.then(r => r.json())
.then(onLikeClick)
  }


  return (
    <div key={toy.name} className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button id={toy.id} className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
