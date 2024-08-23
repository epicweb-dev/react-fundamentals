import { respondWithDataTable } from '#shared/api-utils'

// 🐨 change this from `loader` to `action`
export async function loader({ request }: { request: Request }) {
	// 🐨 change data to be `await request.formData()`
	const data = new URL(request.url).searchParams
	return respondWithDataTable(data)
}
