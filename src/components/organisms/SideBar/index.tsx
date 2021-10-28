import React, { FC } from 'react'
import './styles.scss'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import UsersListItem from '../../molecules/UsersListItem'

interface ISideBar {
	usersList?: Array<Type>
}

interface Type {
	id: string
	firstName: string
	lastName: string
	lastSeen: string
	history: Array<TypeHistory>
}

interface TypeHistory {
	id: string
	senderId: string
	data: string
}

const SideBar: FC<ISideBar> = ({ usersList }) => {
	return (
		<div className='side-bar'>
			{usersList ? (
				usersList.map(item => (
					<UsersListItem
						key={item.id}
						userId={item.id}
						userFirstName={item.firstName}
						userLastName={item.lastName}
						userLastMessage={
							item.history[item.history.length - 1].senderId === item.id
								? item.history[item.history.length - 1].data
								: `${item.history[item.history.length - 1].data}`
						}
						userSenderId={item.history[item.history.length - 1].senderId}
					/>
				))
			) : (
				<NoChatsMessage />
			)}
		</div>
	)
}

export default SideBar
