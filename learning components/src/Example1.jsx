import React, { useState } from "react";

const Example1 = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1 className="ml-3 mt-3">{score}</h1>
      <button
        onClick={()=>setScore(score+1)}
        className="bg-blue-500 px-2  py-1 rounded text-white mt-2 ml-3"
      >
        Change
      </button>
    </div>
  );
};

