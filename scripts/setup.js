var spawnSync = require('child_process').spawnSync

var styles = {
  blue: {open: '\u001b[34m', close: '\u001b[39m'},
  dim: {open: '\u001b[2m', close: '\u001b[22m'},
  red: {open: '\u001b[31m', close: '\u001b[39m'},
  green: {open: '\u001b[32m', close: '\u001b[39m'},
}

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close
}

console.log(color('blue', '▶️  Starting workshop setup...'))

var error = spawnSync('npx --version', {shell: true})
  .stderr.toString()
  .trim()
if (error) {
  console.error(
    color(
      'red',
      '🚨  npx is not available on this computer. Please install npm@5.2.0 or greater',
    ),
  )
  throw error
}

var command =
  'npx "https://gist.github.com/kentcdodds/bb452ffe53a5caa3600197e1d8005733" -q'
console.log(color('dim', '      Running the following command: ' + command))

var result = spawnSync(command, {stdio: 'inherit', shell: true})

if (result.status === 0) {
  console.log(color('green', '✅  Workshop setup complete...'))
} else {
  process.exit(result.status)
}

/*
eslint
  no-var: "off",
  "vars-on-top": "off",
*/
