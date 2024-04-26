set -e

npx npm-check-updates --dep prod,dev --upgrade --root --reject react,react-dom
cd epicshop && npx npm-check-updates --dep prod,dev --upgrade --root react,react-dom
cd ..
rm -rf node_modules package-lock.json ./epicshop/package-lock.json ./epicshop/node_modules ./exercises/**/node_modules
npm install
npm run setup
npm run typecheck
npm run lint --fix
