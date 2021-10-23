import React, { FC } from 'react'
import './styles.scss'

interface IButton {
	buttonName: string
	disabled?: boolean
	className?: string
}

const Button: FC<IButton> = ({ buttonName, disabled, className }) => {
	return (
		<button className={`button ${className}`} disabled={disabled}>
			{buttonName}
		</button>
	)
}

export default Button
