import fs from 'node:fs'
import path from 'node:path'

const exclude = [
	'exercises/01.',
	'exercises/02.',
	'exercises/03.',
	'exercises/04.',
]

if (exclude.every(e => !process.env.EPICSHOP_PLAYGROUND_SRC_DIR.includes(e))) {
	fs.writeFileSync(
		path.join(process.env.EPICSHOP_PLAYGROUND_DEST_DIR, 'tsconfig.json'),
		JSON.stringify({ extends: '../tsconfig' }, null, 2),
	)
}
