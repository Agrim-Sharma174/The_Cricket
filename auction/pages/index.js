import Image from "next/image";
import { Inter } from "next/font/google";
import Players from "@/pages/components/Players";

const inter = Inter({ subsets: ["latin"] });



export default function Home({ playersData }) {

  return (
    <div className="bg-gradient-to-r from-[#070A60] to-[#103ED1]  h-[100vh] w-[100vw] p-5 ">
      <div className="">
        <div className="font-extrabold text-4xl flex items-center justify-center text-slate-400">
          AUCTION
        </div>
        <div className="grid grid-cols-2 p-5 items-center m-auto lg:flex lg:justify-evenly lg:mt-10 lg:space-x-5">
          <div
            className="border rounded-lg bg-green-600 p-2 flex items-center justify-center lg:w-full text-lg font-bold  m-1 hover:bg-green-500 text-black transition duration-300 hover:scale-105"
            
          >
            Batsmen
          </div>
          <div className="border rounded-lg bg-green-600 p-2 flex items-center justify-center lg:w-full text-lg font-bold  m-1 hover:bg-green-500 text-black transition duration-300 hover:scale-105">
            Bowlers
          </div>
          <div className="border rounded-lg bg-green-600 p-2 flex items-center justify-center lg:w-full text-lg font-bold  m-1 hover:bg-green-500 text-black transition duration-300 hover:scale-105">
            All-rounders
          </div>
        </div>
      </div>

      <div>
        {playersData?.splice(0,1).map(({id, player, category}) => {
          return (
            <Players key={id} player={player} category={category} />
          )
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/playersData");
  const playersData = await res.json();

  return {
    props: {
      playersData,
    },
  };
}
