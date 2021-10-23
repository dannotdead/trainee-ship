import React, { FC } from 'react'
import './styles.scss'

interface IImage {
	sourceImage: string
	alternativeText?: string
	className?: string
}

const Image: FC<IImage> = ({
	sourceImage,
	alternativeText = '',
	className = ''
}) => {
	return <img src={sourceImage} alt={alternativeText} className={className} />
}

export default Image
