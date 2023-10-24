import "./SideBar.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddChannel from "./AddChannel";
import Chat from "./Chat";
import PersonIcon from '@mui/icons-material/Person';

function SideBar({ setChatTitle }) {
 
  const showChannel = (channelName) => {
    setChatTitle(channelName);
  };

  function channelAnimation() {
    if(document.getElementById('channelArrow').getAttribute("check") === "false") {
      document.getElementById('channelArrow').children[0].style.transform = `rotate(90deg)`;
      document.getElementById('channelArrow').setAttribute("check", "true");
      document.getElementById('showChannel').style.display = "flex";
    } else {
      document.getElementById('channelArrow').children[0].style.transform = `rotate(0deg)`;
      document.getElementById('channelArrow').setAttribute("check", "false");
      document.getElementById('showChannel').style.display = "none";
    }
  };

  function dmAnimation() {
    if(document.getElementById('dmArrow').getAttribute("check") === "false") {
      document.getElementById('dmArrow').children[0].style.transform = `rotate(90deg)`;
      document.getElementById('dmArrow').setAttribute("check", "true");
      document.getElementById('showDm').style.display = "flex";

    } else {
      document.getElementById('dmArrow').children[0].style.transform = `rotate(0deg)`;
      document.getElementById('dmArrow').setAttribute("check", "false");
      document.getElementById('showDm').style.display = "none";
    }
  };

  function showaddChannel() {
    document.getElementById("addchannelModal").style.display = "flex";
  };
  
  return (
    <div className="sidebarContainer">
      <div className="sidebarelemContainer">
        <div className="sidebarInnercont">
          <div id="channelArrow" className="sidebarElements" onClick={channelAnimation} check="false">
            <ArrowRightIcon></ArrowRightIcon><span>Channels</span>
          </div>
          <div id="showChannel" className="channelContent">
            <div className="channelName" onClick={() => showChannel("Avion")}>
              <TagIcon></TagIcon><span>Avion</span>
            </div>
            <div className="channelName" onClick={() => showChannel("School")}>
              <TagIcon></TagIcon><span>School</span>
            </div>
            <div id="addchannelButton" className="addChannel" onClick={showaddChannel}>
              <AddIcon></AddIcon><span>Add channels</span>
            </div>
          </div>
        </div>

        <div className="sidebarInnercont">
          <div id="dmArrow" className="sidebarElements" onClick={dmAnimation} check="false">
            <ArrowRightIcon></ArrowRightIcon><span>Direct messages</span>
          </div>
          <div id="showDm" className="dmContent">
            <div className="dmName">
              <PersonIcon></PersonIcon>Lance
            </div>
            <div className="dmName">
            <PersonIcon></PersonIcon>Johnery
            </div>
            <div className="addDm">
              <AddIcon></AddIcon><span>New message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SideBar;