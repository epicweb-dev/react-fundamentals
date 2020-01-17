const path = require('path')
const fs = require('fs')
const glob = require('glob')

const exerciseInfo = glob
  .sync('./src/exercises*/[0-9][0-9]*.js')
  .reduce((acc, filePath) => {
    const contents = String(fs.readFileSync(filePath))
    const {dir, name} = path.parse(filePath)
    const parentDir = path.basename(dir)
    const id = name.split('-')[0]
    const number = Number(id)
    const previous = String(number - 1).padStart(2, '0')
    const next = String(number + 1).padStart(2, '0')
    const isExercise = parentDir === 'exercises'
    const isExtraCredit = name.includes('-extra')
    const isFinal = !isExercise && !isExtraCredit
    const [firstLine, secondLine] = contents.split('\n')
    const title = firstLine.replace(/\/\//, '').trim()
    const extraCreditTitle = secondLine.replace(/\/\/ 💯/, '').trim()
    const extraCreditNumber = (name.match(/-extra.(\d+)/) || [])[1]

    acc[id] = acc[id] || {}

    Object.assign(
      acc[id],
      isExercise
        ? {
            title,
            exercise: {
              previous,
              next,
              isolatedPath: `/isolated/exercises/${name}`,
            },
          }
        : null,
      isFinal
        ? {
            final: {
              previous,
              next,
              isolatedPath: `/isolated/exercises-final/${name}`,
            },
          }
        : null,
      isExtraCredit
        ? {
            extraCreditTitles: {
              ...acc[id].extraCreditTitles,
              [extraCreditNumber]: extraCreditTitle,
            },
          }
        : null,
    )
    return acc
  }, {})

// get rid of next and previous which don't exist
for (const infoKey in exerciseInfo) {
  const info = exerciseInfo[infoKey]
  if (!exerciseInfo[info.exercise.previous]) {
    delete info.exercise.previous
  }
  if (!exerciseInfo[info.exercise.next]) {
    delete info.exercise.next
  }
  if (!exerciseInfo[info.final.previous]) {
    delete info.final.previous
  }
  if (!exerciseInfo[info.final.next]) {
    delete info.final.next
  }
}

module.exports = exerciseInfo
