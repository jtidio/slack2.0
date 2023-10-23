import Chat from "./Chat";
import SideBar from "./SideBar";
import Account from "./Account";
import SearchBar from "./SearchBar";
import "./DashBoard.css";
import React from 'react';
import AddChannel from "./AddChannel";


function Dashboard() {
  return (
    <div className="main">
      <SearchBar></SearchBar>
      <div className="user">
        <Account></Account>
        <SideBar></SideBar>
        <Chat></Chat>
      </div>
      {/* <AddChannel></AddChannel> */}
    </div>
  )
};

export default Dashboard;