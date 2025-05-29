# coffecart.taqc.js.cypress
# coffecart.taqc.js
🛠️ 🔁 Інструкція: Підготовка JS-проєкту після клонування
✅ 1. Встановити Node.js (якщо ще не встановлений)
Перевірити, чи встановлено Node.js:
node -v
npm -v
Якщо немає — завантажити з:
🔗 https://nodejs.org/

🔧 Рекомендується остання LTS версія (довгострокова підтримка).

✅ 2. Клонувати репозиторій

git clone https://github.com/користувач/назва-проекту.git
cd назва-проекту
✅ 3. Встановити залежності з package.json

npm install
Це створить/оновить node_modules/ і підтягне все, що потрібно для запуску/збірки проекту.

✅ 4. (Опціонально) Створити .env файл з налаштуваннями середовища
Якщо в проєкті використовується .env.example або README.md містить перелік змінних — створити .env:

cp .env.example .env
Потім відредагувати файл і додати свої значення.

✅ 5. Запустити всі тести з графічним інтерфейсом
npx cypress open
-> choose E2E Testing
-> choose a browser
-> press "Start E2E Testing in <browser>"

✅ 6. Запустити всі тести 
npx cypress run

