import React, { FC } from 'react'
import './styles.scss'
import NoChatsMessage from '../../molecules/NoChatsMessage'

const SideBar: FC = () => {
	return (
		<div className='side-bar'>
			<NoChatsMessage />
		</div>
	)
}

export default SideBar
