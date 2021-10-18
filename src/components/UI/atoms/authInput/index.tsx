import React, { FC } from 'react'
import './styles.scss'

interface IInput {
	placeholder: string
	className?: string
}

const Input: FC<IInput> = ({ placeholder, className }) => {
	return <input className={`input ${className}`} placeholder={placeholder} />
}

export default Input
