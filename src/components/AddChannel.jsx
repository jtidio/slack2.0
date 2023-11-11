import React from 'react';
import "./AddChannel.css";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CreateChannelService from "../Services/CreateChannelService";
import { useData } from '../Context/StoredData';


function AddChannel({}) {
  const {userHeaders, user} = useData();
  const [channelList, setChannelList] = useState([]);
  const [channelName, setChannelName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const channelInfo = {
      name: channelName,
      id: "",
      access: userHeaders['access-token'],
      uid: userHeaders.uid,
      expiry: userHeaders.expiry,
      client: userHeaders.client
    }

    async function newChannel(){
      const newChannel = await CreateChannelService.createChannel(channelInfo);
      setChannelList(newChannel);
    }
    newChannel();
  }

  function closeModal() {
    document.getElementById("addchannelModal").style.display = "none";
  };

  return (
    <div id="addchannelModal" className='addformContainer'>
      <div id="closeButton" className='closeButton' onClick={closeModal}>
      <CloseIcon></CloseIcon>
      </div>
      <form onSubmit={handleSubmit} className='addchannelForm'>
        <h1>Add Channel</h1>
        <div>
          <label>Channel Name:</label>
          <input type='text' id='channelname' onChange={(event) => setChannelName(event.target.value)}></input>
        </div>
        <button type='submit'>Add Channel</button>
      </form>
    </div>
  )
}

export default AddChannel