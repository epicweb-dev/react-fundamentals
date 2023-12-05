npx npm-check-updates --dep prod,dev --upgrade --workspaces --root
rm -rf node_modules package-lock.json ./exercises/**/node_modules
npm install
node setup.js
npm run typecheck
npm run lint --fix
