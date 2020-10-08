try {
  // var spawnSync = require('child_process').spawnSync
  const {username} = require('os').userInfo()
  const {repository} = require('../package.json')

  const remote = process.env.HUSKY_GIT_PARAMS.split(' ')[1]
  const repoName = repository.match(/(?:.(?!\/))+\.git$/)[0]
  if (username !== 'kentcdodds' && remote.includes(`kentcdodds${repoName}`)) {
    console.log(
      `You're trying to push to Kent's repo directly. If you want to save and push your work or even make a contribution to the workshop material, you'll need to fork the repo first and push changes to your fork. Learn how here: https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo`,
    )
  }
  process.exit(1)
} catch (error) {
  // ignore
}
