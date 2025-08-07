// Module imports
import { type Middleware } from 'koa'





// Local imports
import { type KoaContext } from '../typedefs/KoaContext'





export function verifyAuthMiddleware(): Middleware {
	return async(context: KoaContext, next) => {
		if (!context.atproto.session) {
			context.errors.push('User is not authenticated.')
			context.status = 401
			return
		}

		await next()
	}
}
