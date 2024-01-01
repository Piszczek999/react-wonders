import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Table from "./Table";
import Add from "./Add";

export default function Dashboard() {
  const [scores, setScores] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const getScores = async () => {
    const querySnapshot = await getDocs(collection(db, "scores"));
    const scores = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setScores(scores);
  };

  useEffect(() => {
    getScores();
  }, [isAdding]);

  return (
    <div className="container m-auto">
      <button onClick={() => setIsAdding(true)}>Add</button>
      {!isAdding && <Table scores={scores} getScores={getScores} />}
      {isAdding && <Add count={7} setIsAdding={setIsAdding} />}
    </div>
  );
}
