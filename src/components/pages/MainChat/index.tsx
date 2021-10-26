import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../molecules/NavBar'
import ChatWindow from '../../organisms/ChatWindow'
import SideBar from '../../organisms/SideBar'
import './styles.scss'

// типо данные с сервера
const mockUsers = [
	{
		id: '1',
		firstName: 'Konstantin',
		lastName: 'Konstantinopolski',
		lastSeen: '11:23',
		history: [
			{
				id: '1',
				senderId: '1',
				data: 'Hey!'
			}
		]
	},
	{
		id: '2',
		firstName: 'Marina',
		lastName: 'Joe',
		lastSeen: '11:23',
		history: [
			{
				id: '1',
				senderId: '2',
				data: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem!'
			},
			{
				id: '2',
				senderId: '3',
				data: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem \
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab \
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \
				accusantium doloremque laudantium, totam re'
			},
			{
				id: '3',
				senderId: '2',
				data: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem \
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab \
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
			},
			{
				id: '4',
				senderId: '3',
				data: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti'
			}
		]
	}
]

// для проверки верстки без пользователей если придет undefined с сервера
const usersundef = undefined

interface ChatID {
	id: string
}

const ChatPage: FC = () => {
	const chatId = useParams<ChatID>()
	const [isUsersListChats, setIsUsersListChats] = useState(false)
	const user = mockUsers.find(user => {
		if (user.id === chatId.id) return user
	})
	useEffect(() => {
		if (Object.keys(mockUsers).length !== 0) setIsUsersListChats(true)
	}, [])

	return (
		<div className='chat-page'>
			<NavBar />
			<div className='chat-page__content'>
				<SideBar usersList={mockUsers} />
				<ChatWindow
					isUsersListChats={isUsersListChats}
					userId={user?.id}
					userFirstName={user?.firstName}
					userLastName={user?.lastName}
					userLastSeen={user?.lastSeen}
					userHistory={user?.history}
				/>
			</div>
		</div>
	)
}

export default ChatPage
