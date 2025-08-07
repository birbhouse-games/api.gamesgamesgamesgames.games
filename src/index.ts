// Module imports
import {
	API,
	loggerMiddleware,
	metricsMiddleware,
	statusCodeGeneratorMiddleware,
} from '@trezy-studios/koa-api'
import compress from 'koa-compress'
import cors from '@koa/cors'
import { koaBody } from 'koa-body'
import noTrailingSlash from 'koa-no-trailing-slash'





// Local imports
import { atprotoAuthMiddleware } from './middleware/atprotoAuthMiddleware'
import { route as atprotoAuthCallbackRoute } from './routes/v1/auth/atproto'
import { route as atprotoAuthRoute } from './routes/v1/auth/atproto/callback'
import { route as clientMetadataRoute } from './routes/v1/atproto/client-metadata'
import { getPort } from './helpers/getPort'
import { handleStart } from './helpers/handleStart'
import { route as healthCheckRoute } from './routes/health'
import { route as jwksRoute } from './routes/v1/atproto/jwks'
import { logger } from './helpers/logger'
import { route as metricsRoute } from './routes/metrics'





// Constants
const port = await getPort(3000, 3999)






// Start the web server
const api = new API({
	logger,
	middleware: [
		metricsMiddleware(),
		noTrailingSlash(),
		compress(),
		loggerMiddleware(logger),
		cors(),
		koaBody(),
		statusCodeGeneratorMiddleware(),
		atprotoAuthMiddleware(),
	],
	onStart: handleStart,
	port,
	routes: [
		atprotoAuthCallbackRoute,
		atprotoAuthRoute,
		clientMetadataRoute,
		healthCheckRoute,
		jwksRoute,
		metricsRoute,
	],
})

api.start()
