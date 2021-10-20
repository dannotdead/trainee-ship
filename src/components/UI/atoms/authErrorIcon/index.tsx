import React, { FC } from 'react'
import './styles.scss'

const AuthErrorIcon: FC = () => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='auth-error-icon'
		>
			<path
				// eslint-disable-next-line max-len
				d='M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z'
				stroke='#FB6262'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 6H10.01'
				stroke='#FB6262'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9 10H10V14H11'
				stroke='#FB6262'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default AuthErrorIcon