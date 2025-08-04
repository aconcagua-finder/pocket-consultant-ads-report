# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive web report for Pocket Consultant's advertising campaigns (3-15 July 2025). It's a single-page application built with vanilla HTML/CSS/JavaScript that displays advertising campaign analytics with interactive charts and animations.

## Development Commands

Since this is a static website with no build process:

### Viewing the site locally
```bash
# Option 1: Open index.html directly in a browser
# Option 2: Use a simple HTTP server
python -m http.server 8000
# or
npx http-server
```

### Git operations
```bash
# Initialize repository (script provided)
bash init-git.sh

# Deploy to GitHub Pages
git add .
git commit -m "Your commit message"
git push origin main
```

## Architecture & Structure

### Core Files
- **index.html** - Main HTML structure with sections for overview, campaigns, analytics, demographics, and insights
- **style.css** - Modern dark theme styling with gradients, glass effects, and responsive design
- **script.js** - Chart.js implementations and AOS animations initialization

### Key Technologies
- **Chart.js** (v3.9.1) - For interactive data visualizations
- **AOS** (Animate On Scroll) - For scroll-triggered animations
- **Font Awesome** - For icons throughout the interface
- **Google Fonts** (Montserrat) - Primary typography

### Data Structure
All campaign data is hardcoded in script.js as JavaScript objects and arrays:
- Campaign statistics (budget, CTR, conversions, CPA)
- Ad group performance data
- Demographic segmentation (gender, age)
- Geographic distribution
- Device statistics

### Chart Implementations
The report includes 6 main charts:
1. **Budget Distribution** (Doughnut) - Shows spending across campaigns
2. **CTR Comparison** (Bar) - CTR performance by campaign
3. **Conversions** (Bar) - Conversion counts by campaign
4. **Gender Distribution** (Pie) - Performance by gender
5. **Age Effectiveness** (Line) - CPA by age group
6. **Device Distribution** (Doughnut) - Traffic by device type

### Design Patterns
- CSS Grid and Flexbox for responsive layouts
- CSS custom properties for theming
- Glass morphism effects with backdrop-filter
- Gradient backgrounds and hover effects
- Mobile-first responsive design

## Working with the Codebase

### Adding New Data
To update campaign data, modify the chart data objects in script.js:
- Budget data: Lines 80-88
- CTR data: Lines 120-130
- Conversion data: Lines 160-170
- Demographics: Lines 200-210, 240-250
- Device stats: Lines 330-340

### Styling Guidelines
- Use existing CSS variables for colors and gradients
- Maintain glass effect consistency with backdrop-filter
- Keep mobile responsiveness in mind (breakpoints at 768px and 480px)
- Use existing animation classes from AOS library

### Chart Customization
All charts share common options defined in `commonOptions` object. To modify:
- Chart colors: Update the `colors` object
- Chart styling: Modify `commonOptions` 
- Gradients: Use `createGradient()` function

### Performance Considerations
- All external libraries are loaded from CDNs
- Images should be optimized before adding
- Animations are hardware-accelerated with CSS transforms
- Charts render once on page load