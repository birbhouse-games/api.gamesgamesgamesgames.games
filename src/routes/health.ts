// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'





export const route = new Route({
	handler(context) {
		context.data = {
			status: 'healthy',
		}
	},
	middlewares: [bodyBuilderMiddleware()],
	path: '/health',
})
