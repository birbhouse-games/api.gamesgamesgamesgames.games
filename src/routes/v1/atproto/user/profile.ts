// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../../typedefs/KoaContext'





export const route = new Route({
	async handler(context: KoaContext) {
		const { agent } = context.atproto

		const { data } = await agent.com.atproto.repo.getRecord({
			repo: agent.assertDid,
			collection: 'app.bsky.actor.profile',
			rkey: 'self',
		})

		context.data = data.value
	},
	methods: ['get'],
	middlewares: [bodyBuilderMiddleware()],
	path: '/v1/atproto/user/profile',
})
