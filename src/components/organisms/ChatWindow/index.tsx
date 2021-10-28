import React, { FC, useEffect, useState } from 'react'
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
	// демонстрация лоадера
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	})

	return (
		<div className='chat-window'>
			<Image sourceImage={ChatBackground} className='chat-window__background' />
			{isLoading && <Loader />}
			{isUsersListChats && userId && !isLoading ? (
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
			) : isUsersListChats && !isLoading ? (
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
