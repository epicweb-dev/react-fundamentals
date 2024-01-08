import fs from 'node:fs'
import path from 'node:path'

fs.writeFileSync(
	path.join(process.env.KCDSHOP_PLAYGROUND_DEST_DIR, 'tsconfig.json'),
	JSON.stringify({ extends: '../tsconfig' }, null, 2),
)
fs.rmSync(path.join(process.env.KCDSHOP_PLAYGROUND_DEST_DIR, 'kcdshop'), {
	recursive: true,
	force: true,
})
