import "./Account.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

function Account() {
    return (
        <div className="Account">
            <HomeIcon />Home
            <ForumRoundedIcon />DMs
            <NotificationsIcon></NotificationsIcon>Activity
        </div>
      
    )
  };
  
  export default Account;