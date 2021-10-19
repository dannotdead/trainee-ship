import React, { FC, useState } from 'react'
import Button from '../../atoms/authButton'
import AuthLabelGroup from '../../molecules/authLabelGroup'
import './styles.scss'

const AuthForm: FC = () => {
	const [userNameInput, setUserNameInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')

	const onChangeUserName = (state: string) => {
		setUserNameInput(state)
	}

	const onChangePassword = (state: string) => {
		setPasswordInput(state)
	}

	return (
		<div className='auth-form'>
			<AuthLabelGroup
				valueLabel='User name'
				placeholderInput='Input user name'
				classNameInput='auth-form__input'
				onChange={onChangeUserName}
			/>
			<AuthLabelGroup
				valueLabel='Password'
				placeholderInput='Input password'
				onChange={onChangePassword}
			/>
			<Button value='Log In' className='auth-form__button' />
		</div>
	)
}

export default AuthForm
