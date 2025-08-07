// Module imports
import { Middleware } from 'koa'





// Local imports
import { Agent } from '@atproto/api'
import { getATProtoOAuthClient } from '../helpers/getATProtoOAuthClient'
import { getDIDForToken } from '../helpers/getDIDForToken'





export function atprotoAuthMiddleware(): Middleware {
	return async(context, next) => {
		const token = context.request.headers['authorization']?.replace(/^Bearer /u, '')

		context.atproto = {}

		const client = await getATProtoOAuthClient()

		if (token) {
			const userDID = await getDIDForToken(token)
			const session = await client.restore(userDID)
			const agent = new Agent(session)

			context.atproto.agent = agent
			context.atproto.session = session
		}

		context.atproto.client = client

		await next()
	}
}
