import React from 'react';
import "./AddChannel.css";
import { useState } from 'react';

function AddChannel({}) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='addformContainer'>
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

export default AddChannel;