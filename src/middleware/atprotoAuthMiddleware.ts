// Module imports
import { Middleware } from 'koa'





// Local imports
import { getATProtoOAuthClient } from '../helpers/getATProtoOAuthClient'
import { Agent } from '@atproto/api'





export function atprotoAuthMiddleware(): Middleware {
	return async(context, next) => {
		const { cookies } = context

		context.atproto = {}

		const client = await getATProtoOAuthClient()

		const atprotoDID = cookies.get('atprotoDID')

		if (atprotoDID) {
			const session = await client.restore(atprotoDID)
			const agent = new Agent(session)

			context.atproto.agent = agent
			context.atproto.session = session
		}

		context.atproto.client = client

		await next()
	}
}
