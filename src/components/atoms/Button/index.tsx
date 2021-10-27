import React, { FC } from 'react'
import './styles.scss'

interface IButton {
	buttonName: string
	disabled?: boolean
	className?: string
	onClick?: () => void
}

const Button: FC<IButton> = ({ buttonName, disabled, className, onClick }) => {
	return (
		<button className={className} disabled={disabled} onClick={onClick}>
			{buttonName}
		</button>
	)
}

export default Button
