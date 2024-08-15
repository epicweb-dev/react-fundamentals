import fs from 'node:fs'
import path from 'node:path'

fs.writeFileSync(
	path.join(process.env.EPICSHOP_PLAYGROUND_DEST_DIR, 'tsconfig.json'),
	JSON.stringify({ extends: '../tsconfig' }, null, 2),
)
