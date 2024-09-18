import os from 'os'
import path from 'path'
import { defineConfig, devices } from '@playwright/test'

const PORT = process.env.PORT || '5639'
const tmpDir = path.join(
	os.tmpdir(),
	'epicshop-playwright',
	path.basename(new URL('../', import.meta.url).pathname),
)

export default defineConfig({
	outputDir: path.join(tmpDir, 'playwright-test-output'),
	reporter: [
		[
			'html',
			{ open: 'never', outputFolder: path.join(tmpDir, 'playwright-report') },
		],
	],
	use: {
		baseURL: `http://localhost:${PORT}/`,
		trace: 'retain-on-failure',
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],

	webServer: {
		command: 'cd .. && npm start',
		port: Number(PORT),
		reuseExistingServer: !process.env.CI,
		stdout: 'pipe',
		stderr: 'pipe',
		env: { PORT },
	},
})
