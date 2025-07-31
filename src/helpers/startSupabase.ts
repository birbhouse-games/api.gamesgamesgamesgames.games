// Local imports
// import { handleApplicationCreated } from './handleApplicationCreated'
// import { handleKeyClaimCreated } from './handleKeyClaimCreated'
// import { handleKeyCreated } from './handleKeyCreated'
import { logger } from './logger'
import { supabase } from './supabase'





export function startSupabase() {
	supabase
		.channel('api')
		.subscribe()

	logger.log('info', 'Subscribed to Supabase!')
}
