import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import HeaderText from '../../atoms/HeaderText'
import './styles.scss'
import FileInMessage from '../FileInMessage'

interface IChatWindowHistory {
	className: string
	userHistory?: Array<TypeHistory>
}

interface TypeHistory {
	id: string
	senderId: string
	data: string
	file?: Array<TypeFile>
}

interface TypeFile {
	fileId: string
	fileName: string
	fileSize: string
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
					<div key={message.id} className={`${className}__foreign-msg`}>
						{message.file?.map(file => (
							<FileInMessage
								key={file.fileId}
								fileName={file.fileName}
								fileSize={file.fileSize}
								className={`${className}__foreign-msg`}
							/>
						))}
						<HeaderText
							valueHeaderText={message.data}
							className='header-regular'
						/>
					</div>
				) : (
					<div key={message.id} className={`${className}__mine-msg`}>
						{message.file?.map(file => (
							<FileInMessage
								key={file.fileId}
								fileName={file.fileName}
								fileSize={file.fileSize}
								className={`${className}__mine-msg`}
							/>
						))}
						<HeaderText
							valueHeaderText={message.data}
							className='header-regular'
						/>
					</div>
				)
			)}
		</div>
	)
}

export default ChatWindowHistory
