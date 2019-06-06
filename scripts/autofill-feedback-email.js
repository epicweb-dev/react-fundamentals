/* eslint no-console:0 */
const path = require('path')
const inquirer = require('inquirer')
const replace = require('replace-in-file')
const isCI = require('is-ci')
const spawn = require('cross-spawn')

if (isCI) {
  console.log(`Not running autofill feedback as we're on CI`)
} else {
  const prompt = inquirer.prompt([
    {
      name: 'email',
      message: `what's your email address?`,
      validate(val) {
        if (!val) {
          // they don't want to do this...
          return true
        } else if (!val.includes('@')) {
          return 'email requires an @ sign...'
        }
        return true
      },
    },
  ])
  const timeoutId = setTimeout(() => {
    console.log(
      `\n\nprompt timed out. No worries. Run \`node ./scripts/autofill-feedback-email.js\` if you'd like to try again`,
    )
    prompt.ui.close()
  }, 15000)

  prompt.then(({email} = {}) => {
    clearTimeout(timeoutId)
    if (!email) {
      console.log(`Not autofilling email because none was provided`)
      return
    }
    const options = {
      files: [path.join(__dirname, '..', 'src/**/*.js')],
      from: /&em=\r?\n/,
      to: `&em=${email}\n`,
    }

    replace(options).then(
      changedFiles => {
        console.log(`Updated ${changedFiles.length} with the email ${email}`)
        console.log(
          'committing changes for you so your jest watch mode works nicely',
        )
        spawn.sync('git', ['commit', '-am', 'email autofill', '--no-verify'], {
          stdio: 'inherit',
        })
      },
      error => {
        console.error('Failed to update files')
        console.error(error.stack)
      },
    )
  })
}
