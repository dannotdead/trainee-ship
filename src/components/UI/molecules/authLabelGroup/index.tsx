import React, { FC } from 'react'
import Input from '../../atoms/authInput'
import Label from '../../atoms/authLabel'
import './styles.scss'

interface IAuthLabelGroup {
	valueLabel: string
	placeholderInput: string
	onChange: (state: string) => void
	classNameInput?: string
}

const AuthLabelGroup: FC<IAuthLabelGroup> = ({
	valueLabel,
	placeholderInput,
	classNameInput,
	onChange
}) => {
	return (
		<div className='auth-group'>
			<Label value={valueLabel} className='auth-group__label' />
			<Input placeholder={placeholderInput} className={classNameInput} onChange={onChange} />
		</div>
	)
}

export default AuthLabelGroup
