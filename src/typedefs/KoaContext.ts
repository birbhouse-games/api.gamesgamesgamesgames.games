// Module imports
import {
	type OAuthSession,
	type NodeOAuthClient,
} from '@atproto/oauth-client-node'
import { type Agent } from '@atproto/api'
import { type Context } from 'koa'





export type KoaContext = Context & {
	atproto: {
		agent?: Agent
		client: NodeOAuthClient
		session?: OAuthSession
	}
}
