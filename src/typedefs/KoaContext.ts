// Module imports
import {
	type NodeOAuthClient,
	type Session,
} from '@atproto/oauth-client-node'
import { type Agent } from '@atproto/api'
import { type Context } from 'koa'





export type KoaContext = Context & {
	atproto: {
		agent: Agent | undefined
		client: NodeOAuthClient
		session: Session | undefined
	}
}
