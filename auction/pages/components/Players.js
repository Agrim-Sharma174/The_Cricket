import Image from "next/image";
import React from "react";

function Players({ player, category }) {
  return (
    // <div className="flex items-center  rounded-md m-2 cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
    //   {/* left */}
    //   <div className="relative h-16 w-16">
    //     <Image src="/cricket1.jpg" layout="fill" className="rounded-lg" />
    //   </div>

    //   {/* right */}
    //   <div>
    //     <h3 className="text-gray-200">{player}</h3>
    //     {/* <h3 className='text-gray-500'>{category}</h3> */}
    //   </div>
    // </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src="/cricket1.jpg" layout="fill" className='rounded-xl'/>
        </div>
        <div className="">
            <h3 className="text-2xl mt-3">{player}</h3>
            <h3 className="text-xl mt-2">{category}</h3>
        </div>
    </div>
  );
}

export default Players;
