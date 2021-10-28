import React, { FC } from 'react'
import HeaderText from '../../atoms/HeaderText'
import Image from '../../atoms/Image'
import FileIcon from '../../../assets/images/FileIcon.svg'
import './styles.scss'

interface IFileInMessage {
	fileName: string
	fileSize: string
	className: string
}

const FileInMessage: FC<IFileInMessage> = ({
	className,
	fileName,
	fileSize
}) => {
	return (
		<div className={`${className}__file`}>
			<Image sourceImage={FileIcon} className={`${className}__file__icon`} />
			<div className={`${className}__file__headers`}>
				<HeaderText
					valueHeaderText={fileName}
					className={`header-semi-bold \
								${className}__file__headers__title`}
				/>
				<HeaderText
					valueHeaderText={fileSize}
					className={`header-regular \
								${className}__file__headers__size`}
				/>
			</div>
		</div>
	)
}

export default FileInMessage
