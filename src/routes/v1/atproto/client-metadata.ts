// Module imports
import { Route } from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../typedefs/KoaContext'





export const route = new Route({
	handler(context: KoaContext) {
		const { atproto } = context

		context.body = atproto.client.clientMetadata
	},
	path: '/v1/atproto/client-metadata.json',
})
