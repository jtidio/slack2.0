import React from 'react';
import "./AddChannel.css";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CreateChannelService from "../Services/ChannelService";
import { useData } from '../Context/StoredData';


function AddChannel({}) {
  const {userHeaders} = useData();
  const [channelList, setChannelList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    async function newChannel(){
      const newChannel = await CreateChannelService.createChannel(userHeaders);
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
          <input type='text' id='channelname'></input>
        </div>
        <button type='submit'>Add Channel</button>
      </form>
    </div>
  )
}

export default AddChannel