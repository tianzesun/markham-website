# Hey Markham AI - Marketing Website

This is the official marketing and investor website for Hey Markham AI, a voice-enabled municipal assistant for the City of Markham.

## Purpose

This website is designed to:
- Showcase the product to government officials and city leadership
- Present ROI and cost-benefit analysis to investors
- Demonstrate the technology and features
- Provide comprehensive documentation and technical specifications
- Enable stakeholders to schedule demos and request information

## Website Sections

### 1. Hero Section
- Compelling headline and value proposition
- Key statistics (20% call center reduction, <2s response time, etc.)
- Live demo window showing conversation
- Primary CTAs: "See Demo" and "View ROI Analysis"

### 2. Problem Statement
- Current challenges facing municipal services
- Data on overwhelmed call centers, limited availability, and accessibility barriers
- Sets up the need for the solution

### 3. Solution & Features
- Voice-first interface with wake word detection
- AI-powered answers with RAG technology
- Real-time data integration
- Multi-platform access
- Multilingual support
- Security and privacy features

### 4. Interactive Demo
- Clickable example queries
- Simulated chat interface
- Shows real responses for:
  - Garbage collection schedules
  - Parks information
  - Events calendar
  - Facility status
  - Recycling guidelines

### 5. Benefits
- Tabbed interface for different stakeholders:
  - **Residents**: Instant answers, 24/7 availability, accessibility
  - **City**: Cost reduction, data insights, innovation leadership
  - **Staff**: Focus on complex issues, reduced burnout, better tools

### 6. ROI Analysis
- Total 3-year savings: $450K - $900K
- Cost breakdown and savings projections
- Visual chart showing 5-year cost-benefit
- Break-even point: 8-12 months

### 7. Technology Stack
- AI & ML components (GPT-4, Whisper, TTS)
- Frontend and backend technologies
- Infrastructure and security features
- Monitoring and analytics capabilities

### 8. Implementation Roadmap
- 4-sprint development timeline (13 weeks)
- Visual timeline with deliverables
- Clear milestones and success criteria

### 9. Social Proof
- Case studies from similar implementations:
  - City of Boston: 35% call volume reduction
  - Singapore: 60% resident adoption
  - Amsterdam: €2M annual savings

### 10. Team
- Overview of expert development team
- Specializations and experience

### 11. Call-to-Action
- Schedule demo
- Download full proposal
- Contact information

## File Structure

```
website/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # All styling
├── js/
│   └── main.js            # Interactive features
├── images/                # Images and graphics (placeholder)
├── assets/                # Downloadable documents
│   ├── HeyMarkham-Proposal.pdf
│   ├── ROI-Analysis.pdf
│   └── Technical-Specs.pdf
└── README.md              # This file
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, and 968px
- Touch-friendly navigation and interactions

### Interactive Elements
- Tab switching for benefits section
- Working demo chat interface with simulated AI responses
- Smooth scroll navigation
- Animated elements on scroll
- Hover effects and transitions

### Performance Optimizations
- Lazy loading for images
- Minimal dependencies (no heavy frameworks)
- Optimized CSS with CSS variables
- Efficient JavaScript with event delegation

### Accessibility
- Semantic HTML5
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast text
- Readable font sizes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Quick Deployment

The website is a static site and can be deployed to any hosting platform:

#### Option 1: GitHub Pages
```bash
# From website directory
git add .
git commit -m "Deploy website"
git push origin main

# Enable GitHub Pages in repository settings
# Point to /website directory or publish to gh-pages branch
```

#### Option 2: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd website
netlify deploy --prod
```

#### Option 3: AWS S3 + CloudFront
```bash
# Install AWS CLI
aws s3 sync . s3://hey-markham-website --delete
aws cloudfront create-invalidation --distribution-id XXXX --paths "/*"
```

#### Option 4: Simple Web Server
```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve

# Open http://localhost:8000
```

### Custom Domain Setup

1. Point your domain to hosting provider
2. Update DNS records (A or CNAME)
3. Enable HTTPS/SSL certificate
4. Update any absolute URLs in code

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* etc. */
}
```

### Content
- Edit text directly in `index.html`
- Update statistics and numbers as needed
- Add real case studies and testimonials
- Replace placeholder images

### Demo Responses
Edit `js/main.js` to customize demo responses:
```javascript
const demoResponses = {
    garbage: {
        question: "...",
        answer: "...",
        // ...
    }
}
```

## Assets Needed

### Images (to be added)
- [ ] Logo (SVG preferred, or PNG at 2x resolution)
- [ ] Screenshots of actual app interface
- [ ] Team member photos
- [ ] City of Markham photos/graphics
- [ ] Icon set for features
- [ ] Social media preview image (1200x630px)

### Documents (to be created)
- [ ] Full project proposal (PDF)
- [ ] Detailed ROI analysis (PDF)
- [ ] Technical specifications (PDF)
- [ ] Privacy policy
- [ ] Terms of service

## Analytics Integration

To add Google Analytics:

1. Get your GA4 tracking ID
2. Add to `<head>` in index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Events are already tracked in `main.js` via `trackEvent()` function

## SEO Optimization

Current implementation includes:
- Semantic HTML5 structure
- Meta description
- Meta keywords
- Proper heading hierarchy (H1, H2, H3, H4)
- Alt text for images (when added)
- Fast loading time
- Mobile-responsive

### To improve further:
- Add Open Graph tags for social sharing
- Create sitemap.xml
- Add robots.txt
- Implement schema.org markup
- Optimize images (WebP format)
- Add meta tags for Twitter Cards

## Security Considerations

- No sensitive data stored in frontend code
- All forms should POST to secure backend
- HTTPS required for production
- Content Security Policy headers recommended
- Regular dependency updates (if using npm packages)

## Testing Checklist

Before presenting to investors/government:

- [ ] Test on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify all links work
- [ ] Check all interactive features (tabs, demo, navigation)
- [ ] Proofread all text for typos
- [ ] Verify statistics and numbers are accurate
- [ ] Test contact form submission
- [ ] Check page load speed (aim for <3 seconds)
- [ ] Verify responsive design at all breakpoints
- [ ] Test with screen reader for accessibility
- [ ] Check console for JavaScript errors
- [ ] Validate HTML and CSS

## Presentation Tips

### For Government Officials
- Focus on: Cost savings, resident satisfaction, innovation leadership
- Highlight: 20% call center reduction, 24/7 availability
- Emphasize: Security, privacy, accessibility compliance
- Demo: Show actual queries residents would ask

### For Investors
- Focus on: ROI, scalability, market opportunity
- Highlight: 8-12 month break-even, $1.2M+ 5-year savings
- Emphasize: Proven technology, experienced team
- Demo: Technical capabilities and AI accuracy

### For Technical Teams
- Focus on: Architecture, tech stack, security
- Highlight: Modern frameworks, scalable infrastructure
- Emphasize: Best practices, testing, monitoring
- Demo: Code quality, documentation, development process

## Contact & Support

For questions about the website or to request changes:
- Email: dev@heymarkham.ai
- GitHub Issues: [Repository URL]

## License

© 2025 Hey Markham AI. All rights reserved.
