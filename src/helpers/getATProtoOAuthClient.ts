// Module imports
import {
	JoseKey,
	NodeOAuthClient,
	type NodeSavedSession,
	type NodeSavedState,
	type Jwk,
} from '@atproto/oauth-client-node'
import { supabase } from './supabase'





// Constants
const STATE: Record<string, NodeSavedState> = {}





// Variables
let atprotoOAuthClient: NodeOAuthClient





export async function getATProtoOAuthClient() {
	if (!atprotoOAuthClient) {
		atprotoOAuthClient = new NodeOAuthClient({
			clientMetadata: {
				application_type: 'web',
				client_id: `${process.env.PUBLIC_API_URL}/v1/atproto/client-metadata.json`,
				client_name: 'ATproto Deckbuilder (by Birbhouse Games)',
				client_uri: process.env.PUBLIC_API_URL,
				dpop_bound_access_tokens: true,
				grant_types: [
					'authorization_code',
					'refresh_token',
				],
				jwks_uri: `${process.env.PUBLIC_API_URL}/v1/atproto/jwks.json`,
				// logo_uri: '',
				// policy_uri: '',
				redirect_uris: [`${process.env.PUBLIC_API_URL}/v1/auth/atproto/callback`],
				response_types: ['code'],
				scope: 'atproto transition:generic transition:email',
				token_endpoint_auth_method: 'private_key_jwt',
				token_endpoint_auth_signing_alg: 'ES256',
				// tos_uri: '',
			},

			keyset: await Promise.all([
				JoseKey.fromImportable({
					alg: process.env.JWK_ALG,
					crv: process.env.JWK_CRV,
					d: process.env.JWK_D,
					kid: process.env.JWK_KID,
					kty: process.env.JWK_KTY,
					use: process.env.JWK_USE,
					x: process.env.JWK_X,
					y: process.env.JWK_Y,
				} as Jwk),
			]),

			stateStore: {
				async set(key, value): Promise<void> {
					STATE[key] = value
				},

				async get(key): Promise<NodeSavedState | undefined> {
					return STATE[key]
				},

				async del(key): Promise<void> {
					delete STATE[key]
				},
			},

			sessionStore: {
				async set(sub: string, session: NodeSavedSession): Promise<void> {
					supabase.auth.getUser()
					// create or update the session
					// use sub as AccountId field
				},

				async get(sub: string): Promise</*NodeSavedSession | */undefined> {
					// retrieve the session
					// search for AccountId=sub
					return undefined
				},

				async del(sub: string): Promise<void> {
					// delete the session
					// use AccountsId=sub for criteria
				},
			},
		})
	}

	return atprotoOAuthClient
}
