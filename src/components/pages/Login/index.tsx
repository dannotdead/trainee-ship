import React, { FC } from 'react'
import AuthForm from '../../organisms/authForm'
import './styles.scss'

const Login: FC = () => {
	return (
		<div className='login-page'>
			<AuthForm />
		</div>
	)
}

export default Login
