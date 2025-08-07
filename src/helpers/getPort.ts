// Module imports
import getRandomPort, {
	portNumbers,
} from 'get-port'





export async function getPort(rangeStart: number, rangeEnd: number) {
	if (process.env.PORT) {
		const fromEnv = Number(process.env.PORT)

		if (isNaN(fromEnv) || fromEnv <= 0) {
			throw new Error(`Invalid port: ${fromEnv}`)
		}

		return fromEnv
	}

	return getRandomPort({ port: portNumbers(rangeStart, rangeEnd) })
}
