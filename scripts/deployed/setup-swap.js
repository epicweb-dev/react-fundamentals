#!/usr/bin/env node

import { $ } from 'execa'
import { writeFile, stat } from 'node:fs/promises'

const swapExists = await stat('/swapfile').catch(() => false)

console.log('setting up swapfile...')

if (swapExists) {
	console.log('swapfile already exists')
} else {
	await $`fallocate -l 128M /swapfile`
	await $`chmod 0600 /swapfile`
	await $`mkswap /swapfile`
	await writeFile('/proc/sys/vm/swappiness', '10')
	await $`swapon /swapfile`
	await writeFile('/proc/sys/vm/overcommit_memory', '1')
	console.log('swapfile setup complete')
}
