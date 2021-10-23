import React, { FC } from 'react'
import './styles.scss'

interface ILabel {
	valueLabel: string
	className?: string
}

const Label: FC<ILabel> = ({ valueLabel, className }) => {
	return <label className={`label ${className}`}>{valueLabel}</label>
}

export default Label
