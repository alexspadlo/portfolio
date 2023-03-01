import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute: FC= ({ component: Component, restricted, ...rest }: any) => (
	<Route
		{...rest}
		render={(props: any) => (
			restricted
				? <Redirect to="/" />
				: <Component {...rest} {...props} />
		)}
	/>
)

export default PublicRoute
