const {spawnSync} = require('child_process')
const inquirer = require('inquirer')
const glob = require('glob')

async function go() {
  const files = glob
    .sync('src/+(exercise|final)/*.+(js|ts|tsx)', {
      ignore: ['*.d.ts'],
    })
    .map(f => f.replace(/^src\//, ''))
  const {first} = await inquirer.prompt([
    {
      name: 'first',
      message: `What's the first file`,
      type: 'list',
      choices: files,
    },
  ])
  const {second} = await inquirer.prompt([
    {
      name: 'second',
      message: `What's the second file`,
      type: 'list',
      choices: files.filter(f => f !== first),
    },
  ])

  spawnSync(`git diff --no-index ./src/${first} ./src/${second}`, {
    shell: true,
    stdio: 'inherit',
  })
}

go()
