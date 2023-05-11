import Image from "next/image";
import React from "react";

function Players({ player, category }) {
  return (

    <div className=' w-fit flex justify-center m-auto mt-16 cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
        <div className="">
            <h3 className="text-4xl mt-3 text-white">{player}</h3>
            <h3 className="text-xl mt-2 text-slate-500">{category}</h3>
        </div>
    </div>
  );
}

export default Players;
