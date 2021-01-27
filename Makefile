install: #установка
		npm install

brain-games: #запуск
		bin/brain-games.js

publish: 
		npm publish --dry-run