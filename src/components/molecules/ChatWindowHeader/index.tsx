import React, { FC } from 'react'
import HeaderText from '../../atoms/HeaderText'
import './styles.scss'

interface IChatWindowHeader {
	userFirstName?: string
	userLastName?: string
	userLastSeen?: string
	className: string
}

const ChatWindowHeader: FC<IChatWindowHeader> = ({
	userFirstName,
	userLastName,
	userLastSeen,
	className
}) => {
	return (
		<div className={className}>
			<HeaderText
				valueHeaderText={`${userFirstName} ${userLastName}`}
				className='header-bold chat-window__header__first-name'
			/>
			<HeaderText
				valueHeaderText={`Last seen ${userLastSeen}`}
				className='header-medium chat-window__header__last-name'
			/>
		</div>
	)
}

export default ChatWindowHeader
