import "./Account.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Account() {
	return (
		<div className="accountContainer">
			<div className="accountIcons">
				<HomeIcon />Home
				<ForumRoundedIcon />DMs
				<NotificationsIcon></NotificationsIcon>Activity
			</div>
			<div className="accountProfile">
				<AddCircleIcon></AddCircleIcon>
				<AccountBoxIcon></AccountBoxIcon>
			</div>
		</div>
		
	)
};
  
export default Account;