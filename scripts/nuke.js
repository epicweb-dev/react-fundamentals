import path from 'node:path'
import fs from 'fs'

const nodeModulesDir = path.join(process.cwd(), 'node_modules')
const pkgLock = path.join(process.cwd(), 'package-lock.json')
console.log(`💥 deleting ${nodeModulesDir} and lockfile`)
await fs.promises.rm(nodeModulesDir, { recursive: true }).catch(() => {})
await fs.promises.rm(pkgLock).catch(() => {})
