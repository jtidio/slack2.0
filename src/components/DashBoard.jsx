import Chat from "./Chat";
import SideBar from "./SideBar";
import Account from "./Account";
import SearchBar from "./SearchBar";
import "./DashBoard.css";


function Dashboard() {
  return (
    <div className="main">
      <SearchBar></SearchBar>
      <div className="user">
        <Account></Account>
        <SideBar></SideBar>
        <Chat></Chat>
      </div>
    </div>
  )
};

export default Dashboard;