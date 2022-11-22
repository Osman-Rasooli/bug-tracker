import React from "react";
const Home = () => {
  return (
    <div>
      <header>
        <p className="px-8 py-6 border-t-1 text-xl font-bold tracking-wider text-gray-500">
          Home
        </p>
      </header>
      <main>
        <div className="overview">
          <div>
            <span>10</span>
            <p>Active Projects</p>
          </div>
          <div>
            <span>25</span>
            <p>Working Developer</p>
          </div>
          <div>
            <span>108</span>
            <p>Open Bugs</p>
          </div>
          <div>
            <span>150</span>
            <p>Open Issues</p>
          </div>
          <div>
            <span>15</span>
            <p>Open Improvements</p>
          </div>
          <div>
            <span>15</span>
            <p>Due in 1 Month</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
