// Module imports
import { Route } from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../typedefs/KoaContext'





export const route = new Route({
	handler(context: KoaContext) {
		const { atproto } = context

		context.body = atproto.client.keyset
	},
	path: '/v1/atproto/jwks.json',
})
