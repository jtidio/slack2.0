import "./Chat.css";
import { useState, useEffect } from "react";
import React from "react";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import AddLinkIcon from '@mui/icons-material/AddLink';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import SendMessageService from "../Services/SendMessageService";
import RetrieveMessageService from "../Services/RetrieveMessageService";
import { useData } from '../Context/StoredData';

function Chat({ chatTitle }) {
	const [messageList, setMessageList] = useState([]);
	const [oldMessageList, setOldMessageList] = useState([]);
	const [message, setMessage] = useState("");
	const {userHeaders, user, isMsgsLoaded, setIsMsgsLoaded} = useData();
	const [value, setValue] = useState("");


	function handleSendMessage(event) {
		event.preventDefault();
		setMessage("");
		setIsMsgsLoaded(false)
		const msgInfo = {
		  id: 4005,
		  body: message,
		  access: userHeaders['access-token'],
		  uid: userHeaders.uid,
		  expiry: userHeaders.expiry,
		  client: userHeaders.client
		}
	
		async function newMessages(){
		  const newMsgs = await SendMessageService.sendMessage(msgInfo);
		  setMessageList(newMsgs);
		}
		newMessages();
		
		console.log("Sent Message!")
	  }

	  const oldMsgInfo = {
		id: 4005,
		access: userHeaders['access-token'],
		uid: userHeaders.uid,
		expiry: userHeaders.expiry,
		client: userHeaders.client
	  }
	  useEffect(() => {
		// Apply getUsers function from UserService here
		async function fetchMessages(){
			const oldMessages = await RetrieveMessageService.getMessages(oldMsgInfo);
			setOldMessageList(oldMessages);
		}
		if(!isMsgsLoaded){
		fetchMessages();
		setIsMsgsLoaded(true)
		console.log("Successful retrieval")
		}
	})

return (
  <div className="Chat">
    <div className="chattitleBar">
			<div className="titleElements">
				<span id="chatTitle">{chatTitle}</span>
				<span>2 members</span>
			</div>
		</div>
		<div className="chatArea">
			<div className="chatDisplay">
				<span>Chat Area</span>
				{/* <span>{user}</span> */}
				{
                oldMessageList && 
                oldMessageList.map((msgs) => {
                    return (
					<div key={msgs.id}>
						<div>{msgs.sender.uid}</div>
						<span>{msgs.body}</span>
                      </div>
                    )
                })
            }
            {!oldMessageList && <div>No Messages Yet!</div>}
			</div>
			<div className="chatInput">
				<div className="formattingIcons">
					<FormatBoldIcon></FormatBoldIcon>
					<FormatItalicIcon></FormatItalicIcon>
					<StrikethroughSIcon></StrikethroughSIcon>
					<span className="separator">|</span>
					<AddLinkIcon></AddLinkIcon>
					<span className="separator">|</span>
					<FormatListNumberedIcon></FormatListNumberedIcon>
					<FormatListBulletedIcon></FormatListBulletedIcon>
					<span className="separator">|</span>
					<CodeIcon></CodeIcon>
					<TerminalIcon></TerminalIcon>
				</div>
				<div className="chattextArea">
					<form onSubmit={handleSendMessage} className='addchannelForm'>
					<textarea value = {message} placeholder="Text here" onChange={(event) => setMessage(event.target.value)}></textarea>
					<button type='submit'>Send</button>
					</form>
				</div>
				<div className="chatFunctions">
					<AddCircleIcon></AddCircleIcon>
					<TextFormatIcon></TextFormatIcon>
					<EmojiEmotionsIcon></EmojiEmotionsIcon>
					<AlternateEmailIcon></AlternateEmailIcon>
					<span className="separator">|</span>
					<VideocamIcon></VideocamIcon>
					<MicIcon></MicIcon>
				</div>
			</div>
		</div>
  </div>
)
};
  
export default Chat;