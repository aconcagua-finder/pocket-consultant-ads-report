# 🚀 Деплой на GitHub Pages

## Пошаговая инструкция

### 1. Создание репозитория
```bash
# Инициализация Git репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "🎉 Initial commit: Pocket Consultant ads report

- Интерактивный отчет по рекламным кампаниям
- Период: 3-15 июля 2025
- Chart.js графики с анимациями
- Полная адаптивность для всех устройств
- Детальная аналитика по группам, демографии и географии"

# Создание главной ветки
git branch -M main

# Подключение к GitHub репозиторию
git remote add origin https://github.com/username/pocket-consultant-ads-report.git

# Пуш в репозиторий
git push -u origin main
```

### 2. Настройка GitHub Pages

1. Перейдите в **Settings** вашего репозитория
2. Прокрутите вниз до секции **Pages**
3. В **Source** выберите **Deploy from a branch**
4. Выберите ветку **main** и папку **/ (root)**
5. Нажмите **Save**

### 3. Готово!

Ваш сайт будет доступен по адресу:
```
https://username.github.io/pocket-consultant-ads-report/
```

## 📝 Рекомендуемое название репозитория

```
pocket-consultant-ads-report
```

## 🏷️ Теги для GitHub

```
advertising-analytics
dashboard
chart-js
data-visualization
responsive-design
html-css-javascript
ads-report
pocket-consultant
```

## 📋 Описание для GitHub

```
📊 Интерактивный отчет по эффективности рекламных кампаний Pocket Consultant (3-15 июля 2025). 
Детальная аналитика с Chart.js графиками, демографическими данными и рекомендациями по оптимизации ROI.
```

## 🔄 Обновление контента

Для обновления отчета:
```bash
# Внесите изменения в файлы
git add .
git commit -m "📊 Update report data"
git push origin main
```

Изменения автоматически появятся на GitHub Pages в течение нескольких минут.