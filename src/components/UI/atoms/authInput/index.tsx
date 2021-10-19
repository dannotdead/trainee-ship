import React, { FC } from 'react'
import './styles.scss'

interface IInput {
	placeholder: string
	onChange: (state: string) => void
	className?: string
}

const Input: FC<IInput> = ({ placeholder, onChange, className = '' }) => {
	return (
		<input
			className={`input ${className}`}
			placeholder={placeholder}
			onChange={event => onChange(event.target.value)}
		/>
	)
}

export default Input
