#!/bin/bash

# 🚀 Скрипт инициализации Git репозитория для Pocket Consultant Ads Report

echo "🎯 Инициализация Git репозитория..."

# Инициализация Git
git init

# Добавление всех файлов
git add .

# Создание первого коммита
git commit -m "🎉 Initial commit: Pocket Consultant Ads Report

📊 Интерактивный отчет по рекламным кампаниям
📅 Период: 3-15 июля 2025
📈 Ключевые метрики: 25,062₽ бюджет, 90 конверсий, 3.24% CTR

✨ Функциональность:
- Chart.js интерактивные графики
- Детальная аналитика по группам объявлений  
- Демографический и географический анализ
- Статистика по устройствам
- 8 ключевых инсайтов с рекомендациями
- Полная адаптивность для всех устройств
- Современный dark-дизайн с анимациями

🛠 Технологии: HTML5, CSS3, JavaScript, Chart.js, AOS, Montserrat
🎨 Дизайн: В стиле pocket-consultant.ru с градиентами и glass-эффектами"

# Установка основной ветки
git branch -M main

echo "✅ Git репозиторий инициализирован!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Создайте репозиторий на GitHub с названием: pocket-consultant-ads-report"
echo "2. Выполните команду:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/pocket-consultant-ads-report.git"
echo "3. Загрузите код:"
echo "   git push -u origin main"
echo "4. Настройте GitHub Pages в Settings → Pages → Source: main branch"
echo ""
echo "🌐 Ваш сайт будет доступен по адресу:"
echo "   https://YOUR_USERNAME.github.io/pocket-consultant-ads-report/"