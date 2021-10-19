import React, { FC } from 'react'
import HeaderText from '../../atoms/headerText'
import './styles.scss'

const WelcomeHeader: FC = () => {
	return (
		<div className='welcome-header'>
			<div className='welcome-header__item1'>
				<HeaderText value='Welcome to ' className='header-extra-bold' fontSize='42px' />
				<HeaderText
					value='Chatty'
					className='header-extra-bold'
					fontSize='42px'
					textColor='#5E93E7'
				/>
				{/* eslint-disable-next-line max-len */}
				<HeaderText value='!' className='header-extra-bold' fontSize='42px' textColor='#B3CDF8' />
			</div>
			<div className='welcome-header__item2'>
				{/* eslint-disable-next-line max-len */}
				<HeaderText value='Please, authorize yourself' className='header-bold' fontSize='27px' />
			</div>
		</div>
	)
}

export default WelcomeHeader
