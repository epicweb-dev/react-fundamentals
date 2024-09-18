import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { setupInBrowserTests } from '@epic-web/workshop-utils/playwright.server'

const __dirname = dirname(fileURLToPath(import.meta.url))
process.env.EPICSHOP_CONTEXT_CWD = resolve(__dirname, '..')

setupInBrowserTests()
