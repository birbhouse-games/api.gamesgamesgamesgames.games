// Module imports
import { Route } from '@trezy-studios/koa-api'





// Local imports
import { type KoaContext } from '../../../typedefs/KoaContext'
import { supabase } from '../../../helpers/supabase'





export const route = new Route({
	async handler(context: KoaContext) {
		const { session } = context.atproto

		await Promise.all([
			supabase
				.from('ATproto Sessions')
				.delete()
				.eq('id', session.did),

			supabase
				.from('ATproto Session Tokens')
				.delete()
				.eq('did', session.did),

			session.signOut(),
		])
	},
	methods: ['get'],
	path: '/v1/auth/logout',
})
