// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'
import { type KoaContext } from '../../../../typedefs/KoaContext'





export const route = new Route({
	async handler(context: KoaContext) {
		const {
			atproto,
			query,
		} = context

		if (!query.handle) {
			context.errors.push('handle is a required parameter')
		}

		if (context.errors.length) {
			return
		}

		const redirectURL = await atproto.client.authorize(context.query['handle'] as string)
		context.redirect(redirectURL.toString())
	},
	methods: ['get'],
	middlewares: [bodyBuilderMiddleware()],
	path: '/v1/auth/atproto',
})
