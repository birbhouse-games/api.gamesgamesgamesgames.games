// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../typedefs/KoaContext'
import { verifyAuthMiddleware } from '../../../middleware/verifyAuthMiddleware'





export const route = new Route({
	async handler(context: KoaContext) {
		const { agent } = context.atproto

		let did: string

		if (context.query.handle) {
			const handle = Array.isArray(context.query.handle) ? context.query.handle[0] : context.query.handle

			const { data } = await agent.com.atproto.identity.resolveHandle({ handle })

			did = data.did
		} else if (context.query.did) {
			did = Array.isArray(context.query.did) ? context.query.did[0] : context.query.did
		} else {
			did = agent.assertDid
		}

		const { data } = await agent.com.atproto.repo.listRecords({
			repo: agent.assertDid,
			collection: 'games.gamesgamesgamesgames.game.listing',
		})

		context.data = data.records
	},
	methods: ['get'],
	middlewares: [
		bodyBuilderMiddleware(),
		verifyAuthMiddleware(),
	],
	path: '/v1/atproto/games',
})
