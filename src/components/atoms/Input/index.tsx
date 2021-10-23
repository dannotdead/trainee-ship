import React, { ChangeEvent, FC } from 'react'
import Image from '../Image'
import ErrorIcon from '../../../assets/images/ErrorInptuIcon.svg'
import './styles.scss'

interface IInput {
	placeholder: string
	valueInput: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	isValid: boolean
	className?: string
}

const Input: FC<IInput> = ({
	placeholder,
	valueInput,
	onChange,
	className = '',
	isValid
}) => {
	return (
		<>
			<input
				className={`input ${className}`}
				placeholder={placeholder}
				onChange={onChange}
				value={valueInput}
			/>
			{!isValid && (
				<Image sourceImage={ErrorIcon} className={'input__error-icon'} />
			)}
		</>
	)
}

export default Input
