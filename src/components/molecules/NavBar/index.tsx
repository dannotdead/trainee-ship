import React, { FC } from 'react'
import Image from '../../atoms/Image'
import Logo from '../../../assets/images/MainAppIcon.svg'
import './styles.scss'
import Button from '../../atoms/Button'

const NavBar: FC = () => {
	return (
		<div className='nav-bar'>
			<Image sourceImage={Logo} className='nav-bar__logo' />
			<Button buttonName='' className='nav-bar__profile-icon' />
		</div>
	)
}

export default NavBar
