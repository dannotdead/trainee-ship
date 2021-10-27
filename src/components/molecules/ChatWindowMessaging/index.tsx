import React, { FC, useState, ChangeEvent } from 'react'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import './styles.scss'

const ChatWindowMessaging: FC = () => {
	const [sendMessageInput, setSendMessageInput] = useState<string>('')

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setSendMessageInput(event.target.value)
	}
	console.log(sendMessageInput)

	return (
		<div className='chat-window-messaging'>
			<Button buttonName='' className='chat-window-messaging__button-file' />
			<Input
				valueInput={sendMessageInput}
				placeholder='Write something...'
				onChange={handleChangeInput}
				isValid={true}
				className='header-medium chat-window-messaging__input'
			/>
			<Button
				buttonName=''
				className='chat-window-messaging__button-send-msg'
			/>
		</div>
	)
}

export default ChatWindowMessaging
