// Module imports
import {
	bodyBuilderMiddleware,
	Route,
} from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../../typedefs/KoaContext'
import { supabase } from '../../../../helpers/supabase'
import { Agent } from '@atproto/api'





export const route = new Route({
	async handler(context: KoaContext) {
		const {
			atproto,
			query,
		} = context

		const { session } = await atproto.client.callback(new URLSearchParams(query))

		context.cookies.set('atprotoDID', session.did)

		console.log(session)

		// const {
		// 	data,
		// 	error,
		// } = await supabase.auth.signUp({
		// 	email: session.email,
		// 	password: 'example-password',
		// })

		context.redirect(process.env.PUBLIC_CLIENT_REDIRECT_URL)
	},
	methods: ['get'],
	middlewares: [bodyBuilderMiddleware()],
	path: '/v1/auth/atproto/callback',
})
