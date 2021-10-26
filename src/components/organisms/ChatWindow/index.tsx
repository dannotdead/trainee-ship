import React, { FC } from 'react'
import Image from '../../atoms/Image'
import ChatBackground from '../../../assets/images/ChatBackground.svg'
import './styles.scss'
import HeaderText from '../../atoms/HeaderText'
import Loader from '../../molecules/Loader'

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
	console.log(userId, isUsersListChats)

	return (
		<div className='chat-window'>
			<Image sourceImage={ChatBackground} className='chat-window__background' />
			{/* <Loader /> */}
			{isUsersListChats && userId ? (
				<HeaderText
					valueHeaderText={`${userFirstName} ${userLastName}`}
					className='header-regular'
				/>
			) : isUsersListChats ? (
				<HeaderText
					valueHeaderText='Select a chat to start messaging'
					className='header-medium chat-window__select-header'
				/>
			) : (
				<HeaderText valueHeaderText='' />
			)}
			{/* {userId ? (
				<HeaderText
					valueHeaderText={`${userFirstName} ${userLastName}`}
					className='header-regular'
				/>
			) : (
				<HeaderText
					valueHeaderText='Select a chat to start messaging'
					className='header-medium chat-window__select-header'
				/>
			)} */}
		</div>
	)
}

export default ChatWindow
