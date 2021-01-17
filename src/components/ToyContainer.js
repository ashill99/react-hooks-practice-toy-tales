import React, {useEffect, useState} from "react";
import ToyCard from "./ToyCard";



function ToyContainer({toys, setToys, onDeleteToy, onLikeClick}) {


  console.log(toys)

  const eachToy = toys.map((toy) => {
    return <ToyCard toy={toy} onDeleteToy={onDeleteToy} onLikeClick={onLikeClick} />
    })

  console.log(eachToy)

  return (
    <div id="toy-collection">{eachToy}</div>
  );
}

export default ToyContainer;
