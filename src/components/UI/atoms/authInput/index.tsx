import React, { ChangeEvent, FC } from 'react'
import './styles.scss'

interface IInput {
	placeholder: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	className?: string
}

const Input: FC<IInput> = ({ placeholder, onChange, className = '' }) => {
	return <input className={`input ${className}`} placeholder={placeholder} onChange={onChange} />
}

export default Input
