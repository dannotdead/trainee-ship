import React, { FC } from 'react'
import Button from '../../atoms/authButton'
import AuthLabelGroup from '../../molecules/authLabelGroup'
import './styles.scss'

const AuthForm: FC = () => {
	return (
		<div className="auth-form">
			<AuthLabelGroup
				valueLabel="User name"
				placeholderInput="Input user name"
				classNameInput="auth-form__input"
			/>
			<AuthLabelGroup valueLabel="Password" placeholderInput="Input password" />
			<Button value="Log In" className="auth-form__button" />
		</div>
	)
}

export default AuthForm
