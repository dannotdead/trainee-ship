import React, { FC } from 'react'
import './styles.scss'

interface IHeaderText {
	valueHeaderText: string
	className?: string
}

const HeaderText: FC<IHeaderText> = ({ valueHeaderText, className = '' }) => {
	return <span className={className}>{valueHeaderText}</span>
}

export default HeaderText
