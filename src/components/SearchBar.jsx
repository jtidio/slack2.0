import "./SearchBar.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
      <div className="SearchBar">
        <AccessTimeIcon/>
        <input type="text" placeholder="Search Slack "></input>
        <SearchIcon/>
        <HelpOutlineIcon/>
      </div>
    )
  };
  
  export default SearchBar;