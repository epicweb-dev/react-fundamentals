import { spawnSync } from 'child_process'

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

console.log(color('info', '▶️  Starting workshop setup...'))

const output = spawnSync('npm --version', { shell: true })
	.stdout.toString()
	.trim()
const outputParts = output.split('.')
const major = Number(outputParts[0])
const minor = Number(outputParts[1])
if (major < 8 || (major === 8 && minor < 16)) {
	console.error(
		color(
			'danger',
			'🚨  npm version is ' +
				output +
				' which is out of date. Please install npm@8.16.0 or greater',
		),
	)
	throw new Error('npm version is out of date')
}

const command =
	'npx --yes "https://gist.github.com/kentcdodds/bb452ffe53a5caa3600197e1d8005733" -q'
console.log(
	color('subtitle', '      Running the following command: ' + command),
)

const result = spawnSync(command, { stdio: 'inherit', shell: true })

if (result.status === 0) {
	console.log(color('success', '✅  Workshop setup complete...'))
} else {
	process.exit(result.status)
}

/*
eslint
  "no-undef": "off",
  "vars-on-top": "off",
*/
