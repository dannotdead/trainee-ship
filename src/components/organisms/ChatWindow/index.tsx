import React, { FC } from 'react'
import Image from '../../atoms/Image'
import ChatBackground from '../../../assets/images/ChatBackground.svg'
import './styles.scss'
// import Loader from '../../molecules/Loader'

const ChatWindow: FC = () => {
	return (
		<div className='chat-window'>
			<Image sourceImage={ChatBackground} className='chat-window__background' />
			{/* <Loader /> */}
		</div>
	)
}

export default ChatWindow
