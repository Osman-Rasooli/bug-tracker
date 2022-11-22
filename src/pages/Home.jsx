import React from "react";
import { RiSuitcaseFill } from "react-icons/ri";
import { BsPersonBadgeFill, BsCalendar2DateFill } from "react-icons/bs";
import { AiTwotoneBug } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <header>
        <p className="px-12 py-6 border-t-1 text-xl font-bold tracking-wider text-gray-500">
          Home
        </p>
      </header>
      <main>
        <div className="overview px-10 flex flex-wrap gap-8">
          <div className="home-card card1 rounded-md p-5 flex-1 h-22 relative bg-red-400">
            <span className=" text-3xl font-bold">10</span>
            <p>Active Projects</p>
            <RiSuitcaseFill className="absolute text-5xl -rotate-12 top-6 right-6" />
          </div>
          <div className="home-card card2 rounded-md p-5 flex-1 h-22 relative bg-red-300">
            <span className=" text-3xl font-bold">25</span>
            <p>Working Developer</p>
            <BsPersonBadgeFill className="absolute text-5xl -rotate-12 top-6 right-6" />
          </div>
          <div className="home-card card3 rounded-md p-5 flex-1 h-22 relative bg-red-200">
            <span className=" text-3xl font-bold">108</span>
            <p>
              Open <abbr title="Bugs, Issues, Improvements">Tickets</abbr>
            </p>
            <AiTwotoneBug className="absolute text-5xl -rotate-12 top-6 right-6" />
          </div>
          <div className="home-card card4 rounded-md p-5 flex-1 h-22 relative bg-red-800">
            <span className=" text-3xl font-bold">35</span>
            <p>Due in 1 Month</p>
            <BsCalendar2DateFill className="absolute text-5xl -rotate-12 top-6 right-6" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
