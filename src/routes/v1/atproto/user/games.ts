// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../../typedefs/KoaContext'
import { verifyAuthMiddleware } from '../../../../middleware/verifyAuthMiddleware'





export const route = new Route({
	async handler(context: KoaContext) {
		const { agent } = context.atproto

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
	path: '/v1/atproto/user/games',
})
