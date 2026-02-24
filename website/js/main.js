// Hey Markham AI - Main JavaScript File

// Demo Responses Database
const demoResponses = {
    garbage: {
        question: "When is my garbage collection?",
        answer: "Your garbage collection is on <strong>Thursday, November 16th</strong>. Recycling is collected on the same day. Please place bins at the curb before 7 AM.",
        actions: [
            { label: "📅 Add to Calendar", action: "calendar" },
            { label: "🔔 Set Reminder", action: "reminder" }
        ],
        source: "Recollect API"
    },
    parks: {
        question: "What parks are near me?",
        answer: "Based on your location, here are the nearest parks:\n\n<strong>1. Toogood Pond Park</strong> (1.2 km)\n- Splash pad, trails, playground\n- Hours: 6 AM - 10 PM\n\n<strong>2. Milne Dam Conservation Park</strong> (2.5 km)\n- Hiking trails, picnic areas\n- Hours: Dawn to dusk",
        actions: [
            { label: "📍 Get Directions", action: "directions" },
            { label: "ℹ️ More Info", action: "info" }
        ],
        source: "City of Markham OpenData"
    },
    events: {
        question: "What events are happening this weekend?",
        answer: "Here are upcoming events this weekend:\n\n<strong>Saturday, Nov 18</strong>\n• Winter Wonderland Festival @ Civic Centre (10 AM - 4 PM)\n• Family Skating @ Centennial Community Centre (1 PM - 3 PM)\n\n<strong>Sunday, Nov 19</strong>\n• Farmers Market @ Main Street (9 AM - 2 PM)",
        actions: [
            { label: "🎟️ Register", action: "register" },
            { label: "📅 Add to Calendar", action: "calendar" }
        ],
        source: "City Events Calendar"
    },
    facilities: {
        question: "Are there any splash pads open?",
        answer: "Unfortunately, splash pads are currently <strong>closed for the season</strong>. They typically operate from <strong>June to September</strong>.\n\nSplash pads will reopen in <strong>June 2026</strong>. Meanwhile, check out our indoor pools and community centres!",
        actions: [
            { label: "🏊 View Indoor Pools", action: "pools" },
            { label: "🔔 Remind Me in Spring", action: "remind" }
        ],
        source: "Parks & Recreation Database"
    },
    recycling: {
        question: "What can I recycle?",
        answer: "<strong>Accepted items:</strong>\n• Paper, cardboard, newspapers\n• Plastic bottles and containers (#1-7)\n• Metal cans and aluminum foil\n• Glass bottles and jars\n\n<strong>Not accepted:</strong>\n• Plastic bags (return to grocery stores)\n• Styrofoam\n• Electronics (take to depot)",
        actions: [
            { label: "📄 Full Guide", action: "guide" },
            { label: "📍 Find Depot", action: "depot" }
        ],
        source: "Waste Management Guidelines"
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Benefits Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Interactive Demo Functionality
const demoQueries = document.querySelectorAll('.demo-query');
const demoChat = document.getElementById('demoChat');
const demoInput = document.getElementById('demoInput');
const sendDemo = document.getElementById('sendDemo');

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'assistant'}`;

    if (isUser) {
        messageDiv.innerHTML = `<p>${message}</p>`;
    } else {
        const actionsHTML = message.actions ?
            `<div class="message-actions">
                ${message.actions.map(action =>
                    `<button class="action-btn">${action.label}</button>`
                ).join('')}
            </div>` : '';

        messageDiv.innerHTML = `
            <p>${message.answer}</p>
            ${actionsHTML}
            <span class="source">Source: ${message.source}</span>
        `;
    }

    demoChat.appendChild(messageDiv);
    demoChat.scrollTop = demoChat.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message assistant typing';
    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <span></span><span></span><span></span>
        </div>
    `;
    demoChat.appendChild(typingDiv);
    demoChat.scrollTop = demoChat.scrollHeight;
    return typingDiv;
}

function handleDemoQuery(queryType) {
    const response = demoResponses[queryType];
    if (!response) return;

    // Clear welcome message if it exists
    const welcome = demoChat.querySelector('.welcome-message');
    if (welcome) {
        welcome.remove();
    }

    // Add user message
    addMessage(response.question, true);

    // Show typing indicator
    const typing = showTypingIndicator();

    // Remove typing and add response after delay
    setTimeout(() => {
        typing.remove();
        addMessage(response);
    }, 1500);
}

// Demo query button clicks
demoQueries.forEach(button => {
    button.addEventListener('click', () => {
        const queryType = button.getAttribute('data-query');
        handleDemoQuery(queryType);
    });
});

// Clear chat functionality
const clearChatBtn = document.getElementById('clearChat');
if (clearChatBtn) {
    clearChatBtn.addEventListener('click', () => {
        if (demoChat) {
            demoChat.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">👋</div>
                    <h3>Welcome! I'm your AI assistant for Markham</h3>
                    <p>I can help you with garbage collection, parks, events, facilities, and more!</p>
                    <div class="welcome-suggestions">
                        <span class="suggestion-label">Try asking:</span>
                        <div class="suggestion-chips">
                            <span class="chip">"When's garbage day?"</span>
                            <span class="chip">"Find parks"</span>
                            <span class="chip">"What's happening this week?"</span>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}

// Demo input submission
function submitDemoInput() {
    const query = demoInput.value.trim();
    if (!query) return;

    // Clear welcome message if it exists
    const welcome = demoChat.querySelector('.welcome-message');
    if (welcome) {
        welcome.remove();
    }

    // Add user message
    addMessage(query, true);
    demoInput.value = '';

    // Show typing indicator
    const typing = showTypingIndicator();

    // Simulate AI response
    setTimeout(() => {
        typing.remove();

        // Try to match query to demo responses
        let matched = false;
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes('garbage') || lowerQuery.includes('collection') || lowerQuery.includes('waste')) {
            handleDemoQuery('garbage');
            matched = true;
        } else if (lowerQuery.includes('park') || lowerQuery.includes('playground')) {
            handleDemoQuery('parks');
            matched = true;
        } else if (lowerQuery.includes('event') || lowerQuery.includes('activity')) {
            handleDemoQuery('events');
            matched = true;
        } else if (lowerQuery.includes('splash') || lowerQuery.includes('pool')) {
            handleDemoQuery('facilities');
            matched = true;
        } else if (lowerQuery.includes('recycle') || lowerQuery.includes('recycling')) {
            handleDemoQuery('recycling');
            matched = true;
        }

        if (!matched) {
            // Generic response for unmatched queries
            const genericResponse = {
                answer: "I can help you with information about <strong>garbage collection</strong>, <strong>parks and recreation</strong>, <strong>city events</strong>, and more! Try asking about one of these topics, or click a suggested question on the left.",
                actions: [
                    { label: "📚 View Topics", action: "topics" }
                ],
                source: "Hey Markham AI"
            };
            addMessage(genericResponse);
        }
    }, 1500);
}

if (sendDemo) {
    sendDemo.addEventListener('click', submitDemoInput);
}

if (demoInput) {
    demoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitDemoInput();
        }
    });
}

// Scroll animations (fade in on scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, benefit items, etc.
const animatedElements = document.querySelectorAll('.feature-card, .benefit-item, .problem-card, .case-card, .team-member');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Sticky navbar on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }

    lastScroll = currentScroll;
});

// Number counter animation for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when ROI section is visible
const roiSection = document.querySelector('.roi-section');
if (roiSection) {
    const roiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate numbers (example - would need to be customized per element)
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('%')) {
                        const num = parseInt(text);
                        animateCounter(stat, num);
                        stat.textContent = num + '%';
                    }
                });
                roiObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    roiObserver.observe(roiSection);
}

// Form validation (if contact form exists)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would send the data to your backend
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your interest! We will contact you shortly.');
        contactForm.reset();
    });
}

// Print functionality for documentation
function printPage() {
    window.print();
}

// Download proposal functionality (placeholder)
function downloadProposal() {
    alert('Proposal download functionality would be implemented here.');
}

// Initialize tooltips (if using a tooltip library)
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });

        el.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hey Markham AI website loaded!');
    initTooltips();

    // Add any other initialization code here
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Analytics tracking (placeholder - would integrate with Google Analytics, etc.)
function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
    // gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('CTA', 'click', this.textContent.trim());
    });
});

// Track demo interactions
if (demoQueries.length > 0) {
    demoQueries.forEach(query => {
        query.addEventListener('click', function() {
            trackEvent('Demo', 'query_click', this.textContent.trim());
        });
    });
}

// Add smooth reveal animation for hero section
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 100);
    }

    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroVisual.style.transition = 'all 0.8s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'translateY(0)';
        }, 300);
    }
});

// ==========================================
// PHONE DEMO INTERACTIVITY
// ==========================================

// Phone demo elements
const phoneMicButton = document.getElementById('phoneMicButton');
const phoneWaveform = document.getElementById('phoneWaveform');
const voiceConversation = document.getElementById('voiceConversation');
const commandChips = document.querySelectorAll('.command-chip');

// Add voice message to phone conversation
function addVoiceMessage(text, isUser = false) {
    // Remove prompt if it exists
    const prompt = voiceConversation.querySelector('.voice-prompt');
    if (prompt) {
        prompt.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `voice-message ${isUser ? 'user' : 'assistant'}`;
    messageDiv.textContent = text;

    voiceConversation.appendChild(messageDiv);
    voiceConversation.scrollTop = voiceConversation.scrollHeight;
}

// Simulate listening state
function simulateListening() {
    if (!phoneMicButton || !phoneWaveform) return;

    // Add listening states
    phoneMicButton.classList.add('listening');
    phoneWaveform.classList.add('active');

    // Remove after 2 seconds
    setTimeout(() => {
        phoneMicButton.classList.remove('listening');
        phoneWaveform.classList.remove('active');
    }, 2000);
}

// Handle voice command
function handleVoiceCommand(commandType) {
    const response = demoResponses[commandType];
    if (!response) return;

    // Clear prompt if exists
    const prompt = voiceConversation.querySelector('.voice-prompt');
    if (prompt) {
        prompt.remove();
    }

    // Simulate listening
    simulateListening();

    // Add user message after brief delay
    setTimeout(() => {
        addVoiceMessage(response.question, true);

        // Add AI response after another delay
        setTimeout(() => {
            // Strip HTML tags for voice display
            const cleanAnswer = response.answer.replace(/<[^>]*>/g, '');
            // Get first sentence or first 120 characters
            const shortAnswer = cleanAnswer.split('\n')[0].substring(0, 120) + '...';
            addVoiceMessage(shortAnswer, false);
        }, 1500);
    }, 500);
}

// Command chip click handlers
if (commandChips.length > 0) {
    commandChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const command = this.getAttribute('data-command');
            handleVoiceCommand(command);

            // Track event
            trackEvent('Phone Demo', 'command_click', command);
        });
    });
}

// Microphone button click handler
if (phoneMicButton) {
    phoneMicButton.addEventListener('click', function() {
        // Simulate a random command
        const commands = ['garbage', 'parks', 'events', 'facilities', 'recycling'];
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        handleVoiceCommand(randomCommand);

        // Track event
        trackEvent('Phone Demo', 'mic_click', 'random_command');
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const backToTopButton = document.querySelector('.back-to-top');

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        trackEvent('Navigation', 'back_to_top', 'button_click');
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ==========================================
// IMPROVED MOBILE MENU
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

        // Toggle menu
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');

        // Update ARIA attribute
        hamburger.setAttribute('aria-expanded', !isExpanded);

        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';

        trackEvent('Navigation', 'mobile_menu_toggle', isExpanded ? 'close' : 'open');
    });

    // Close menu when clicking on a nav link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });
}

// ==========================================
// KEYBOARD NAVIGATION IMPROVEMENTS
// ==========================================

// Escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// ==========================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ==========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler for better performance
const debouncedScroll = debounce(() => {
    // Any additional scroll-based functionality can go here
}, 100);
