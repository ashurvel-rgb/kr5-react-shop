# Контрольная работа №5 — React SPA интернет-магазина

Выбран React-вариант. Тема работы: компонентный SPA-интерфейс интернет-магазина, маршрутизация, каталог, форма и подготовка к backend API.

## Запуск

```bash
npm install
npm run dev
```

Локальный адрес Vite: `http://localhost:5173/`.

## Структура

- `public/products.json` — тестовые данные.
- `src/api/productsApi.js` — функции `getProducts()` и `getProductById()`.
- `src/components` — Header, CatalogControls, ProductCard, ProductList, FormField.
- `src/pages` — HomePage, CatalogPage, ProductPage, OrderPage, CartPage, NotFoundPage.
- `src/utils` — фильтрация, сортировка и валидация.

## Маршруты

- `/` — главная;
- `/catalog` — каталог;
- `/catalog/:productId` — страница товара;
- `/order` — форма заявки;
- `/cart` — базовая страница корзины;
- `*` — страница 404.

Каталог поддерживает поиск, фильтрацию, сортировку, пустое состояние и количество результатов. Форма является контролируемой и выводит ошибки на страницу. API-слой загружает JSON через `fetch` и обрабатывает загрузку, ошибку и повторный запрос.

GitHub Pages: https://ashurvel-rgb.github.io/kr5-react-shop/

Автор: Велиханов Ашурбег Мадрудинович, группа ЭФБО-17-25.
