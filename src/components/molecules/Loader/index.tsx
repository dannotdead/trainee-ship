import React, { FC } from 'react'
import Image from '../../atoms/Image'
import LoaderIcon from '../../../assets/images/Loader.svg'
import './styles.scss'

const Loader: FC = () => {
	return (
		<div className='loader'>
			<Image sourceImage={LoaderIcon} className='loader__icon' />
		</div>
	)
}

export default Loader
