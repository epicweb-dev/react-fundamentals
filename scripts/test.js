// This should run by node without any dependencies
// because you may need to run it without deps.

import fs from 'fs'
import path from 'node:path'
import { spawn } from 'child_process'
import {
	getApps,
	isExampleApp,
	isSolutionApp,
} from '@kentcdodds/workshop-app/apps.server'

const styles = {
	// got these from playing around with what I found from:
	// https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
	// they're the best I could find that works well for light or dark terminals
	success: { open: '\u001b[32;1m', close: '\u001b[0m' },
	danger: { open: '\u001b[31;1m', close: '\u001b[0m' },
	info: { open: '\u001b[36;1m', close: '\u001b[0m' },
	subtitle: { open: '\u001b[2;1m', close: '\u001b[0m' },
}
function color(modifier, string) {
	return styles[modifier].open + string + styles[modifier].close
}

const __dirname = new URL('.', import.meta.url).pathname
const here = (...p) => path.join(__dirname, ...p)

const workshopRoot = here('..')

const relativeToWorkshopRoot = dir =>
	dir.replace(`${workshopRoot}${path.sep}`, '')

// bundleMDX - throw when process.NODE_ENV is not a string
// @kentcdodds/workshop-app/build/utils/compile-mdx.server
process.env.NODE_ENV = 'development'

const apps = await getApps()
const solutionApps = apps.filter(isSolutionApp)
const exampleApps = apps.filter(isExampleApp)

let exitCode = 0

for (const app of [...solutionApps, ...exampleApps]) {
	if (app.test.type !== 'script') continue

	const relativePath = relativeToWorkshopRoot(app.fullPath)

	console.log(`🧪  Running "${app.test.script}" in ${relativePath}`)

	const cp = spawn('npm', ['run', app.test.script, '--silent'], {
		cwd: app.fullPath,
		stdio: 'inherit',
		shell: true,
		windowsHide: false,
		env: {
			OPEN_PLAYWRIGHT_REPORT: 'never',
			...process.env,
			PORT: app.dev.portNumber,
		},
	})

	await new Promise(res => {
		cp.on('exit', code => {
			if (code === 0) {
				console.log(color('success', `✅  Tests passed (${relativePath})`))
			} else {
				exitCode = 1
				console.error(color('danger', `❌  Tests failed (${relativePath})`))
			}
			res()
		})
	})
}

process.exit(exitCode)
