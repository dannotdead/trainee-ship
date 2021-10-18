import React, { FC } from 'react'
import './styles.scss'

interface IButton {
	value: string
	disabled?: boolean
	className?: string
}

const Button: FC<IButton> = ({ value, disabled, className }) => {
	return (
		<button className={`btn ${className}`} disabled={disabled}>
			{value}
		</button>
	)
}

export default Button
