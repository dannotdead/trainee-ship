import React, { ChangeEvent, FC } from 'react'
import Input from '../../atoms/Input'
import Label from '../../atoms/Label'
import './styles.scss'

interface IAuthLabelGroup {
	valueLabel: string
	placeholderInput: string
	valueInput: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	isValid: boolean
	valueLabelError?: string
	classNameInput?: string
}

const AuthLabelGroup: FC<IAuthLabelGroup> = ({
	valueLabel,
	placeholderInput,
	classNameInput,
	valueInput,
	onChange,
	isValid,
	valueLabelError = ''
}) => {
	return (
		<div className='auth-group'>
			<Label valueLabel={valueLabel} className='auth-group__label' />
			<Input
				placeholder={placeholderInput}
				className={`login-form-input ${classNameInput}`}
				valueInput={valueInput}
				onChange={onChange}
				isValid={isValid}
			/>
			{!isValid && (
				<Label
					valueLabel={valueLabelError}
					className='auth-group__label-error'
				/>
			)}
		</div>
	)
}

export default AuthLabelGroup
