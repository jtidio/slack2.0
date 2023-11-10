import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./Profile.css";

function Profile() {


  return (
    <div className='profileContainer'>
      <div id="closeButton" className='closeButton'>
      <CloseIcon></CloseIcon>
      </div>
    </div>
  )
}

export default Profile