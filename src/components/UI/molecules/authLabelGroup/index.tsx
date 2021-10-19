import React, { ChangeEvent, FC } from 'react'
import Input from '../../atoms/authInput'
import Label from '../../atoms/authLabel'
import './styles.scss'

interface IAuthLabelGroup {
	valueLabel: string
	placeholderInput: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	isValid: boolean
	valueLabelError?: string
	classNameInput?: string
}

const AuthLabelGroup: FC<IAuthLabelGroup> = ({
	valueLabel,
	placeholderInput,
	classNameInput,
	onChange,
	isValid,
	valueLabelError = ''
}) => {
	return (
		<div className='auth-group'>
			<Label value={valueLabel} className='auth-group__label' />
			<Input placeholder={placeholderInput} className={classNameInput} onChange={onChange} />
			{!isValid && <Label value={valueLabelError} className='auth-group__label-error' />}
		</div>
	)
}

export default AuthLabelGroup
