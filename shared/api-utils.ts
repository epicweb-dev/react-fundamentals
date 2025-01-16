const MAX_FILE_SIZE = 1024 * 1024

export async function respondWithDataTable(data: URLSearchParams | FormData) {
	const cellStyle = 'border: 1px solid black; padding: 6px;'
	const headerCellStyle = `${cellStyle} border-bottom-width: 2px;`

	async function stringifyValue(value: string | File) {
		// this would be value instanceof File except the global File was not added until Node 20.
		// feel free to update this when we drop Node 18 support after April 2025.
		if (
			typeof value === 'object' &&
			'size' in value &&
			'arrayBuffer' in value &&
			'type' in value &&
			'name' in value
		) {
			if (value.size > MAX_FILE_SIZE) {
				throw new Response(`File larger than ${MAX_FILE_SIZE} bytes`, {
					status: 400,
				})
			}
			const base64 = btoa(
				new Uint8Array(await value.arrayBuffer()).reduce(
					(data, byte) => data + String.fromCharCode(byte),
					'',
				),
			)
			return `<img alt=${value.name} src="data:${value.type};base64,${base64}" style="max-width: 100px; max-height: 100px;"/>`
		}
		return value
	}

	let tableOfSearchParams = ``
	for (const [key, value] of Array.from(data)) {
		tableOfSearchParams += `
		<tr>
			<td style="${cellStyle}">${key}</td>
			<td style="${cellStyle}">${await stringifyValue(value)}</td>
		</tr>
		`.trim()
	}
	const headerRow = `
		<tr>
			<th style="${headerCellStyle}">Key</th>
			<th style="${headerCellStyle}">Value</th>
		</tr>
	`
	const htmlResponse = `You submitted the following data:
		<table style="margin-top:10px;border-collapse: collapse">
			${headerRow}
			${tableOfSearchParams}
		</table>
	`
	return new Response(htmlResponse, {
		headers: { 'content-type': 'text/html' },
	})
}
