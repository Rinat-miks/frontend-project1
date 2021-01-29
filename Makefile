install: #установка
		npm install

brain-games: #запуск
		node bin/brain-games.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .