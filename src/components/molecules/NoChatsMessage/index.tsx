import React, { FC } from 'react'
import Image from '../../atoms/Image'
import NoChatsIcon from '../../../assets/images/NoChatsIcon.svg'
import './styles.scss'
import HeaderText from '../../atoms/HeaderText'

const NoChatsMessage: FC = () => {
	return (
		<div className='no-chats'>
			<Image sourceImage={NoChatsIcon} className='no-chats__icon' />
			<HeaderText
				valueHeaderText='There is no other users yet'
				className='header-medium'
			/>
		</div>
	)
}

export default NoChatsMessage
