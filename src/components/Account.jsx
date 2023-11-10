import "./Account.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useData } from '../Context/StoredData';
import {useNavigate} from 'react-router-dom';

function Account() {
	const {handleLogout} = useData();
	const navigate = useNavigate();
	
	function logout(){
		handleLogout()
		console.log("successful logout")
		navigate("/")
	}
	return (
		<div className="accountContainer">
			<div className="accountIcons">
				<HomeIcon />Home
				<ForumRoundedIcon />DMs
				<NotificationsIcon></NotificationsIcon>Activity
			</div>
			<div className="accountProfile">
				<AddCircleIcon></AddCircleIcon>
				<AccountBoxIcon onClick={logout}></AccountBoxIcon>
			</div>
		</div>
		
	)
};
  
export default Account;