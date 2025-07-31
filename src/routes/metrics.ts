// Local imports
import { register } from 'prom-client'
import { Route } from '@trezy-studios/koa-api'





export const route = new Route({
	async handler(context) {
		const metrics = await register.metrics()

		context.headers['Content-Type'] = register.contentType
		context.body = metrics
	},
	middlewares: [],
	path: '/metrics',
})
