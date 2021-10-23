import React, { FC } from 'react'
import HeaderText from '../../atoms/HeaderText'
import './styles.scss'

const WelcomeHeader: FC = () => {
	return (
		<div className='welcome-header'>
			<div className='welcome-header__item1'>
				<HeaderText
					valueHeaderText='Welcome to '
					className='header-extra-bold'
				/>
				<HeaderText
					valueHeaderText='Chatty'
					className='header-extra-bold header-blue-color'
				/>
				<HeaderText
					valueHeaderText='!'
					className='header-extra-bold header-lightblue-color'
				/>
			</div>
			<div className='welcome-header__item2'>
				<HeaderText
					valueHeaderText='Please, authorize yourself'
					className='header-bold'
				/>
			</div>
		</div>
	)
}

export default WelcomeHeader
