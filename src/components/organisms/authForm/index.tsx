import React, { ChangeEvent, FC, useState } from 'react'
import Button from '../../atoms/Button'
import Image from '../../atoms/Image'
import AuthLabelGroup from '../../molecules/authLabelGroup'
import WelcomeHeader from '../../molecules/authWelcomeHeader'
import MainLogo from '../../../assets/images/MainAppIcon.svg'
import './styles.scss'
import { useHistory } from 'react-router'

const AuthForm: FC = () => {
	const [userNameInput, setUserNameInput] = useState<string>('')
	const [passwordInput, setPasswordInput] = useState<string>('')

	const [isValidUserName, setIsValidUserName] = useState<boolean>(true)
	const [isValidPassword, setIsValidPassword] = useState<boolean>(true)

	const [errorMsgUserName, setErrorMsgUserName] = useState<string>('')
	const [errorMsgPassword, setErrorMsgPassword] = useState<string>('')

	const history = useHistory()

	const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
		validationUserName()
		setUserNameInput(event.target.value)
	}

	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		validationPassword()
		setPasswordInput(event.target.value)
	}

	const validationUserName = () => {
		if (userNameInput.length < 2) {
			setIsValidUserName(false)
			setErrorMsgUserName('Something goes wrong')
			return false
		} else {
			setIsValidUserName(true)
			return true
		}
	}

	const validationPassword = () => {
		if (passwordInput.length < 2) {
			setIsValidPassword(false)
			setErrorMsgPassword('Something goes wrong in password')
			return false
		} else {
			setIsValidPassword(true)
			return true
		}
	}

	const handleClickLogInButton = () => {
		validationUserName()
		validationPassword()
		if (validationUserName() && validationPassword()) history.push('/chat')
	}

	return (
		<div className='auth-form'>
			<Image sourceImage={MainLogo} className={'auth-form__logo'} />
			<WelcomeHeader />
			<AuthLabelGroup
				valueLabel='User name'
				placeholderInput='Input user name'
				classNameInput={!isValidUserName ? 'auth-form__input-error' : ''}
				valueInput={userNameInput}
				onChange={onChangeUserName}
				isValid={isValidUserName}
				valueLabelError={errorMsgUserName}
			/>
			<AuthLabelGroup
				valueLabel='Password'
				placeholderInput='Input password'
				classNameInput={!isValidPassword ? 'auth-form__input-error' : ''}
				valueInput={passwordInput}
				onChange={onChangePassword}
				isValid={isValidPassword}
				valueLabelError={errorMsgPassword}
			/>
			<Button
				buttonName='Log In'
				className='button auth-form__button'
				onClick={handleClickLogInButton}
			/>
		</div>
	)
}

export default AuthForm
