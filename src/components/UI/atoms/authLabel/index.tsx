import React, { FC } from 'react'
import './styles.scss'

interface ILabel {
	value: string
	className?: string
}

const Label: FC<ILabel> = ({ value, className }) => {
	return <label className={`label ${className}`}>{value}</label>
}

export default Label
