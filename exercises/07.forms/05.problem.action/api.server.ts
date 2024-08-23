import { respondWithDataTable } from '#shared/api-utils'

export async function action({ request }: { request: Request }) {
	const data = await request.formData()
	return respondWithDataTable(data)
}
