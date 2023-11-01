import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-gray-800 font-bold py-2 px-4 rounded">{count}</h2>
      <button
        className="drop-shadow-lg bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        클릭하세요
      </button>
    </div>
  );
};

export default Example;
