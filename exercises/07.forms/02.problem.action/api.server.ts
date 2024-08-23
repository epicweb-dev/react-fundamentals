import { respondWithDataTable } from '#shared/api-utils'

export async function loader({ request }: { request: Request }) {
	const data = new URL(request.url).searchParams
	return respondWithDataTable(data)
}
