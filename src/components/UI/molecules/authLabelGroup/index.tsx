import React, { FC } from 'react'
import Input from '../../atoms/authInput'
import Label from '../../atoms/authLabel'
import './styles.scss'

interface IAuthLabelGroup {
	valueLabel: string
	placeholderInput: string
	classNameInput?: string
}

const AuthLabelGroup: FC<IAuthLabelGroup> = ({ valueLabel, placeholderInput, classNameInput }) => {
	return (
		<div className='auth-group'>
			<Label value={valueLabel} className='auth-group__label' />
			<Input placeholder={placeholderInput} className={`${classNameInput}`} />
		</div>
	)
}

export default AuthLabelGroup
