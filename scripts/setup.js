var path = require('path')
var pkg = require(path.join(process.cwd(), 'package.json'))

// if you install it then this should be require('workshop-setup')
// but that... doesn't really make sense.
require('./workshop-setup')
  .setup(pkg.engines)
  .then(
    () => {
      console.log(`💯  You're all set up! 👏`)
    },
    error => {
      console.error(`🚨  There was a problem:`)
      console.error(error)
      console.error(
        `\nIf you would like to just ignore this error, then feel free to do so and install dependencies as you normally would in "${process.cwd()}". Just know that things may not work properly if you do...`,
      )
    },
  )
