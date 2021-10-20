import React, { ChangeEvent, FC } from 'react'
import AuthErrorIcon from '../authErrorIcon'
import './styles.scss'

interface IInput {
	placeholder: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	isValid: boolean
	className?: string
}

const Input: FC<IInput> = ({ placeholder, onChange, className = '', isValid }) => {
	return (
		<>
			<input className={`input ${className}`} placeholder={placeholder} onChange={onChange} />
			{!isValid && <AuthErrorIcon />}
		</>
	)
}

export default Input
