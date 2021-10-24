import React, { FC } from 'react'
import NavBar from '../../molecules/NavBar'
import ChatWindow from '../../organisms/ChatWindow'
import SideBar from '../../organisms/SideBar'
import './styles.scss'

const ChatPage: FC = () => {
	return (
		<div className='chat-page'>
			<NavBar />
			<div className='chat-page__content'>
				<SideBar />
				<ChatWindow />
			</div>
		</div>
	)
}

export default ChatPage
