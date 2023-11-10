import Chat from "./Chat";
import SideBar from "./SideBar";
import Account from "./Account";
import SearchBar from "./SearchBar";
import "./DashBoardUI.css";
import React from 'react';
import AddChannel from "./AddChannel";
import { useState } from "react";
import Profile from "./Profile";


function DashboardUI() {

  const [chatTitle, setChatTitle] = useState("Chat Title");


  return (
    <div className="main">
      <SearchBar></SearchBar>
      <div className="user">
        <Account></Account>
        <SideBar setChatTitle={setChatTitle}></SideBar>
        <Chat chatTitle={chatTitle}></Chat>
      </div>
      <AddChannel></AddChannel>
      {/* <Profile></Profile> */}
    </div>
  )
};

export default DashboardUI;