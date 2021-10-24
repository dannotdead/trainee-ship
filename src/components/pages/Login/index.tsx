import React, { FC } from 'react'
import AuthForm from '../../organisms/authForm'
import Image from '../../atoms/Image'
import LoginBackground from '../../../assets/images/LoginBackground.svg'
import './styles.scss'

const Login: FC = () => {
	return (
		<div className='login-page'>
			<AuthForm />
			<Image
				sourceImage={LoginBackground}
				className='login-page__background-image'
			/>
		</div>
	)
}

export default Login
