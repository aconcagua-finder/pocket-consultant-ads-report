// Initialize AOS animations
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// Set current date
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('ru-RU');

// Chart.js default configuration
Chart.defaults.color = '#ffffff';
Chart.defaults.font.family = 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

// Data for all periods
const periodsData = {
    period1: { // 3-15 июля
        name: '3-15 июля 2025',
        dateRange: '3 - 15 июля 2025',
        stats: {
            budget: 25062,
            conversions: 90,
            ctr: 3.24,
            cpa: 278
        },
        campaigns: {
            labels: ['Мастер-кампания', 'Поиск', 'РСЯ'],
            budget: [18529, 5093, 1440],
            ctr: {
                labels: ['Поиск', 'РСЯ', 'Мастер-кампания'],
                data: [5.61, 1.17, 2.65]
            },
            conversions: [66, 20, 4]
        },
        demographics: {
            gender: {
                labels: ['Женщины', 'Мужчины', 'Неизвестно'],
                data: [59, 35, 6]
            },
            age: {
                labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
                cpa: [328, 207, 314, 366, 298],
                conversions: [14, 26, 13, 6, 7]
            }
        },
        devices: {
            labels: ['Смартфоны', 'Десктопы', 'Планшеты'],
            data: [87, 12, 1]
        },
        regions: [
            { name: 'Дальневосточный ФО', conversions: 9, cpa: 398, budget: 3585, badge: 'Лидер по объему' },
            { name: 'Северо-Западный ФО', conversions: 11, cpa: 204, budget: 2248, badge: 'Лучший CPA' },
            { name: 'Южный ФО', conversions: 6, cpa: 177, budget: 1060, badge: 'Эффективный' },
            { name: 'Центральный ФО', conversions: 10, cpa: 312, budget: 3121 }
        ]
    },
    period2: { // 16 июля - 3 августа
        name: '16 июля - 3 августа 2025',
        dateRange: '16 июля - 3 августа 2025',
        stats: {
            budget: 21542,
            conversions: 100,
            ctr: 3.68,
            cpa: 215
        },
        campaigns: {
            labels: ['МК pocket-consultant', 'ad_poisk_PocketConsult'],
            budget: [18152, 3390],
            ctr: {
                labels: ['ad_poisk_PocketConsult', 'МК pocket-consultant'],
                data: [4.35, 3.32]
            },
            conversions: [90, 10]
        },
        demographics: {
            gender: {
                labels: ['Женщины', 'Мужчины', 'Неизвестно'],
                data: [66, 32, 2]
            },
            age: {
                labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
                cpa: [186, 188, 214, 220, 412],
                conversions: [28, 33, 22, 12, 5]
            }
        },
        devices: {
            labels: ['Смартфоны', 'Десктопы', 'Планшеты'],
            data: [85, 14, 1]
        },
        regions: [
            { name: 'Дальневосточный ФО', conversions: 16, cpa: 203, budget: 3254, badge: 'Лидер по конверсиям' },
            { name: 'Центральный ФО', conversions: 14, cpa: 226, budget: 3168 },
            { name: 'Северо-Западный ФО', conversions: 13, cpa: 193, budget: 2506 },
            { name: 'Приволжский ФО', conversions: 12, cpa: 230, budget: 2762 },
            { name: 'Уральский ФО', conversions: 12, cpa: 139, budget: 1672, badge: 'Лучший CPA' },
            { name: 'Сибирский ФО', conversions: 10, cpa: 198, budget: 1982 },
            { name: 'Южный ФО', conversions: 10, cpa: 151, budget: 1510, badge: 'Эффективный' },
            { name: 'Северо-Кавказский ФО', conversions: 1, cpa: 767, budget: 767, badge: 'Низкая эффективность' },
            { name: 'Республика Крым', conversions: 1, cpa: 427, budget: 427 }
        ]
    },
    periodAll: { // Все время (3 июля - 3 августа)
        name: 'Все время',
        dateRange: '3 июля - 3 августа 2025',
        stats: {
            budget: 46604,
            conversions: 190,
            ctr: 3.46, // среднее
            cpa: 245 // средневзвешенное
        },
        campaigns: {
            labels: ['Мастер-кампании', 'Поиск', 'РСЯ'],
            budget: [36681, 8483, 1440],
            ctr: {
                labels: ['Поиск', 'РСЯ', 'Мастер-кампании'],
                data: [5.10, 1.17, 2.89]
            },
            conversions: [156, 30, 4]
        },
        demographics: {
            gender: {
                labels: ['Женщины', 'Мужчины', 'Неизвестно'],
                data: [63, 33, 4]
            },
            age: {
                labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
                cpa: [232, 179, 235, 261, 321],
                conversions: [42, 59, 35, 18, 12]
            }
        },
        devices: {
            labels: ['Смартфоны', 'Десктопы', 'Планшеты'],
            data: [86, 13, 1]
        },
        regions: [
            { name: 'Дальневосточный ФО', conversions: 25, cpa: 271, budget: 6839, badge: 'Лидер по конверсиям' },
            { name: 'Центральный ФО', conversions: 24, cpa: 268, budget: 6289 },
            { name: 'Северо-Западный ФО', conversions: 24, cpa: 197, budget: 4754, badge: 'Эффективный' },
            { name: 'Приволжский ФО', conversions: 12, cpa: 230, budget: 2762 },
            { name: 'Южный ФО', conversions: 16, cpa: 163, budget: 2570, badge: 'Лучший CPA' },
            { name: 'Уральский ФО', conversions: 12, cpa: 139, budget: 1672 },
            { name: 'Сибирский ФО', conversions: 10, cpa: 198, budget: 1982 },
            { name: 'Северо-Кавказский ФО', conversions: 1, cpa: 767, budget: 767 },
            { name: 'Республика Крым', conversions: 1, cpa: 427, budget: 427 }
        ]
    }
};

// Current active period
let currentPeriod = 'period2'; // По умолчанию показываем 16 июля - 3 августа

// Chart instances storage
let chartInstances = {};

// Common chart options
const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                    size: 12
                }
            }
        }
    },
    scales: {
        x: {
            grid: {
                color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
                color: '#b0b0b0'
            }
        },
        y: {
            grid: {
                color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
                color: '#b0b0b0'
            }
        }
    }
};

// Color palette
const colors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#4ade80',
    warning: '#fbbf24',
    danger: '#f87171',
    info: '#60a5fa'
};

// Gradient function
function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

// Function to update all data based on selected period
function updatePeriodData(periodKey) {
    currentPeriod = periodKey;
    const data = periodsData[periodKey];
    
    // Update active button
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-period') === periodKey) {
            btn.classList.add('active');
        }
    });
    
    // Update hero stats
    document.querySelector('.report-period span').textContent = `Отчетный период: ${data.dateRange}`;
    document.querySelector('.stat-card:nth-child(1) .stat-value').textContent = data.stats.budget.toLocaleString('ru-RU') + '₽';
    document.querySelector('.stat-card:nth-child(2) .stat-value').textContent = data.stats.conversions;
    document.querySelector('.stat-card:nth-child(3) .stat-value').textContent = data.stats.ctr + '%';
    document.querySelector('.stat-card:nth-child(4) .stat-value').textContent = Math.round(data.stats.cpa) + '₽';
    
    // Update all charts
    updateAllCharts();
    
    // Update campaign cards based on period
    updateCampaignCards(data);
    
    // Update demographics and regions
    updateDemographics(data);
    updateRegions(data);
    updateDevices(data);
    
    // Update sections visibility based on period
    updateSectionsVisibility(periodKey);
    
    // Save selected period to localStorage
    localStorage.setItem('selectedPeriod', periodKey);
    
    // Trigger AOS refresh for smooth animations
    AOS.refresh();
}

// Function to update campaign cards
function updateCampaignCards(data) {
    const campaignsGrid = document.getElementById('campaignsGrid');
    if (!campaignsGrid) return;
    
    // For period2, we have different campaign structure
    if (currentPeriod === 'period2') {
        campaignsGrid.innerHTML = `
            <!-- МК кампания -->
            <div class="campaign-card best-performer" data-aos="fade-up" data-aos-delay="200">
                <div class="campaign-header">
                    <div class="campaign-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="campaign-info">
                        <h3>МК pocket-consultant</h3>
                        <p>#700947081</p>
                    </div>
                    <div class="performance-badge">
                        <span>Лучшая</span>
                    </div>
                </div>
                <div class="campaign-stats">
                    <div class="stat-row">
                        <span>Расход:</span>
                        <strong>18 152₽</strong>
                    </div>
                    <div class="stat-row">
                        <span>Конверсии:</span>
                        <strong>90</strong>
                    </div>
                    <div class="stat-row">
                        <span>CTR:</span>
                        <strong>3.32%</strong>
                    </div>
                    <div class="stat-row">
                        <span>CPA:</span>
                        <strong class="positive">202₽</strong>
                    </div>
                </div>
            </div>
            
            <!-- Поисковая кампания -->
            <div class="campaign-card" data-aos="fade-up" data-aos-delay="300">
                <div class="campaign-header">
                    <div class="campaign-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="campaign-info">
                        <h3>ad_poisk_PocketConsult</h3>
                        <p>#700208181</p>
                    </div>
                </div>
                <div class="campaign-stats">
                    <div class="stat-row">
                        <span>Расход:</span>
                        <strong>3 390₽</strong>
                    </div>
                    <div class="stat-row">
                        <span>Конверсии:</span>
                        <strong>10</strong>
                    </div>
                    <div class="stat-row">
                        <span>CTR:</span>
                        <strong class="positive">4.35%</strong>
                    </div>
                    <div class="stat-row">
                        <span>CPA:</span>
                        <strong>339₽</strong>
                    </div>
                </div>
            </div>
        `;
    } else {
        // For period1 and periodAll, restore original structure
        campaignsGrid.innerHTML = `
            <!-- Поисковая кампания -->
            <div class="campaign-card best-performer" data-aos="fade-up" data-aos-delay="200">
                <div class="campaign-header">
                    <div class="campaign-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="campaign-info">
                        <h3>Поиск</h3>
                        <p>#70020818</p>
                    </div>
                    <div class="performance-badge">
                        <span>Лучшая</span>
                    </div>
                </div>
                <div class="campaign-stats">
                    <div class="stat-row">
                        <span>Расход:</span>
                        <strong>${currentPeriod === 'periodAll' ? '7 918' : '5 093'}₽</strong>
                    </div>
                    <div class="stat-row">
                        <span>Конверсии:</span>
                        <strong>${currentPeriod === 'periodAll' ? '30' : '20'}</strong>
                    </div>
                    <div class="stat-row">
                        <span>CTR:</span>
                        <strong class="positive">${currentPeriod === 'periodAll' ? '5.10' : '5.61'}%</strong>
                    </div>
                    <div class="stat-row">
                        <span>CPA:</span>
                        <strong>${currentPeriod === 'periodAll' ? '264' : '255'}₽</strong>
                    </div>
                </div>
            </div>

            <!-- РСЯ кампания -->
            <div class="campaign-card" data-aos="fade-up" data-aos-delay="300">
                <div class="campaign-header">
                    <div class="campaign-icon">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <div class="campaign-info">
                        <h3>РСЯ</h3>
                        <p>#70020788</p>
                    </div>
                </div>
                <div class="campaign-stats">
                    <div class="stat-row">
                        <span>Расход:</span>
                        <strong>1 440₽</strong>
                    </div>
                    <div class="stat-row">
                        <span>Конверсии:</span>
                        <strong>4</strong>
                    </div>
                    <div class="stat-row">
                        <span>CTR:</span>
                        <strong class="negative">1.17%</strong>
                    </div>
                    <div class="stat-row">
                        <span>CPA:</span>
                        <strong>360₽</strong>
                    </div>
                </div>
            </div>

            <!-- МК кампания -->
            <div class="campaign-card" data-aos="fade-up" data-aos-delay="400">
                <div class="campaign-header">
                    <div class="campaign-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="campaign-info">
                        <h3>Мастер-кампания</h3>
                        <p>#70094708</p>
                    </div>
                </div>
                <div class="campaign-stats">
                    <div class="stat-row">
                        <span>Расход:</span>
                        <strong>${currentPeriod === 'periodAll' ? '33 656' : '18 529'}₽</strong>
                    </div>
                    <div class="stat-row">
                        <span>Конверсии:</span>
                        <strong>${currentPeriod === 'periodAll' ? '156' : '66'}</strong>
                    </div>
                    <div class="stat-row">
                        <span>CTR:</span>
                        <strong>${currentPeriod === 'periodAll' ? '2.89' : '2.65'}%</strong>
                    </div>
                    <div class="stat-row">
                        <span>CPA:</span>
                        <strong>${currentPeriod === 'periodAll' ? '216' : '281'}₽</strong>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Reinitialize AOS for new elements
    AOS.refresh();
}

// Function to update demographics
function updateDemographics(data) {
    const demoGrid = document.getElementById('demoGrid');
    if (!demoGrid) return;
    
    // Calculate gender-specific stats based on period
    let genderStats = {
        women: { shows: 38572, clicks: 1085, conversions: 47, cpa: 241, budget: 11305 },
        men: { shows: 22749, clicks: 570, conversions: 19, cpa: 372, budget: 7065 }
    };
    
    if (currentPeriod === 'period2') {
        genderStats = {
            women: { shows: 13980, clicks: 487, conversions: 67, cpa: 182, budget: 12221 },
            men: { shows: 6770, clicks: 212, conversions: 22, cpa: 264, budget: 5808 }
        };
    } else if (currentPeriod === 'periodAll') {
        genderStats = {
            women: { shows: 52552, clicks: 1572, conversions: 114, cpa: 185, budget: 21489 },
            men: { shows: 29519, clicks: 782, conversions: 41, cpa: 296, budget: 11913 }
        };
    }
    
    // Update age stats based on period
    let ageStats = [
        { label: '25-34 года', percent: 12, shows: 12760, clicks: 417, conversions: 26, cpa: 207, budget: 5386 },
        { label: '18-24 года', percent: 8, shows: 8627, clicks: 264, conversions: 14, cpa: 328, budget: 4588 }
    ];
    
    if (currentPeriod === 'period2') {
        ageStats = [
            { label: '25-34 года', percent: 29, shows: 9380, clicks: 320, conversions: 33, cpa: 157, budget: 5181 },
            { label: '18-24 года', percent: 26, shows: 8410, clicks: 286, conversions: 28, cpa: 155, budget: 4335 }
        ];
    } else if (currentPeriod === 'periodAll') {
        ageStats = [
            { label: '25-34 года', percent: 21, shows: 22140, clicks: 737, conversions: 59, cpa: 179, budget: 10567 },
            { label: '18-24 года', percent: 17, shows: 17037, clicks: 550, conversions: 42, cpa: 232, budget: 8923 }
        ];
    }
    
    demoGrid.innerHTML = `
        <div class="demo-card">
            <h3><i class="fas fa-venus-mars"></i> Анализ по полу</h3>
            <div class="demo-stats">
                <div class="demo-item best">
                    <div class="demo-header">
                        <span class="demo-label">Женщины</span>
                        <span class="demo-percentage">${data.demographics.gender.data[0]}%</span>
                    </div>
                    <div class="demo-details">
                        <span>${genderStats.women.shows.toLocaleString('ru-RU')} показов • ${genderStats.women.clicks.toLocaleString('ru-RU')} кликов</span>
                        <span>${genderStats.women.conversions} конверсий • <strong class="positive">CPA: ${genderStats.women.cpa}₽</strong></span>
                        <span>Расход: ${genderStats.women.budget.toLocaleString('ru-RU')}₽</span>
                    </div>
                </div>
                <div class="demo-item">
                    <div class="demo-header">
                        <span class="demo-label">Мужчины</span>
                        <span class="demo-percentage">${data.demographics.gender.data[1]}%</span>
                    </div>
                    <div class="demo-details">
                        <span>${genderStats.men.shows.toLocaleString('ru-RU')} показов • ${genderStats.men.clicks} кликов</span>
                        <span>${genderStats.men.conversions} конверсий • <strong class="${genderStats.men.cpa > 300 ? 'negative' : 'neutral'}">CPA: ${genderStats.men.cpa}₽</strong></span>
                        <span>Расход: ${genderStats.men.budget.toLocaleString('ru-RU')}₽</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-card">
            <h3><i class="fas fa-user-clock"></i> Анализ по возрасту</h3>
            <div class="demo-stats">
                ${ageStats.map(age => `
                    <div class="demo-item ${age.cpa < 200 ? 'best' : age.cpa < 300 ? 'good' : ''}">
                        <div class="demo-header">
                            <span class="demo-label">${age.label}</span>
                            <span class="demo-percentage">${age.percent}%</span>
                        </div>
                        <div class="demo-details">
                            <span>${age.shows.toLocaleString('ru-RU')} показов • ${age.clicks} кликов</span>
                            <span>${age.conversions} конверсий • <strong class="${age.cpa < 200 ? 'positive' : 'neutral'}">CPA: ${age.cpa}₽</strong></span>
                            <span>Расход: ${age.budget.toLocaleString('ru-RU')}₽</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Function to update regions
function updateRegions(data) {
    const regionsGrid = document.getElementById('regionsGrid');
    if (!regionsGrid || !data.regions) return;
    
    regionsGrid.innerHTML = data.regions.map(region => `
        <div class="region-card ${region.cpa < 200 ? 'best' : region.cpa < 250 ? 'good' : region.cpa < 400 ? 'average' : 'poor'}">
            <div class="region-header">
                <h4>${region.name}</h4>
                ${region.badge ? `<span class="region-badge ${region.cpa < 200 ? '' : region.cpa > 500 ? 'poor' : 'good'}">${region.badge}</span>` : ''}
            </div>
            <div class="region-stats">
                <div class="stat-pair">
                    <span>Конверсии:</span>
                    <strong>${region.conversions}</strong>
                </div>
                <div class="stat-pair">
                    <span>CPA:</span>
                    <strong class="${region.cpa < 200 ? 'positive' : region.cpa < 300 ? 'neutral' : 'negative'}">${region.cpa}₽</strong>
                </div>
                <div class="stat-pair">
                    <span>Расход:</span>
                    <strong>${region.budget.toLocaleString('ru-RU')}₽</strong>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to update devices
function updateDevices(data) {
    const devicesGrid = document.getElementById('devicesGrid');
    if (!devicesGrid) return;
    
    // Device stats based on period
    let deviceStats = {
        smartphones: { shows: 56438, clicks: 1455, conversions: 49, cpa: 310, budget: 15186 },
        desktops: { shows: 7587, clicks: 275, conversions: 10, cpa: 249, budget: 2490 },
        tablets: { shows: 653, clicks: 16, conversions: 1, cpa: 440, budget: 440 }
    };
    
    if (currentPeriod === 'period2') {
        deviceStats = {
            smartphones: { shows: 17971, clicks: 566, conversions: 70, cpa: 218, budget: 15275 },
            desktops: { shows: 3061, clicks: 127, conversions: 19, cpa: 115, budget: 2181 },
            tablets: { shows: 200, clicks: 12, conversions: 1, cpa: 260, budget: 260 }
        };
    } else if (currentPeriod === 'periodAll') {
        deviceStats = {
            smartphones: { shows: 74409, clicks: 2021, conversions: 119, cpa: 237, budget: 27915 },
            desktops: { shows: 10648, clicks: 402, conversions: 29, cpa: 164, budget: 4671 },
            tablets: { shows: 853, clicks: 28, conversions: 2, cpa: 329, budget: 657 }
        };
    }
    
    devicesGrid.innerHTML = `
        <div class="device-card dominant">
            <div class="device-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <div class="device-info">
                <h4>Смартфоны</h4>
                <span class="device-share">${data.devices.data[0]}%</span>
                <div class="device-stats">
                    <div>${deviceStats.smartphones.shows.toLocaleString('ru-RU')} показов • ${deviceStats.smartphones.clicks.toLocaleString('ru-RU')} кликов</div>
                    <div>${deviceStats.smartphones.conversions} конверсий • <strong>CPA: ${deviceStats.smartphones.cpa}₽</strong></div>
                    <div>Расход: <strong>${deviceStats.smartphones.budget.toLocaleString('ru-RU')}₽</strong></div>
                </div>
            </div>
        </div>
        
        <div class="device-card">
            <div class="device-icon">
                <i class="fas fa-desktop"></i>
            </div>
            <div class="device-info">
                <h4>Десктопы</h4>
                <span class="device-share">${data.devices.data[1]}%</span>
                <div class="device-stats">
                    <div>${deviceStats.desktops.shows.toLocaleString('ru-RU')} показов • ${deviceStats.desktops.clicks} кликов</div>
                    <div>${deviceStats.desktops.conversions} конверсий • <strong class="positive">CPA: ${deviceStats.desktops.cpa}₽</strong></div>
                    <div>Расход: <strong>${deviceStats.desktops.budget.toLocaleString('ru-RU')}₽</strong></div>
                </div>
            </div>
        </div>
        
        <div class="device-card minimal">
            <div class="device-icon">
                <i class="fas fa-tablet-alt"></i>
            </div>
            <div class="device-info">
                <h4>Планшеты</h4>
                <span class="device-share">${data.devices.data[2]}%</span>
                <div class="device-stats">
                    <div>${deviceStats.tablets.shows} показов • ${deviceStats.tablets.clicks} кликов</div>
                    <div>${deviceStats.tablets.conversions} конверсии • <strong>CPA: ${deviceStats.tablets.cpa}₽</strong></div>
                    <div>Расход: <strong>${deviceStats.tablets.budget}₽</strong></div>
                </div>
            </div>
        </div>
    `;
}

// Function to update sections visibility based on period
function updateSectionsVisibility(periodKey) {
    // Hide/show groups section - only available for period1 and periodAll
    const groupsSection = document.getElementById('groups');
    if (groupsSection) {
        groupsSection.style.display = (periodKey === 'period1' || periodKey === 'periodAll') ? 'block' : 'none';
    }
    
    // Show/hide comparison section - only for periodAll
    const comparisonSection = document.getElementById('comparisonSection');
    if (comparisonSection) {
        comparisonSection.style.display = periodKey === 'periodAll' ? 'block' : 'none';
    }
    
    // Update insights section based on period
    updateInsights(periodKey);
}

// Function to update insights based on period
function updateInsights(periodKey) {
    const insightsGrid = document.querySelector('.insights-grid');
    if (!insightsGrid) return;
    
    let insights = [];
    
    if (periodKey === 'period1') {
        // Original insights for first period
        insights = [
            {
                icon: 'fa-search',
                title: 'Поисковая реклама - лидер',
                text: 'CTR 5.61% против 1.17% в РСЯ. Рекомендуем увеличить бюджет поиска на 30%.'
            },
            {
                icon: 'fa-venus',
                title: 'Женщины конвертируются лучше',
                text: 'CPA женщин на 31% ниже мужчин (182₽ vs 264₽). Усилить таргетинг на женскую аудиторию.'
            },
            {
                icon: 'fa-users',
                title: 'Возраст 25-34 - золотая группа',
                text: 'Лучший CPA 207₽ и максимум конверсий. Приоритет в таргетинге.'
            },
            {
                icon: 'fa-comments',
                title: 'Налоговый вычет - хит',
                text: 'CTR 6.38% и CPA 247₽. Масштабировать успешную тематику.'
            },
            {
                icon: 'fa-map-marker-alt',
                title: 'Северо-Запад эффективен',
                text: 'CPA 204₽ при 11 конверсиях. Увеличить охват региона.'
            },
            {
                icon: 'fa-desktop',
                title: 'Десктопы недооценены',
                text: 'При 12% трафика дают CPA 249₽. Поднять ставки на десктопы.'
            },
            {
                icon: 'fa-exclamation-triangle',
                title: 'РСЯ требует оптимизации',
                text: 'CTR всего 1.17%. Пересмотреть креативы и таргетинг.'
            },
            {
                icon: 'fa-chart-line',
                title: 'Потенциал роста есть',
                text: 'При оптимизации можно снизить общий CPA до 230₽.'
            }
        ];
    } else if (periodKey === 'period2') {
        // New insights for second period
        insights = [
            {
                icon: 'fa-robot',
                title: 'Мастер-кампания доминирует',
                text: 'CPA 202₽ с 90 конверсиями из 100. Эффективная автоматизация таргетинга.'
            },
            {
                icon: 'fa-venus',
                title: 'Женская аудитория растет',
                text: 'Доля увеличилась до 66%, CPA снизился до 152₽. Стратегия работает.'
            },
            {
                icon: 'fa-map-marked-alt',
                title: 'Уральский ФО - чемпион',
                text: 'CPA всего 116₽! Южный ФО также эффективен с CPA 126₽.'
            },
            {
                icon: 'fa-desktop',
                title: 'Десктопы улучшились',
                text: 'CPA снизился до 138₽, доля выросла до 14%. Продолжать оптимизацию.'
            },
            {
                icon: 'fa-exclamation-circle',
                title: 'Проблемные регионы',
                text: 'Северо-Кавказский ФО и Крым с CPA 639₽ и 356₽. Требуют исключения.'
            },
            {
                icon: 'fa-chart-line',
                title: 'Общая эффективность выросла',
                text: 'CPA снизился с 278₽ до 215₽ (на 23%), CTR вырос до 3.68%.'
            },
            {
                icon: 'fa-users',
                title: 'Молодежь доминирует',
                text: '18-34 года дают 61 конверсию из 100 с лучшим CPA.'
            },
            {
                icon: 'fa-trophy',
                title: 'Цели достигнуты',
                text: '100 конверсий за период с улучшением всех метрик.'
            }
        ];
    } else {
        // Remove insights for periodAll - will be replaced by comparison
        const insightsSection = insightsGrid.closest('.insights-section');
        if (insightsSection) {
            insightsSection.style.display = 'none';
        }
        return;
    }
    
    // Make sure insights section is visible for other periods
    const insightsSection = insightsGrid.closest('.insights-section');
    if (insightsSection) {
        insightsSection.style.display = 'block';
    }
    
    insightsGrid.innerHTML = insights.map((insight, index) => `
        <div class="insight-card" data-aos="fade-up" data-aos-delay="${200 + index * 100}">
            <div class="insight-icon">
                <i class="fas ${insight.icon}"></i>
            </div>
            <h3>${insight.title}</h3>
            <p>${insight.text}</p>
        </div>
    `).join('');
}

// Function to destroy and recreate all charts
function updateAllCharts() {
    const data = periodsData[currentPeriod];
    
    // Destroy existing charts
    Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
    });
    
    // Clear chart instances
    chartInstances = {};
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        // Recreate all charts with new data
        createBudgetChart(data);
        createCTRChart(data);
        createConversionsChart(data);
        createGenderChart(data);
        createAgeChart(data);
        createDeviceChart(data);
        
        // Re-add chart loading animation
        addChartLoadingAnimation();
    }, 100);
}

// Budget Distribution Chart
function createBudgetChart(data) {
    const budgetCtx = document.getElementById('budgetChart').getContext('2d');
    const budgetGradient1 = createGradient(budgetCtx, colors.primary, colors.secondary);
    const budgetGradient2 = createGradient(budgetCtx, colors.success, '#22c55e');
    const budgetGradient3 = createGradient(budgetCtx, colors.warning, '#f59e0b');
    
    chartInstances.budget = new Chart(budgetCtx, {
        type: 'doughnut',
        data: {
            labels: data.campaigns.labels,
            datasets: [{
                data: data.campaigns.budget,
                backgroundColor: [budgetGradient1, budgetGradient2, budgetGradient3],
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 2,
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed.toLocaleString('ru-RU')}₽ (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// CTR Chart
function createCTRChart(data) {
    const ctrCtx = document.getElementById('ctrChart').getContext('2d');
    chartInstances.ctr = new Chart(ctrCtx, {
        type: 'bar',
        data: {
            labels: data.campaigns.ctr.labels,
            datasets: [{
                label: 'CTR (%)',
                data: data.campaigns.ctr.data,
                backgroundColor: [
                    createGradient(ctrCtx, colors.success, '#22c55e'),
                    createGradient(ctrCtx, colors.danger, '#ef4444'),
                    createGradient(ctrCtx, colors.warning, '#f59e0b')
                ],
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y: {
                    ...commonOptions.scales.y,
                    beginAtZero: true,
                    ticks: {
                        ...commonOptions.scales.y.ticks,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            }
        }
    });
}

// Conversions Chart
function createConversionsChart(data) {
    const conversionsCtx = document.getElementById('conversionsChart').getContext('2d');
    chartInstances.conversions = new Chart(conversionsCtx, {
        type: 'bar',
        data: {
            labels: data.campaigns.labels,
            datasets: [{
                label: 'Конверсии',
                data: data.campaigns.conversions,
                backgroundColor: createGradient(conversionsCtx, colors.primary, colors.secondary),
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y: {
                    ...commonOptions.scales.y,
                    beginAtZero: true
                }
            }
        }
    });
}

// Gender Distribution Chart
function createGenderChart(data) {
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    chartInstances.gender = new Chart(genderCtx, {
        type: 'doughnut',
        data: {
            labels: data.demographics.gender.labels,
            datasets: [{
                data: data.demographics.gender.data,
                backgroundColor: [
                    createGradient(genderCtx, '#ec4899', '#be185d'),
                    createGradient(genderCtx, colors.info, '#1d4ed8'),
                    createGradient(genderCtx, '#6b7280', '#374151')
                ],
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// Age Groups Chart
function createAgeChart(data) {
    const ageCtx = document.getElementById('ageChart').getContext('2d');
    chartInstances.age = new Chart(ageCtx, {
        type: 'line',
        data: {
            labels: data.demographics.age.labels,
            datasets: [
                {
                    label: 'CPA (₽)',
                    data: data.demographics.age.cpa,
                    borderColor: colors.primary,
                    backgroundColor: colors.primary + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: colors.primary,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                },
                {
                    label: 'Конверсии',
                    data: data.demographics.age.conversions,
                    borderColor: colors.success,
                    backgroundColor: colors.success + '20',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: colors.success,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b0b0'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b0b0',
                        callback: function(value) {
                            return value + '₽';
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        color: '#b0b0b0'
                    }
                }
            }
        }
    });
}

// Device Distribution Chart
function createDeviceChart(data) {
    const deviceCtx = document.getElementById('deviceChart').getContext('2d');
    chartInstances.device = new Chart(deviceCtx, {
        type: 'doughnut',
        data: {
            labels: data.devices.labels,
            datasets: [{
                data: data.devices.data,
                backgroundColor: [
                    createGradient(deviceCtx, colors.primary, colors.secondary),
                    createGradient(deviceCtx, colors.info, '#1d4ed8'),
                    createGradient(deviceCtx, colors.warning, '#f59e0b')
                ],
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scroll behavior is already handled by CSS and the nav links

// Add hover effects to cards
document.querySelectorAll('.campaign-card, .chart-container, .insight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation for charts
function addChartLoadingAnimation() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach((container, index) => {
        const canvas = container.querySelector('canvas');
        if (canvas) {
            canvas.style.opacity = '0';
            canvas.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                canvas.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                canvas.style.opacity = '1';
                canvas.style.transform = 'scale(1)';
            }, index * 200);
        }
    });
}

// Initialize chart animations when page loads
window.addEventListener('load', () => {
    // Check for saved period in localStorage
    const savedPeriod = localStorage.getItem('selectedPeriod');
    if (savedPeriod && periodsData[savedPeriod]) {
        currentPeriod = savedPeriod;
    }
    
    // Initialize charts with current period data
    updatePeriodData(currentPeriod);
    
    setTimeout(addChartLoadingAnimation, 500);
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Add intersection observer for more sophisticated animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.stat-card, .campaign-card, .chart-container, .insight-card').forEach(el => {
    observer.observe(el);
});

// Add CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .stat-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .stat-card:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
    }
    
    .campaign-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .insight-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .chart-container {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);