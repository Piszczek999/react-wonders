import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../../config/firebase";

export default function Table({ scores, getScores }) {
  const fortmatTime = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = new Intl.DateTimeFormat().format(date);
    return formattedDate;
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "scores", id));
    getScores();
  };

  return (
    <table className="shadow-lg">
      <thead>
        <tr>
          <th className="bg-slate-700 text-slate-200 font-medium px-1">Name</th>
          <th className="bg-black font-medium px-1">
            <img src="/city.png" alt="city" width={40} />
          </th>
          <th className="bg-red-500">
            <img src="/military.png" alt="military" width={40} />
          </th>
          <th>
            <img src="/money.png" alt="money" width={40} />
          </th>
          <th>
            <img src="/wonder.png" alt="wonder" width={40} />
          </th>
          <th className="bg-blue-500">
            <img src="/blue.png" alt="blue" width={40} />
          </th>
          <th className="bg-yellow-300">
            <img src="/yellow.png" alt="yellow" width={40} />
          </th>
          <th className="bg-green-600">
            <img src="/science.png" alt="science" width={40} />
          </th>
          <th className="bg-fuchsia-700">
            <img src="/guild.png" alt="guild" width={40} />
          </th>
          <th className="bg-slate-400">Date</th>
          <th className="bg-sky-400">Actions</th>
        </tr>
      </thead>
      <tbody>
        {scores
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((score) => (
            <tr key={score.id}>
              <th className="bg-slate-600 text-slate-200 font-medium px-1">
                {score.name}
              </th>
              <th className="bg-slate-300 font-medium px-1">{score.city}</th>
              <th className="bg-red-300">{score.military}</th>
              <th>{score.money}</th>
              <th>{score.wonder}</th>
              <th className="bg-blue-300">{score.blue}</th>
              <th className="bg-yellow-300">{score.yellow}</th>
              <th className="bg-emerald-300">{score.science}</th>
              <th className="bg-violet-300">{score.guild}</th>
              <th className="bg-slate-300 px-1">
                {fortmatTime(score.timestamp)}
              </th>
              <th>
                <button
                  className="bg-red-500 rounded-lg font-medium hover:bg-red-600 px-1"
                  onClick={() => handleDelete(score.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
