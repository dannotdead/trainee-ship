import React, { FC } from 'react'
import './styles.scss'

interface IHeaderText {
	value: string
	fontSize: string
	textColor?: string
	className?: string
}

const HeaderText: FC<IHeaderText> = ({ value, fontSize, className = '', textColor = '' }) => {
	return (
		<span className={className} style={{ fontSize: fontSize, color: textColor }}>
			{value}
		</span>
	)
}

export default HeaderText
