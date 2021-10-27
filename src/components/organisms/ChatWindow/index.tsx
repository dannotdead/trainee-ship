import React, { FC } from 'react'
import Image from '../../atoms/Image'
import ChatBackground from '../../../assets/images/ChatBackground.svg'
import './styles.scss'
import HeaderText from '../../atoms/HeaderText'
import Loader from '../../molecules/Loader'
import ChatWindowHeader from '../../molecules/ChatWindowHeader'
import ChatWindowHistory from '../../molecules/ChatWindowHistory'
import ChatWindowMessaging from '../../molecules/ChatWindowMessaging'

interface IChatWindow {
	isUsersListChats: boolean
	userId?: string
	userFirstName?: string
	userLastName?: string
	userLastSeen?: string
	userHistory?: Array<TypeHistory>
}

interface TypeHistory {
	id: string
	senderId: string
	data: string
}

const ChatWindow: FC<IChatWindow> = ({
	isUsersListChats,
	userId,
	userFirstName,
	userLastName,
	userLastSeen,
	userHistory
}) => {
	return (
		<div className='chat-window'>
			<Image sourceImage={ChatBackground} className='chat-window__background' />
			{/* <Loader /> */}
			{isUsersListChats && userId ? (
				<>
					<ChatWindowHeader
						userFirstName={userFirstName}
						userLastName={userLastName}
						userLastSeen={userLastSeen}
						className='chat-window__header'
					/>
					<ChatWindowHistory
						className='chat-window__history'
						userHistory={userHistory}
					/>
					<ChatWindowMessaging />
				</>
			) : isUsersListChats ? (
				<HeaderText
					valueHeaderText='Select a chat to start messaging'
					className='header-medium chat-window__select-header'
				/>
			) : (
				<HeaderText valueHeaderText='' />
			)}
		</div>
	)
}

export default ChatWindow
