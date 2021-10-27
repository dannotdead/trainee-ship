import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import HeaderText from '../../atoms/HeaderText'
import './styles.scss'

interface IChatWindowHistory {
	className: string
	userHistory?: Array<TypeHistory>
}

interface TypeHistory {
	id: string
	senderId: string
	data: string
}
const ChatWindowHistory: FC<IChatWindowHistory> = ({
	className,
	userHistory
}) => {
	const chatId = useParams<{ id: string }>()
	return (
		<div className={className}>
			{userHistory?.map(message =>
				chatId.id === message.senderId ? (
					<div key={message.id} className='chat-window__history__foreign-msg'>
						<HeaderText
							valueHeaderText={message.data}
							className='header-regular'
						/>
						<div className='chat-window__history__foreign-msg__triangle'></div>
					</div>
				) : (
					<div key={message.id} className='chat-window__history__mine-msg'>
						<HeaderText
							valueHeaderText={message.data}
							className='header-regular'
						/>
						<div className='chat-window__history__foreign-msg__triangle'></div>
					</div>
				)
			)}
		</div>
	)
}

export default ChatWindowHistory
