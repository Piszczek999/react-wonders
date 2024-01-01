import { useEffect, useState } from "react";

export default function Column({ num, setPlayers }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [military, setMilitary] = useState(0);
  const [money, setMoney] = useState(0);
  const [wonder, setWonder] = useState(0);
  const [blue, setBlue] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [science, setScience] = useState(0);
  const [guild, setGuild] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(military + money + wonder + blue + yellow + science + guild);
    setPlayers((prev) =>
      prev.map((obj) =>
        obj.id === num
          ? {
              id: num,
              name,
              city,
              military,
              money,
              wonder,
              blue,
              yellow,
              science,
              guild,
              sum,
            }
          : obj
      )
    );
  }, [name, city, military, money, wonder, blue, yellow, science, guild]);

  return (
    <div className="flex flex-col">
      <input
        type="text"
        autoComplete="off"
        className="bg-slate-700 border-l-2 border-black text-slate-200"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        list="cities"
        autoComplete="off"
        className="bg-slate-400 border-l-2 border-black"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-red-400 border-l-2 border-black text-center"
        onChange={(e) => setMilitary(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-amber-400 border-l-2 border-black text-center"
        onChange={(e) => setMoney(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-cyan-400 border-l-2 border-black text-center"
        onChange={(e) => setWonder(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-blue-400 border-l-2 border-black text-center"
        onChange={(e) => setBlue(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-yellow-400 border-l-2 border-black text-center"
        onChange={(e) => setYellow(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-emerald-400 border-l-2 border-black text-center"
        onChange={(e) => setScience(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        className="bg-violet-400 border-l-2 border-black text-center"
        onChange={(e) => setGuild(Number(e.target.value))}
      />
      <input
        type="number"
        autoComplete="off"
        value={sum}
        className="bg-slate-800 border-l-2 border-black text-slate-200 text-center"
        readOnly
      />
    </div>
  );
}
