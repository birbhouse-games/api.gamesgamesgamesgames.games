// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../../typedefs/KoaContext'
import { supabase } from '../../../../helpers/supabase'





export const route = new Route({
	async handler(context: KoaContext) {
		const {
			atproto,
			query,
		} = context

		const { session } = await atproto.client.callback(new URLSearchParams(query))

		const result = await supabase
			.from('ATproto Session Tokens')
			.insert({ did: session.did })
			.select('token')

		context.redirect(`${process.env.PUBLIC_CLIENT_REDIRECT_URL}/dashboard#token=${encodeURIComponent(result.data[0].token)}`)
	},
	methods: ['get'],
	middlewares: [bodyBuilderMiddleware()],
	path: '/v1/auth/atproto/callback',
})
