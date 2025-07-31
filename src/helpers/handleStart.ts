// Module imports
import type Application from 'koa'
import { collectDefaultMetrics } from 'prom-client'





// Local imports
import { startSupabase } from './startSupabase'





/**
 * Starts metrics collection.
 */
export async function handleStart(api: Application) {
	collectDefaultMetrics({ prefix: process.env.METRICS_PREFIX })

	startSupabase()
}
