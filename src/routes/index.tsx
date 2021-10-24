import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../components/pages/Login'
import ChatPage from '../components/pages/MainChat'
import { SCREENS } from './endpoints'

const Routes: FC = () => {
	return (
		<Switch>
			<Route path={SCREENS.SCREEN_LOGIN} exact>
				<Login />
			</Route>
			<Route path={SCREENS.SCREEN_CHAT} exact>
				<ChatPage />
			</Route>
			<Redirect to={SCREENS.SCREEN_CHAT} />
		</Switch>
	)
}

export default Routes
