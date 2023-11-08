import "./Chat.css";
import { useState } from "react";
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


function Chat({ chatTitle }) {

	function strikeThrough() {
		console.log('Click')
	}

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
			</div>
			<div className="chatInput">
				<div className="formattingIcons">
					<FormatBoldIcon></FormatBoldIcon>
					<FormatItalicIcon></FormatItalicIcon>
					<StrikethroughSIcon onClick={strikeThrough}></StrikethroughSIcon>
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
					<textarea placeholder="Text here"></textarea>
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