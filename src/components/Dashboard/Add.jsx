import React, { useState } from "react";
import Column from "./Column";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function Add({ count, setIsAdding }) {
  const [players, setPlayers] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const addScores = async () => {
    const newPlayers = players.filter((player) => player.name != "");
    try {
      newPlayers.forEach(
        async ({ id, ...rest }) =>
          await addDoc(collection(db, "scores"), {
            ...rest,
            timestamp: Date.now(),
          })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    addScores();
    setIsAdding(false);
  };

  return (
    <div>
      <div className="grid grid-cols-8">
        {[...Array(count)].map((_, num) => (
          <Column key={num} num={num} setPlayers={setPlayers} />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>

      <datalist id="cities">
        <option value="Giza" />
        <option value="Rhodes" />
        <option value="Babylon" />
        <option value="Alexandria" />
        <option value="Halicarnassus" />
        <option value="Olympia" />
        <option value="Ephesus" />
      </datalist>
    </div>
  );
}
