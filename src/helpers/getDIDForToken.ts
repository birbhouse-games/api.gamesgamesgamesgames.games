// Local imports
import { supabase } from './supabase'





export async function getDIDForToken(token: string) {
	const { data } = await supabase
		.from('ATproto Session Tokens')
		.select('did')
		.eq('token', token)

	return data[0]?.did
}
