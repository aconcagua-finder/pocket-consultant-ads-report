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

// Budget Distribution Chart
const budgetCtx = document.getElementById('budgetChart').getContext('2d');
const budgetGradient1 = createGradient(budgetCtx, colors.primary, colors.secondary);
const budgetGradient2 = createGradient(budgetCtx, colors.success, '#22c55e');
const budgetGradient3 = createGradient(budgetCtx, colors.warning, '#f59e0b');

new Chart(budgetCtx, {
    type: 'doughnut',
    data: {
        labels: ['Мастер-кампания', 'Поиск', 'РСЯ'],
        datasets: [{
            data: [18529, 5093, 1440],
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

// CTR Chart
const ctrCtx = document.getElementById('ctrChart').getContext('2d');
new Chart(ctrCtx, {
    type: 'bar',
    data: {
        labels: ['Поиск', 'РСЯ', 'Мастер-кампания'],
        datasets: [{
            label: 'CTR (%)',
            data: [5.61, 1.17, 2.65],
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

// Conversions Chart
const conversionsCtx = document.getElementById('conversionsChart').getContext('2d');
new Chart(conversionsCtx, {
    type: 'bar',
    data: {
        labels: ['Мастер-кампания', 'Поиск', 'РСЯ'],
        datasets: [{
            label: 'Конверсии',
            data: [66, 20, 4],
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

// Gender Distribution Chart
const genderCtx = document.getElementById('genderChart').getContext('2d');
new Chart(genderCtx, {
    type: 'doughnut',
    data: {
        labels: ['Женщины', 'Мужчины', 'Неизвестно'],
        datasets: [{
            data: [59, 35, 6],
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

// Age Groups Chart
const ageCtx = document.getElementById('ageChart').getContext('2d');
new Chart(ageCtx, {
    type: 'line',
    data: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [
            {
                label: 'CPA (₽)',
                data: [328, 207, 314, 366, 298],
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
                data: [14, 26, 13, 6, 7],
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

// Device Distribution Chart
const deviceCtx = document.getElementById('deviceChart').getContext('2d');
new Chart(deviceCtx, {
    type: 'doughnut',
    data: {
        labels: ['Смартфоны', 'Десктопы', 'Планшеты'],
        datasets: [{
            data: [87, 12, 1],
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
    setTimeout(addChartLoadingAnimation, 500);
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