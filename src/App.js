import React, { useState } from "react";
import "./App.css";
import { MdOutlineHomeWork, MdOutlineInbox } from "react-icons/md";

import { BsCaretDownFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RAW } from "./rawData";
import Sidebar from "./components/Sidebar";
import BigBox from "./components/BigBox";
import SideBox from "./components/SideBox";

const App = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [teams, setTeams] = useState(RAW[0].teams);
  const user = RAW[0].current_user;

  const handleTabs = (tab) => {
    setActiveTab(tab);
    if (tab === "Favorites") {
      setTeams(RAW[0].teams.filter((team) => team.is_favorited));
    } else if (tab === "Archived") {
      setTeams(RAW[0].teams.filter((team) => team.is_archived));
    } else {
      setTeams(RAW[0].teams);
    }
  };

  return (
    <div className="wrap">
      <Sidebar />
      <main className="main">
        <div className="topbar">
          <div className="top">NARWHAL</div>
          <div className="line"></div>
          <div className="top two">Teams</div>

          <div className="top-end">
            <div className="top-end-item">
              <MdOutlineInbox className="n-icon" />
              <span className="notif-qty">{user.notifications_count}</span>
            </div>
            <div className="top-end-item greeting">Hello, {user.name}</div>
            <div className="top-end-item pp">
              <img src={user.avatar} alt={user.name} className="profile-img" />
            </div>
            <div className="top-end-item">
              <BsCaretDownFill />
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="row2">
          <div className="row2-item">
            <MdOutlineHomeWork /> <p>Teams</p>
          </div>
          <div className="row2-item">
            <button>
              <span>+</span> CREATE NEW TEAM
            </button>
          </div>
        </div>
        <div className="tabs">
          <div className="row3">
            {["All", "Favorites", "Archived"].map((tab, index) => (
              <div
                className={`row3-item ${activeTab === tab ? "tab-active" : ""}`}
                key={index}
                onClick={() => handleTabs(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="search">
            <BiSearch />{" "}
            <input type="text" placeholder="Search team name ..." />
          </div>
        </div>

        <div className="box">
          <BigBox teams={teams}></BigBox>
          <SideBox />
        </div>
      </main>
    </div>
  );
};

export default App;
