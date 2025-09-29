# 🍸 Cocktail App

Приложение для поиска и просмотра коктейлей, построенное на **Vue 3 + TypeScript + Vite**.  
Данные берутся из [TheCocktailDB API](https://www.thecocktaildb.com/).  

Превью можно посмотреть [тут](https://dj-cocktail.netlify.app/)

## 🚀 Стек технологий

- ⚡ [Vite](https://vitejs.dev/) — сборщик
- 🖖 [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- 🏷 [TypeScript](https://www.typescriptlang.org/) — строгая типизация
- 📦 [Pinia](https://pinia.vuejs.org/) — менеджер состояния
- 🌐 [Axios](https://axios-http.com/) — запросы к API
- 🎨 [SCSS](https://sass-lang.com/) — стили + переменные/миксины
- 📏 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — линтинг и форматирование
- 🧪 [Vitest](https://vitest.dev/) — тестирование

## 📂 Архитектура проекта

src/\
├── api/ # Логика API (axios instance + эндпоинты)\
├── assets/ # Стили, шрифты, картинки\
├── components/ # Переиспользуемые UI-компоненты\
├── composables/ # Кастомные хуки (useFetch, useWindowSize и др.)\
├── features/ # Фичи (Navigation, CocktailCard и т.д.)\
├── layouts/ # Общие шаблоны страниц (MainLayout и др.)\
├── pages/ # Страницы (CocktailPage, NotFoundPage и др.)\
├── router/ # Vue Router\
├── stores/ # Pinia store (CocktailStore)\
├── utils/ # Утилиты (pickValuesByKey и др.)\
└── main.ts # Точка входа\

## ⚙️ Установка и запуск

```bash
# Установить зависимости
npm install

# Запуск в dev-режиме
npm run dev

# Сборка проекта
npm run build

# Локальный предпросмотр сборки
npm run preview

🧹 Скрипты для разработки
npm run lint      # проверка eslint
npm run format    # prettier форматирование
npm run test      # запуск vitest

🌍 Переменные окружения

Создай .env файл:

VITE_API_BASE_URL=https://www.thecocktaildb.com/api/json/v1/1
VITE_API_TIMEOUT=5000

🚦 Git hooks

В проекте используется [Husky](https://typicode.github.io/husky/) для автоматизации Git-хуков.

- **pre-commit** — запускает `eslint --fix` и `prettier --write`, чтобы код был в едином стиле.

### Установка Git hooks
После клонирования репозитория нужно активировать husky:

```bash
npm run prepare
