import React, { FC, useState } from 'react'
import Image from '../../atoms/Image'
import ProfileAvatar from '../../../assets/images/ProfileAvatarMale.svg'
import './styles.scss'
import HeaderText from '../../atoms/HeaderText'
import { useHistory } from 'react-router'

interface IUsersListItem {
	userId: string
	userFirstName: string
	userLastName: string
	userLastMessage: string
}

const UsersListItem: FC<IUsersListItem> = ({
	userId,
	userFirstName,
	userLastName,
	userLastMessage
}) => {
	const [isActiveChat, setIsActiveChat] = useState<boolean>(false)
	const className = isActiveChat ? 'users-list-item-active' : 'users-list-item'
	const history = useHistory()

	const handleClick = () => {
		setIsActiveChat(!isActiveChat)
		history.push(`/chat/${userId}`)
	}

	return (
		<div className={className} onClick={handleClick}>
			<Image sourceImage={ProfileAvatar} className='users-list-item__icon' />
			<div className={`${className}__headers`}>
				<HeaderText
					valueHeaderText={`${userFirstName} ${userLastName}`}
					className={`header-bold ${className}__headers__name`}
				/>
				<HeaderText
					valueHeaderText={`${userLastMessage}`}
					className={`header-medium ${className}__headers__msg`}
				/>
			</div>
		</div>
	)
}

export default UsersListItem
