import React, { FC, useState } from 'react'
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
				data: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem!',
				file: []
			},
			{
				id: '2',
				senderId: '34534',
				data: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem \
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab \
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \
				accusantium doloremque laudantium, totam re',
				file: []
			},
			{
				id: '3',
				senderId: '2',
				data: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem \
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab \
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				file: []
			},
			{
				id: '4',
				senderId: '34534',
				data: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
				file: []
			}
		]
	},
	{
		id: '3',
		firstName: 'Ernest',
		lastName: 'Gillroy',
		lastSeen: '11:23',
		history: [
			{
				id: '1',
				senderId: '34534',
				data: 'How are you doing?',
				file: []
			}
		]
	},
	{
		id: '4',
		firstName: 'Check',
		lastName: 'File',
		lastSeen: '11:23',
		history: [
			{
				id: '1',
				senderId: '34534',
				data: '',
				file: [
					{
						fileId: '1',
						fileName: 'File_for_exampl0011232555234.doc',
						fileSize: '4.2 MB'
					}
				]
			}
		]
	}
]

// для проверки верстки без пользователей если придет undefined с сервера
const usersundef = undefined

const ChatPage: FC = () => {
	const chatId = useParams<{ id: string }>()
	// для проверки верстки с пустым списком пользователей этот стейт на false
	// и в sidebar передать usersundef
	const [isUsersListChats, setIsUsersListChats] = useState(true)

	const user = mockUsers.find(user => {
		if (user.id === chatId.id) return user
	})

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
